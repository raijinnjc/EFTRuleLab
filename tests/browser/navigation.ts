import {expect,type Page} from '@playwright/test';
// Navigate through the public deep-link contract; never force hidden content visible.
export async function openWorkspace(page:Page,id:string){await page.evaluate(id=>{location.hash=id},id);await expect(page.locator(`[data-workspace="${id}"]`)).toBeVisible();}
export async function openScene(page:Page,id:string){await page.evaluate(id=>{location.hash=id},id);await expect(page.locator('#research-experience')).toBeVisible();await expect(page.locator('[data-workspace]:visible')).toHaveCount(0);}
