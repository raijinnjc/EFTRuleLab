/** Actual rendered axe-core checks; audit dependency lives outside the product. */
import {chromium} from 'playwright-core';
import fs from 'node:fs/promises';
const axePath=process.env.AXE_PATH;if(!axePath)throw new Error('Set AXE_PATH to the installed official axe-core axe.min.js');
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});const reports=[];
for(const width of [1440,390]){const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});for(const name of ['overview','puzzle','rule-shift','evidence-gap','policy','funds','awards','verification','extraction','protocol','sources','exports','source-dialog']){
 await page.goto(`http://127.0.0.1:4173/#${name==='source-dialog'?'sources':name}`);await page.getByRole('heading',{level:1}).waitFor();await page.evaluate(()=>document.fonts.ready);if(name==='source-dialog')await page.getByRole('button',{name:'Inspect S1 source',exact:true}).click();await page.addScriptTag({path:axePath});const result=await page.evaluate(()=>window.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}}));reports.push({name,width,version:result.testEngine.version,violations:result.violations,incomplete:result.incomplete,passes:result.passes.length});
 }await page.close();}
await browser.close();await fs.writeFile('docs/qa/checkpoint-c/ACCESSIBILITY.json',JSON.stringify(reports,null,2));console.log(reports.map(r=>({name:r.name,width:r.width,violations:r.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.length})),incomplete:r.incomplete.length})));if(reports.some(r=>r.violations.length))process.exitCode=1;
