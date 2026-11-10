import {chromium} from 'playwright-core';
import fs from 'node:fs/promises';
const phase=process.argv[2];if(!['before','after'].includes(phase))throw new Error('Use before or after');await fs.mkdir(`docs/qa/checkpoint-c/${phase}`,{recursive:true});
const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});const observations=[];
for(const width of [1440,390]){const p=await b.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
for(const name of ['overview','puzzle','rule-shift','evidence-gap','protocol','protocol-replay','sources','source-inspector','policy','funds','awards','verification','extraction','exports']){
 const route=name==='protocol-replay'?'protocol':name==='source-inspector'?'puzzle':name;
 await p.goto(`http://127.0.0.1:4173/#${route}`);await p.reload();await p.locator('#puzzle').waitFor({state:'attached'});await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(150);
 if(name==='protocol-replay')await p.getByRole('combobox',{name:'Inspect protocol step',exact:true}).selectOption('5');
 if(name==='source-inspector')await p.getByRole('button',{name:'Inspect puzzle source S1',exact:true}).click();
 await p.screenshot({path:`docs/qa/checkpoint-c/${phase}/${name}-${width}.png`,fullPage:true});
 if(['overview','puzzle','evidence-gap','protocol','protocol-replay','source-inspector'].includes(name))await p.screenshot({path:`docs/qa/checkpoint-c/${phase}/${name}-viewport-${width}.png`});
 observations.push({name,width,...await p.evaluate(()=>({scrollY,documentHeight:document.documentElement.scrollHeight,documentWidth:document.documentElement.scrollWidth,headings:[...document.querySelectorAll('h1,h2,h3')].filter(e=>e.getClientRects().length>0&&!e.closest('details:not([open])')).map(e=>({text:e.textContent,top:e.getBoundingClientRect().top,bottom:e.getBoundingClientRect().bottom})),statusElements:[...document.querySelectorAll('.mini-results>div,.precision-reconciliation,.precision-boundary-title,.mode-note')].filter(e=>e.getClientRects().length>0).map(e=>({text:e.textContent,top:e.getBoundingClientRect().top,bottom:e.getBoundingClientRect().bottom}))}))});
}await p.close();}await fs.writeFile(`docs/qa/checkpoint-c/${phase}/RENDER_OBSERVATIONS.json`,JSON.stringify(observations,null,2));console.log('Release candidate screenshots saved:',phase);

await b.close();
