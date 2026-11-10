import {test,expect} from '@playwright/test';
const tools=['policy','funds','awards','verification','extraction','protocol','sources','exports'];
test('research tools and source dialog share the approved analytical surface and immediate focus',async({page})=>{
 await page.goto('/#puzzle');const reference=await page.locator('#puzzle').evaluate(el=>getComputedStyle(el).backgroundColor);
 for(const id of tools){await page.goto('/#'+id);const active=page.locator(`[data-workspace="${id}"]`);await expect(active).toBeVisible();expect(await active.evaluate(el=>getComputedStyle(el).backgroundColor)).toBe(reference);}
 await page.goto('/#sources');const trigger=page.getByRole('button',{name:'Inspect S1 source',exact:true});await trigger.click();const dialog=page.getByRole('dialog');expect(await dialog.evaluate(el=>getComputedStyle(el).backgroundColor)).toBe(reference);await page.keyboard.press('Escape');await expect(trigger).toBeFocused();
});
test('Policy selected context follows focused comparison source without changing the selected rule',async({page})=>{
 await page.goto('/#policy');const year=page.getByRole('combobox',{name:'Inspect rule',exact:true});await expect(year).toHaveValue('2022');
 await page.getByRole('button',{name:/Inspect FY2021 Formula/}).focus();const inspector=page.getByRole('complementary',{name:'Selected policy component',exact:true});await expect(inspector).toContainText('Rp837,289,920');await expect(year).toHaveValue('2022');await inspector.getByText('Inspect selected rule source',{exact:true}).click();await expect(inspector).toContainText('Nomor 101 Tahun 2020');await expect(inspector).toContainText('11, 12');
});
test('the complete source register remains keyboard-scrollable with explicit inspection limits',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/#sources');const register=page.getByRole('region',{name:'Research source records',exact:true});await expect(register.locator('article')).toHaveCount(20);expect(await register.evaluate(el=>el.scrollHeight>el.clientHeight)).toBe(true);await register.focus();await page.keyboard.press('End');await expect.poll(()=>register.evaluate(el=>el.scrollTop)).toBeGreaterThan(0);await expect(register).toContainText('NOT_OBTAINED');await expect(register).toContainText('not repeated in this task');
});
test('every supporting workspace reflows at five widths with 200 percent text',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const width of [320,390,768,1024,1440]){await page.setViewportSize({width,height:1000});for(const id of tools){await page.goto('/#'+id);await expect(page.locator('#'+id)).toBeVisible();await page.evaluate(()=>document.documentElement.style.fontSize='200%');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${id} at ${width}`).toBe(true);await page.screenshot({path:`docs/qa/checkpoint-c/after/${id}-enlarged-${width}.png`,fullPage:true});await page.evaluate(()=>document.documentElement.style.fontSize='');}}
});
test('small truthful chart segments have equivalent full-size inspection controls',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/#puzzle');const stage=page.getByRole('combobox',{name:'Inspect fiscal stage',exact:true});expect(await stage.evaluate(el=>el.getBoundingClientRect().width)).toBeGreaterThanOrEqual(44);await stage.selectOption('gross');await stage.selectOption('pool');await expect(page.locator('#puzzle-context')).toContainText('Rp488,419,120');
 await page.goto('/#rule-shift');const select=page.getByRole('combobox',{name:'Select rule and component',exact:true});expect(await select.evaluate(el=>el.getBoundingClientRect().height)).toBeGreaterThanOrEqual(44);await select.selectOption('2021:performance');await expect(page.locator('.rule-inspection')).toContainText('Rp209,322,480');await select.selectOption('2022:performance');await expect(page.locator('.rule-inspection')).toContainText('Rp488,419,120');
});
test('loaded research routes, source inspection and exact export remain usable offline',async({page,context})=>{
 await page.goto('/#puzzle');await page.evaluate(()=>document.fonts.ready);await context.setOffline(true);
 for(const id of ['awards','sources','exports']){await page.getByRole('button',{name:'Research tools',exact:true}).click();await page.locator(`#primary-nav a[href="#${id}"]`).click();await expect(page.locator('#'+id)).toBeVisible();}
 const pending=page.waitForEvent('download');await page.getByRole('button',{name:'Download JSON',exact:true}).click();const download=await pending;expect(await download.failure()).toBeNull();const audit=JSON.parse(await page.getByLabel('Export text fallback').inputValue());expect(audit.publishedAwards).toHaveLength(20);expect(audit.historical.gap).toBe('0');
 await page.getByRole('button',{name:'Research tools',exact:true}).click();await page.locator('#primary-nav a[href="#sources"]').click();await page.getByRole('button',{name:'Inspect S1 source',exact:true}).click();await expect(page.getByRole('dialog')).toContainText('INHERITED_PRD_TRANSCRIPTION');await page.keyboard.press('Escape');await context.setOffline(false);
});
test('enlarged exact fiscal caption stays inside the analytical figure',async({page})=>{
 await page.setViewportSize({width:320,height:1000});await page.goto('/#funds');await page.evaluate(()=>document.documentElement.style.fontSize='200%');const caption=page.locator('#funds .waterfall figcaption');await expect(caption).toBeVisible();const bounds=await caption.evaluate(el=>{const range=document.createRange();range.selectNodeContents(el);const box=el.getBoundingClientRect();return{left:box.left,right:box.right,textRects:[...range.getClientRects()].map(r=>({left:r.left,right:r.right}))}});expect(bounds.textRects.every(r=>r.left>=bounds.left-1&&r.right<=bounds.right+1)).toBe(true);
});
test('source inspection and external record actions remain visually separated',async({page})=>{
 await page.setViewportSize({width:1440,height:1000});await page.goto('/#sources');const record=page.locator('#sources article').first();await expect(record.getByRole('button',{name:'Inspect S1 source',exact:true})).toBeVisible();const spacing=await record.evaluate(el=>{const inspect=el.querySelector('.source-inspect')!.getBoundingClientRect();const external=el.querySelector('a[target="_blank"]')!.getBoundingClientRect();return Math.max(external.left-inspect.right,external.top-inspect.bottom)});expect(spacing).toBeGreaterThanOrEqual(8);
});
test('named analytical figures expose semantic groups to assistive technology',async({page})=>{
 await page.goto('/#rule-shift');await expect(page.getByRole('group',{name:'Equal-length fixed-base rule comparison',exact:true})).toBeVisible();await expect(page.getByRole('group',{name:'Fixed-base redistribution',exact:true})).toBeVisible();await page.goto('/#verification');await expect(page.getByRole('group',{name:'Two independent verification questions',exact:true})).toBeVisible();
});
