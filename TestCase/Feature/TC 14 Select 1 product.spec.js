import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage.js';
import { takeScreenshot } from '../utils/screenshot.js';

test('TC 14 Select 1 product', async ({ page },testInfo) => {
  const inventoryPage = new InventoryPage(page)
  
  await inventoryPage.goto()
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before')
  
  await inventoryPage.firstitem.click()

  await expect(inventoryPage.itemname).toContainText('Sauce Labs Bike Light')
  await expect(inventoryPage.itemdesc).toContainText('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.')
  await expect(inventoryPage.itemprice).toContainText('$9.99')
  await expect(inventoryPage.backtoProducts).toContainText('Back to products')

	/*
  await page.locator('[data-test="item-4-title-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('');
  await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('');
  await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('');
  await expect(page.locator('[data-test="back-to-products"]')).toContainText('');
  */
  
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');
});