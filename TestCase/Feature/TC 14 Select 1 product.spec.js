import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshot';

test('TC 14 Select 1 product', async ({ page },testInfo) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');

  await page.locator('[data-test="item-4-title-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$29.99');
  await expect(page.locator('[data-test="back-to-products"]')).toContainText('Back to products');
  
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');
});