import {test,expect} from '@playwright/test';
import {readFile,mkdir} from 'node:fs/promises';
test('protocol steps expose required records and general outcomes without inferring a replay',async({page})=>{
 await page.goto('/#protocol');const protocol=page.locator('#protocol');await expect(protocol.getByRole('heading',{name:'Allocation Reproducibility Protocol',exact:true})).toBeVisible();
 const marks=protocol.getByRole('group',{name:'Protocol progression'}).getByRole('button');await expect(marks).toHaveCount(8);
 await marks.nth(5).focus();await page.keyboard.press('Enter');await expect(protocol.getByRole('heading',{name:'6. Independently reconstruct recipients'})).toBeVisible();await expect(protocol.locator('#protocol-detail').getByText(/Withhold the target roster/)).toBeVisible();
 await expect(protocol.getByText('Historical recipient replay: INCOMPLETE',{exact:true})).toBeVisible();
 await protocol.getByText('Read the complete protocol transcript',{exact:true}).click();await expect(protocol.locator('details[open]')).toContainText('Actual assessed universe');
 await expect(protocol).toContainText('pending institutional confirmation');await expect(protocol).toContainText('General protocol outcomes');
});
test('source library searches categories, records, absent titles and restores drawer focus',async({page})=>{
 await page.goto('/#sources');const source=page.locator('#sources');await source.getByLabel('Search research sources').fill('S1');await source.getByLabel('Source category').selectOption('Official regulations');await expect(source.locator('article')).toHaveCount(1);
 const open=source.getByRole('button',{name:'Inspect S1 source'});await open.click();const dialog=page.getByRole('dialog');await expect(dialog).toContainText('INHERITED_PRD_TRANSCRIPTION');await expect(dialog).toContainText('BPD');await expect(dialog).toContainText('Page unavailable');await page.keyboard.press('Escape');await expect(open).toBeFocused();
 await source.getByLabel('Source category').selectOption('Academic research');await source.getByLabel('Search research sources').fill('Fox');await expect(source.locator('article')).toHaveCount(1);await expect(source).toContainText('Official title: unavailable');
 await source.getByLabel('Search research sources').fill('no-matching-source');await expect(source.getByRole('status')).toContainText('0 sources');
});
test('guided demonstration preserves analytical state, navigates with arrows and exits',async({page})=>{
 await page.goto('/');await page.getByRole('combobox',{name:'Inspect rule',exact:true}).selectOption('2021');await page.getByRole('button',{name:'Replay observed research-side extraction',exact:true}).click();await page.getByRole('button',{name:'Start guided demonstration'}).click();
 const tour=page.getByRole('region',{name:'Guided research demonstration'});await expect(tour).toContainText('Step 1 of 5');await tour.getByRole('button',{name:'Next'}).focus();await page.keyboard.press('ArrowRight');await expect(tour).toContainText('Step 2 of 5');await page.keyboard.press('ArrowLeft');await expect(tour).toContainText('Step 1 of 5');
 for(let i=0;i<4;i++)await tour.getByRole('button',{name:'Next'}).click();await expect(tour).toContainText('Step 5 of 5');await expect(tour.getByRole('button',{name:'Next'})).toBeDisabled();await tour.getByRole('button',{name:'Exit tour'}).click();
 await expect(page.getByRole('combobox',{name:'Inspect rule',exact:true})).toHaveValue('2021');await expect(page.getByRole('button',{name:'Replay observed research-side extraction',exact:true})).toHaveAttribute('aria-pressed','true');await expect(page.getByRole('button',{name:'Start guided demonstration'})).toBeFocused();
});
for(const format of ['JSON','CSV','Markdown'])test(`downloads real ${format} with exact state and on-screen fallback`,async({page})=>{
 await page.goto('/#exports');await page.getByRole('combobox',{name:'Inspect rule',exact:true}).selectOption('2021');await page.getByRole('button',{name:'Replay observed research-side extraction',exact:true}).click();
 const pending=page.waitForEvent('download');await page.getByRole('button',{name:`Download ${format}`,exact:true}).click();const file=await pending;expect(file.suggestedFilename()).toContain('fy2022-rule2021-counterfactual-extraction-active');const content=await readFile((await file.path())!,'utf8');expect(content).toContain('24420956');expect(content).toContain('INCOMPLETE');expect(content).toContain('5532000000');expect(content).toContain('5833200000');
 if(format==='JSON'){const a=JSON.parse(content);expect(a.publishedAwards).toHaveLength(20);expect(a.selected.components.performance).toBe('209322480');expect(a.historical.gap).toBe('0');}
 if(format==='CSV'){expect(content.split('\r\n')).toHaveLength(21);expect(content).toContain('source_id');}
 if(format==='Markdown')expect(content).toContain('## Missing evidence');
 await expect(page.getByLabel('Export text fallback')).toHaveValue(content.replaceAll('\r\n','\n'));await mkdir('docs/qa/export-samples',{recursive:true});await file.saveAs(`docs/qa/export-samples/phase2b-sample.${format==='Markdown'?'md':format.toLowerCase()}`);
});
test('download failure retains readable fallback and explicit status',async({page})=>{await page.goto('/#exports');await page.evaluate(()=>{URL.createObjectURL=()=>{throw new Error('unavailable');};});await page.getByRole('button',{name:'Download Markdown',exact:true}).click();await expect(page.locator('#exports').getByRole('status',{name:'Download status'})).toContainText('Download unavailable');await expect(page.getByLabel('Export text fallback')).toContainText('## Missing evidence');});
for(const width of [320,390,768,1024,1440])test(`research workflow and source library responsive at ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.goto('/#protocol');await page.locator('#protocol').getByRole('button',{name:'3. Obtain approved assessments',exact:true}).click();await page.getByLabel('Search research sources').fill('S1');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.screenshot({path:`docs/qa/screenshots/phase2b-${width}.png`,fullPage:true});
});
test('research features support text scaling and reduced motion',async({page})=>{await page.emulateMedia({reducedMotion:'reduce'});await page.setViewportSize({width:390,height:844});await page.goto('/#protocol');await page.evaluate(()=>document.documentElement.style.fontSize='200%');await page.locator('#protocol').getByRole('button',{name:'3. Obtain approved assessments',exact:true}).click();await expect(page.locator('#protocol').getByRole('heading',{name:'3. Obtain approved assessments'})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);});
