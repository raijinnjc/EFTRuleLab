import {chromium} from 'playwright-core';
import fs from 'node:fs/promises';
const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});const observations=[];
for(const width of [1440,390]){const p=await b.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
for(const name of ['overview','puzzle','rule-shift','evidence-gap','protocol','protocol-replay','sources','source-inspector','policy','funds','awards','extraction','exports']){
 const route=name==='protocol-replay'?'protocol':name==='source-inspector'?'puzzle':name;
 await p.goto(`http://127.0.0.1:4173/#${route}`);await p.reload();await p.locator('#puzzle').waitFor({state:'attached'});await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(150);
 if(name==='protocol-replay')await p.getByRole('combobox',{name:'Inspect protocol step',exact:true}).selectOption('5');
 if(name==='source-inspector')await p.getByRole('button',{name:'Inspect puzzle source S1',exact:true}).click();
 await p.screenshot({path:`docs/qa/checkpoint-b/current/${name}-${width}.png`,fullPage:true});
 if(['overview','puzzle','evidence-gap','protocol','protocol-replay','source-inspector'].includes(name))await p.screenshot({path:`docs/qa/checkpoint-b/current/${name}-viewport-${width}.png`});
 observations.push({name,width,...await p.evaluate(()=>({scrollY,documentHeight:document.documentElement.scrollHeight,documentWidth:document.documentElement.scrollWidth,headings:[...document.querySelectorAll('h1,h2,h3')].filter(e=>e.getClientRects().length>0&&!e.closest('details:not([open])')).map(e=>({text:e.textContent,top:e.getBoundingClientRect().top,bottom:e.getBoundingClientRect().bottom})),statusElements:[...document.querySelectorAll('.mini-results>div,.precision-reconciliation,.precision-boundary-title,.mode-note')].filter(e=>e.getClientRects().length>0).map(e=>({text:e.textContent,top:e.getBoundingClientRect().top,bottom:e.getBoundingClientRect().bottom}))}))});
}await p.close();}await fs.writeFile('docs/qa/checkpoint-b/current/RENDER_OBSERVATIONS.json',JSON.stringify(observations,null,2));console.log('26 full-page and12 viewport captures saved; reduced motion used for stable stills.');

if(process.argv.includes('--video'))for(const width of [1440,390]){
 const context=await b.newContext({viewport:{width,height:1000},recordVideo:{dir:'docs/qa/checkpoint-b/video-tmp',size:{width,height:1000}}});const p=await context.newPage();await p.goto('http://127.0.0.1:4173/#overview');await p.locator('#overview').waitFor({state:'visible'});await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(800);
 await p.getByRole('button',{name:'Inspect introduction sources and study limits'}).click();await p.waitForTimeout(900);await p.keyboard.press('Escape');await p.getByRole('tab',{name:'01 What we can prove'}).click();await p.waitForTimeout(800);
 await p.getByRole('button',{name:/five deductions:/i}).first().click();await p.getByRole('button',{name:/Inspect deduction: BPD/}).click();await p.waitForTimeout(600);await p.getByRole('button',{name:/Inspect award: Arang Limbung/}).click();await p.locator('#puzzle-context').scrollIntoViewIfNeeded();await p.waitForTimeout(900);
 await p.getByRole('tab',{name:"02 What's missing"}).click();await p.getByRole('button',{name:'Actual assessed universe',exact:true}).click();await p.waitForTimeout(900);
 await p.getByRole('tab',{name:'03 Proposed verification'}).click();await p.waitForTimeout(900);await p.getByRole('combobox',{name:'Inspect protocol step',exact:true}).selectOption('7');await p.waitForTimeout(700);await p.getByRole('combobox',{name:'Inspect protocol step',exact:true}).selectOption('5');await p.waitForTimeout(900);
 const video=p.video();await context.close();await video.saveAs(`docs/qa/checkpoint-b/story-${width}.webm`);await video.delete();await fs.rmdir('docs/qa/checkpoint-b/video-tmp').catch(()=>{});
}
await b.close();
