import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { SauceLabsPage } from '../pages/SauceLabsPage';
import { takeScreenshot } from '../utils/screenshot';

test('TC 19 About Saucedemo', async ({ page }, testInfo) => {
  const inventoryPage = new InventoryPage(page)
  const sauceLabsPage = new SauceLabsPage(page)
  
  await inventoryPage.goto()
  
  await inventoryPage.Openmenu.click();
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');
  await inventoryPage.Aboutmenu.click();
  await expect(sauceLabsPage.textname).toContainText('© 2026 Sauce Labs Inc., all rights reserved. SAUCE and SAUCE LABS are registered trademarks owned by Sauce Labs Inc. in the United States, EU, and may be registered in other jurisdictions.');
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');

});