/** Reproducible Chromium motion evidence; production preview must already run on loopback. */
import {chromium} from 'playwright-core';
import fs from 'node:fs/promises';
import {gzipSync} from 'node:zlib';
const label=process.argv[2];if(!['before','after','followup'].includes(label))throw new Error('Use before, after or followup');
const base='http://127.0.0.1:4173';const out=`docs/qa/checkpoint-c/performance/${label}`;await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
const scenarios=[
 ['workspace-navigation','rule-shift',p=>p.getByRole('link',{name:'Explore full allocation',exact:true}),p=>p.getByRole('link',{name:'Explore full allocation',exact:true}).click()],
 ['policy-selection','policy',p=>p.getByRole('combobox',{name:'Inspect component',exact:true}),p=>p.getByRole('combobox',{name:'Inspect component',exact:true}).selectOption('formula')],
 ['chapter-navigation','puzzle',p=>p.getByRole('tab',{name:"02 What's missing",exact:true}),p=>p.getByRole('tab',{name:"02 What's missing",exact:true}).click()],
 ['source-open','puzzle',p=>p.getByRole('button',{name:'Inspect puzzle source S1',exact:true}),p=>p.getByRole('button',{name:'Inspect puzzle source S1',exact:true}).click()],
 ['source-close','puzzle',p=>p.getByRole('button',{name:'Close source inspector',exact:true}),p=>p.keyboard.press('Escape')],
 ['ledger-filter','awards',p=>p.getByLabel('Search village or kecamatan'),p=>p.getByLabel('Search village or kecamatan').fill('Arang')]
];
const measuredScenarios=scenarios.filter(([name])=>label!=='followup'||['workspace-navigation','source-open'].includes(name));
const results=[];const recordOnly=process.argv.includes('--record-only');
for(const width of recordOnly?[]:[1440,390]){
 const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'no-preference'});const page=await context.newPage();const cdp=await context.newCDPSession(page);await cdp.send('Performance.enable');await cdp.send('Emulation.setCPUThrottlingRate',{rate:label==='followup'?1:4});
 await page.addInitScript(()=>{
  window.__motion={active:false,raf:[],shifts:[],tasks:[],events:[],scroll:[]};const m=window.__motion;let last=0;function frame(t){if(m.active&&last)m.raf.push(t-last);last=t;requestAnimationFrame(frame)}requestAnimationFrame(frame);
  for(const [type,key] of [['longtask','tasks'],['layout-shift','shifts'],['event','events']]){try{new PerformanceObserver(list=>{if(m.active)m[key].push(...list.getEntries().map(e=>({name:e.name,duration:e.duration,value:e.value,hadRecentInput:e.hadRecentInput})))}).observe({type,buffered:false,durationThreshold:16})}catch{}}
  const scroll=Element.prototype.scrollIntoView;Element.prototype.scrollIntoView=function(opts){if(m.active)m.scroll.push({id:this.id,className:typeof this.className==='string'?this.className:'',behavior:opts?.behavior});return scroll.call(this,opts)};
 });
 await cdp.send('Tracing.start',{categories:'devtools.timeline,blink.user_timing,disabled-by-default-devtools.timeline.frames',transferMode:'ReturnAsStream'});
 for(let repetition=1;repetition<=3;repetition++)for(const [name,route,target,action] of measuredScenarios){
  await page.goto(`${base}/#${route}`);await page.reload();await page.locator('#puzzle').waitFor({state:'attached'});await page.evaluate(()=>document.fonts.ready);if(name==='source-close'){await page.getByRole('button',{name:'Inspect puzzle source S1',exact:true}).click();await page.waitForTimeout(400)}
  await target(page).scrollIntoViewIfNeeded();await page.waitForTimeout(350);
  const before=await cdp.send('Performance.getMetrics');await page.evaluate(n=>{const m=window.__motion;m.raf=[];m.shifts=[];m.tasks=[];m.events=[];m.scroll=[];m.active=true;performance.mark(n+'-start')},name);
  await action(page);await page.waitForTimeout(600);
  const sample=await page.evaluate(n=>{const m=window.__motion;m.active=false;performance.mark(n+'-end');return {raf:m.raf,shifts:m.shifts,tasks:m.tasks,events:m.events,scrollCalls:m.scroll,animations:document.getAnimations().map(a=>({name:a.animationName||'WAAPI',state:a.playState})),effects:[...document.querySelectorAll('.allocation-summary,.rule-stack button')].filter(e=>e.getClientRects().length).map(e=>({selector:e.className,filter:getComputedStyle(e).filter,backdropFilter:getComputedStyle(e).backdropFilter}))}},name);
  const after=await cdp.send('Performance.getMetrics');const metric=(list,n)=>list.metrics.find(m=>m.name===n)?.value||0;
  const sorted=[...sample.raf].sort((a,b)=>a-b);results.push({width,repetition,interaction:name,rafSamples:sorted.length,rafP95Ms:sorted[Math.floor((sorted.length-1)*.95)]??null,rafGapsOver25ms:sample.raf.filter(t=>t>25).length,longTasks:sample.tasks.length,longTaskTotalMs:sample.tasks.reduce((a,t)=>a+t.duration,0),layoutShiftValueIncludingRecentInput:sample.shifts.reduce((a,s)=>a+s.value,0),layoutShifts:sample.shifts,scrollCalls:sample.scrollCalls,eventTimings:sample.events,scriptMs:(metric(after,'ScriptDuration')-metric(before,'ScriptDuration'))*1000,layoutMs:(metric(after,'LayoutDuration')-metric(before,'LayoutDuration'))*1000,styleMs:(metric(after,'RecalcStyleDuration')-metric(before,'RecalcStyleDuration'))*1000});
 }
 const complete=new Promise(resolve=>cdp.once('Tracing.tracingComplete',resolve));await cdp.send('Tracing.end');const {stream}=await complete;let trace='';for(;;){const r=await cdp.send('IO.read',{handle:stream});trace+=r.data;if(r.eof)break}await cdp.send('IO.close',{handle:stream});await fs.writeFile(`${out}/chromium-${width}.trace.json.gz`,gzipSync(trace));await context.close();
}
if(!recordOnly)await fs.writeFile(`${out}/measurements.json`,JSON.stringify({label,browser:browser.version(),cpuThrottle:label==='followup'?1:4,viewportHeight:1000,repetitions:3,measurementWindowMs:600,method:'CDP trace/Performance metrics + rAF intervals + Long Tasks/Layout Instability/Event Timing. rAF gaps are not measured GPU dropped frames; recent-input shifts are not CLS.',results},null,2));
console.log(label,results.length,'measured interactions');await browser.close();
