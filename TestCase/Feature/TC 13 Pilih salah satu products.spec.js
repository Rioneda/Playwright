import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshot';

test('TC 13 Pilih salah satu products', async ({ page },testInfo) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  
  // Isi username (kosong)
  await page.locator('[data-test="username"]').fill('standard_user');

  // Isi password
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Klik login
  await page.locator('[data-test="login-button"]').click();
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');
  
  // memastikan text ada
  await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$29.99');
  await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$9.99');
  await expect(page.locator('[data-test="item-1-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$15.99');
  await expect(page.locator('[data-test="item-5-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Fleece Jacket');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$49.99');
  await expect(page.locator('[data-test="item-2-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Onesie');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$7.99');
  await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$15.99');
  
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');
});