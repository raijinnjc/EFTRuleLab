import {openWorkspace} from './navigation';
import {test,expect} from '@playwright/test';
for(const width of [320,390,768,1024,1440]){
 test(`evidence foundation renders without overflow at ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:1000});
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading',{name:'The numbers reconcile. Can the decision be reproduced?'})).toBeVisible();
  await openWorkspace(page,'verification');await expect(page.getByRole('heading',{name:'Test 1: Fiscal reconciliation'})).toBeVisible();
  await expect(page.getByRole('heading',{name:'Test 2: Recipient decision replay'})).toBeVisible();
  await expect(page.locator('#test-1')).toContainText('PASS');await expect(page.locator('#test-1')).toContainText('Rp0');
  await expect(page.locator('#test-2')).toContainText('INCOMPLETE');await expect(page.locator('#test-2')).toContainText('Not obtained for this study');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
  expect(errors).toEqual([]);
  await page.screenshot({path:`docs/qa/screenshots/phase2b-regression-overview-${width}.png`,fullPage:true});
 });
}
test('native evidence disclosure works with keyboard and source links preserve provenance',async({page})=>{
 await page.goto('/');
 await openWorkspace(page,'verification');const summary=page.getByText('Inspect fiscal inputs',{exact:true});await summary.focus();await page.keyboard.press('Enter');
 await expect(page.getByRole('table',{name:'Published fiscal inputs'})).toBeVisible();
 await expect(page.getByRole('table',{name:'Published fiscal inputs'})).toContainText('Rp5,833,200,000');
 const missing=page.getByText('Inspect missing decision records',{exact:true});await missing.focus();await page.keyboard.press('Enter');
 await expect(page.locator('#test-2')).toContainText('Actual assessed universe');
 await expect(page.locator('#test-2')).toContainText('Approved historical assessment values');
 await expect(page.getByRole('link',{name:'S1 · PDF p.17',exact:true}).first()).toHaveAttribute('href',/2251\/unduh#page=17$/);
 await expect(page.locator('#test-2')).not.toContainText('FAIL');
 await page.keyboard.press('Tab');expect(await page.evaluate(()=>document.activeElement?.tagName)).not.toBe('BODY');
});
test('navigation, refresh, history and reduced motion keep evidence accessible',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 await page.getByRole('button',{name:'Navigation',exact:true}).click();await page.getByRole('link',{name:'Verification',exact:true}).click();await expect(page).toHaveURL(/#verification$/);
 await page.getByRole('button',{name:'Navigation',exact:true}).click();await page.getByRole('link',{name:'Sources',exact:true}).click();await expect(page).toHaveURL(/#sources$/);
 await page.reload();await expect(page.getByRole('heading',{name:'Sources and evidence boundaries'})).toBeVisible();
 await page.goBack();await expect(page).toHaveURL(/#verification$/);
 await expect(page.locator('#test-2')).toContainText('INCOMPLETE');
});
test('mobile menu is keyboard operable and 200% text remains readable',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 const menu=page.getByRole('button',{name:'Navigation'});await menu.focus();await page.keyboard.press('Enter');await expect(menu).toHaveAttribute('aria-expanded','true');
 await page.getByRole('link',{name:'Sources',exact:true}).click();await expect(menu).toHaveAttribute('aria-expanded','false');
 await page.evaluate(()=>document.documentElement.style.fontSize='200%');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
test('current section is announced and expanded evidence stays inside a narrow viewport',async({page})=>{
 await page.setViewportSize({width:320,height:900});await page.goto('/#verification');
 await page.getByRole('button',{name:'Navigation'}).click();
 await expect(page.getByRole('link',{name:'Verification',exact:true})).toHaveAttribute('aria-current','location');
 await page.getByRole('link',{name:'Sources',exact:true}).click();
 await page.getByText('Inspect S1 provenance',{exact:true}).click();
 await openWorkspace(page,'verification');await page.getByText('Inspect fiscal inputs',{exact:true}).click();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await openWorkspace(page,'sources');await page.getByRole('button',{name:'Navigation'}).click();
 await expect(page.getByRole('link',{name:'Sources',exact:true})).toHaveAttribute('aria-current','location');
});
test('invalid bundled evidence produces an explicit unavailable state instead of a blank page',async({page})=>{
 let corrupted=false;
 await page.route('**/assets/*.js',async route=>{
  const response=await route.fetch();let body=await response.text();
  if(body.includes('75897616000')){body=body.replace('75897616000','invalid');corrupted=true;}
  await route.fulfill({response,body});
 });
 await page.goto('/');await expect.poll(()=>corrupted).toBe(true);
 await expect(page.getByRole('heading',{name:'Evidence package unavailable'})).toBeVisible();
 await expect(page.getByRole('alert')).toContainText('Test 1: INCOMPLETE');
 await expect(page.getByRole('alert')).toContainText('Test 2: INCOMPLETE');
 await expect(page.locator('body')).not.toContainText('Test 1: PASS');
});
