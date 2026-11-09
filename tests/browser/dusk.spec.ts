import {openWorkspace} from './navigation';
import {test,expect} from '@playwright/test';
for(const width of [390,1440])test(`Dusk local photography, typography and offline presentation at ${width}`,async({page,context})=>{
 await page.setViewportSize({width,height:1000});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');await page.evaluate(()=>document.fonts.ready);
 await expect(page.locator('.hero-photo img')).toBeVisible();expect(await page.locator('.hero-photo img').evaluate((e:HTMLImageElement)=>e.complete&&e.naturalWidth>0)).toBe(true);
 await expect(page.getByRole('link',{name:'CC BY 3.0',exact:true})).toHaveAttribute('href','https://creativecommons.org/licenses/by/3.0/');
 expect(await page.locator('h1').evaluate(e=>getComputedStyle(e).fontFamily)).toContain('Wix Madefor Display');
 await context.setOffline(true);await openWorkspace(page,'extraction');await page.locator('#extraction').getByRole('button',{name:'Replay observed research-side extraction'}).click();await expect(page.locator('#test-1 .result-status')).toHaveText('PASS');await expect(page.locator('#test-2 .result-status')).toHaveText('INCOMPLETE');await context.setOffline(false);
 await page.evaluate(()=>location.hash='overview');await expect(page.locator('#overview')).toBeVisible();await page.screenshot({path:`docs/qa/dusk/after-${width}.png`,fullPage:true});await page.locator('#overview').screenshot({path:`docs/qa/dusk/hero-${width}.png`});
});
