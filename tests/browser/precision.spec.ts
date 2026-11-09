import {test,expect} from '@playwright/test';
import {openScene} from './navigation';
test('Puzzle exposes missing replay inputs and exact deduction provenance in its contextual inspector',async({page})=>{
 await page.goto('/#puzzle');await openScene(page,'puzzle');const puzzle=page.locator('#puzzle');
 await puzzle.getByRole('button',{name:'Inspect unavailable requirement: Approved historical assessment values'}).click();
 const inspector=puzzle.locator('.scene-inspector');await expect(inspector).toContainText('Replay not run');await expect(inspector).toContainText('Not obtained');
 await puzzle.getByRole('button',{name:/Inspect deduction: BPD/}).click();await expect(inspector).toContainText('Rp5,833,200,000');await expect(inspector).toContainText('S1');
 await puzzle.getByRole('button',{name:'Open selected puzzle provenance'}).click();await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('Escape');await expect(puzzle.getByRole('button',{name:'Open selected puzzle provenance'})).toBeFocused();
 await puzzle.getByRole('button',{name:/Inspect award: Arang Limbung/}).click();await expect(inspector).toContainText('Arang Limbung');await expect(inspector).toContainText('Rp24,420,956');await expect(inspector).toContainText('row 3');
});
test('Puzzle maintains readable canvas and inspector across five widths and enlarged text',async({page})=>{
 for(const width of [320,390,768,1024,1440]){
 await page.setViewportSize({width,height:1000});await page.goto('/#puzzle');const puzzle=page.locator('#puzzle');await expect(puzzle.getByRole('button',{name:/Inspect award:/})).toHaveCount(20);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 const sizes=await puzzle.locator('.award-mark').evaluateAll(els=>els.map(el=>({w:el.getBoundingClientRect().width,h:el.getBoundingClientRect().height})));expect(sizes.every(s=>s.w>=44&&s.h>=44)).toBe(true);
 await page.screenshot({path:`docs/qa/precision/after/responsive-${width}.png`,fullPage:true});
 await page.evaluate(()=>document.documentElement.style.fontSize='200%');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);await page.evaluate(()=>document.documentElement.style.fontSize='');
 }
 await page.setViewportSize({width:390,height:1000});await page.evaluate(()=>document.documentElement.style.fontSize='200%');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 await page.emulateMedia({reducedMotion:'reduce'});await page.locator('#puzzle').getByRole('button',{name:/Inspect award: Arang Limbung/}).focus();await page.keyboard.press('Enter');await expect(page.locator('#puzzle .scene-inspector')).toContainText('Arang Limbung');
 await page.screenshot({path:'docs/qa/precision/after/enlarged-mobile.png',fullPage:true});
});
test('mobile keyboard order follows canvas before tool navigation',async({page})=>{await page.setViewportSize({width:390,height:1000});await page.goto('/#puzzle');await page.getByRole('button',{name:'Inspect puzzle source S1',exact:true}).focus();await page.keyboard.press('Tab');await expect(page.getByRole('button',{name:/Inspect gross ADD:/})).toBeFocused();});
