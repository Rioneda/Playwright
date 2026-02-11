import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage.js';
import { SauceLabsPage } from '../pages/SauceLabsPage.js';
import { takeScreenshot } from '../utils/screenshot.js';

test('TC 19 About Saucedemo', async ({ page }, testInfo) => {
  const inventoryPage = new InventoryPage(page)
  const sauceLabsPage = new SauceLabsPage(page)
  
  await inventoryPage.goto()
  
  await inventoryPage.Openmenu.click();
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');
  await inventoryPage.Aboutmenu.click();
  await expect(page).toHaveURL(/saucelabs\.com/);
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');

});