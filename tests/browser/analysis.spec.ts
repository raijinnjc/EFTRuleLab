import {openWorkspace} from './navigation';
import {test,expect} from '@playwright/test';
test('policy rules preserve fixed envelope, exact deltas and provenance',async({page})=>{
 await page.goto('/#policy');const policy=page.locator('#policy');
 await expect(policy.getByRole('heading',{name:'Policy Studio'})).toBeVisible();
 await policy.getByLabel('Inspect rule').selectOption('2021');
 await expect(policy).toContainText('FY2021 rule applied counterfactually to FY2022 residual');
 await expect(policy).toContainText('Rp5,930,803,600');await expect(policy).toContainText('Rp837,289,920');await expect(policy).toContainText('Rp209,322,480');
 await expect(policy).toContainText('−Rp697,741,600');await expect(policy).toContainText('+Rp418,644,960');await expect(policy).toContainText('+Rp279,096,640');
 await expect(policy).toContainText('60%');await expect(policy).toContainText('40%');
 await policy.getByLabel('Chart labels').selectOption('percent');await expect(policy.getByRole('group',{name:'Allocation structure comparison'})).toContainText('85%');
 await policy.getByText('View derivation',{exact:true}).click();await expect(policy).toContainText('6,977,416,000');
 await policy.getByRole('button',{name:'Reset to documented comparison'}).click();await expect(policy.getByLabel('Inspect rule')).toHaveValue('2022');
 await policy.getByText('Inspect selected rule source',{exact:true}).click();await expect(policy).toContainText('Exact PDF page not recorded');
 await expect(policy).not.toContainText('Arang Limbung');
});
test('fiscal waterfall preserves gross scale and exposes exact sources',async({page})=>{
 await page.goto('/#funds');const funds=page.locator('#funds');
 await expect(funds.getByRole('img',{name:'Gross ADD to residual waterfall'})).toBeVisible();
 await expect(funds).toContainText('Rp75,897,616,000');await expect(funds).toContainText('Rp68,920,200,000');await expect(funds).toContainText('Rp6,977,416,000');
 await funds.getByText('Inspect five deductions',{exact:true}).click();
 await funds.getByText('Inspect BPD allowances source',{exact:true}).click();await expect(funds.getByRole('link',{name:'S1 · PDF p.17',exact:true}).first()).toHaveAttribute('href',/2251\/unduh#page=17$/);
 await funds.getByLabel('Envelope display').selectOption('billions');await expect(funds).toContainText('Rp75.898 billion');
 await expect(funds.getByRole('table',{name:'Exact fiscal envelope'})).toContainText('Rp75,897,616,000');
});
test('historical ledger filters, sorts and separates subtotal from full published total',async({page})=>{
 await page.goto('/#awards');const ledger=page.locator('#awards');
 await ledger.getByLabel('Search village or kecamatan').fill('SÚNGAI KUPAH');
 await expect(ledger.locator('tbody tr')).toHaveCount(1);await expect(ledger.locator('tbody')).toContainText('Sungai Kupah');await expect(ledger.locator('tbody')).toContainText('row 4');
 await expect(ledger.getByRole('link',{name:'S1 · PDF p.20',exact:true})).toHaveAttribute('href',/unduh#page=20$/);
 await expect(ledger.getByTestId('filtered-subtotal')).toHaveText('Rp24,420,956');await expect(ledger.getByTestId('full-ledger-total')).toHaveText('Rp488,419,120');
 await ledger.getByRole('button',{name:'Clear filters'}).click();await ledger.getByRole('combobox',{name:'Kecamatan',exact:true}).selectOption('Kubu');await expect(ledger.locator('tbody tr')).toHaveCount(3);await expect(ledger.getByTestId('filtered-subtotal')).toHaveText('Rp73,262,868');
 const sort=ledger.getByRole('button',{name:'Sort by Village'});await sort.focus();await page.keyboard.press('Enter');await expect(ledger.getByRole('columnheader',{name:/Sort by Village/})).toHaveAttribute('aria-sort','descending');
 await ledger.getByLabel('Search village or kecamatan').fill('not-a-village');await expect(ledger).toContainText('No matching village');await expect(ledger.getByTestId('full-ledger-total')).toHaveText('Rp488,419,120');
 await ledger.getByRole('button',{name:'Clear filters'}).click();await expect(ledger.locator('tbody tr')).toHaveCount(20);
});
test('verification nodes disclose interpretation without inventing decisions',async({page})=>{
 await page.goto('/#verification');const node=page.getByText('Inspect pool calculation',{exact:true});await node.focus();await page.keyboard.press('Enter');
 await expect(page.locator('#test-1')).toContainText('What we have');await expect(page.locator('#test-1')).toContainText('What follows');
 await page.getByText('Inspect unavailable replay',{exact:true}).click();await expect(page.locator('#test-2')).toContainText('What we need');await expect(page.locator('#test-2')).toContainText('What does not follow');await expect(page.locator('#test-2')).toContainText('INCOMPLETE');
});
test('extraction experiment is opt-in, isolated, and fully reversible',async({page})=>{
 await page.goto('/#extraction');const panel=page.locator('#extraction');
 await expect(panel.getByTestId('experiment-gap')).toHaveText('Rp0');
 await panel.getByRole('button',{name:'Replay observed research-side extraction'}).click();
 await expect(panel).toContainText('Research-side extraction test');await expect(panel).toContainText('Rp5,532,000,000');await expect(panel).toContainText('Rp509,503,120');await expect(panel.getByTestId('experiment-gap')).toHaveText('+Rp21,084,000');
 await expect(panel).toContainText('Apparent mismatch in extracted input');await expect(panel).toContainText('This scenario corrects a researcher-side document extraction discrepancy; it does not indicate an error or overpayment by the government.');
 await expect(page.locator('#test-1 .result-status')).toHaveText('PASS');await expect(page.locator('#test-2 .result-status')).toHaveText('INCOMPLETE');await expect(page.locator('#awards').getByTestId('full-ledger-total')).toHaveText('Rp488,419,120');
 await panel.getByRole('button',{name:'Restore verified source value'}).click();await expect(panel.getByTestId('experiment-gap')).toHaveText('Rp0');await expect(panel).toContainText('Rp5,833,200,000');
});
for(const width of [320,390,768,1024,1440])test(`analytical charts and expanded records at ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:1000});await page.emulateMedia({reducedMotion:'reduce'});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');
 await openWorkspace(page,'policy');await expect(page.locator('#policy svg')).toBeVisible();await openWorkspace(page,'funds');await expect(page.locator('#funds svg').first()).toBeVisible();
 await page.getByText('Inspect five deductions',{exact:true}).click();await page.getByText('Inspect BPD allowances source',{exact:true}).click();await openWorkspace(page,'awards');await page.locator('#awards').getByLabel('Search village or kecamatan').fill('Sungai Kupah');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);expect(errors).toEqual([]);
 await page.screenshot({path:`docs/qa/screenshots/phase2b-regression-${width}.png`,fullPage:true});
});
test('chart controls and both input nodes expose complete accessible inspection structure',async({page})=>{
 await page.goto('/');await openWorkspace(page,'policy');const chart=page.getByRole('group',{name:'Allocation structure comparison',exact:true});
 await expect(chart.getByRole('button')).toHaveCount(6);
 await openWorkspace(page,'verification');
 for(const label of ['Inspect fiscal inputs','Inspect missing decision records']){
  const summary=page.getByText(label,{exact:true});await summary.focus();await page.keyboard.press('Enter');
  const node=summary.locator('..');await expect(node.getByText('What we have',{exact:true})).toBeVisible();await expect(node.getByText('What we need',{exact:true})).toBeVisible();await expect(node.getByText('What follows',{exact:true})).toBeVisible();await expect(node.getByText('What does not follow',{exact:true})).toBeVisible();
 }
});
