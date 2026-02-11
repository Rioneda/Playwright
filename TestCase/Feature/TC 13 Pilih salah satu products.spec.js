import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage.js';
import { takeScreenshot } from '../utils/screenshot.js';

test('TC 13 Pilih salah satu products', async ({ page },testInfo) => {
  const inventoryPage = new InventoryPage(page)
  
  await inventoryPage.goto()
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');
  
  await expect(inventoryPage.firstitem).toContainText('Sauce Labs Bike Light')
  await expect(inventoryPage.Descriptionitem).toContainText('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.')
  await expect(inventoryPage.priceitem).toContainText('$9.99')
  
  await expect(inventoryPage.seconditem).toContainText('Sauce Labs Bolt T-Shirt')
  await expect(inventoryPage.Descriptionitem).toContainText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
  await expect(inventoryPage.priceitem).toContainText('$15.99')
  
  await expect(inventoryPage.thriditem).toContainText('Sauce Labs Onesie')
  await expect(inventoryPage.Descriptionitem).toContainText('Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.')
  await expect(inventoryPage.priceitem).toContainText('$7.99')
  
  await expect(inventoryPage.fourthitem).toContainText('Test.allTheThings() T-Shirt (Red)')
  await expect(inventoryPage.Descriptionitem).toContainText('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.')
  await expect(inventoryPage.priceitem).toContainText('$15.99')
  
  await expect(inventoryPage.fifthitem).toContainText('Sauce Labs Backpack')
  await expect(inventoryPage.Descriptionitem).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
  await expect(inventoryPage.priceitem).toContainText('$29.99')
  
  await expect(inventoryPage.sixthitem).toContainText('Sauce Labs Fleece Jacket')
  await expect(inventoryPage.Descriptionitem).toContainText('It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.')
  await expect(inventoryPage.priceitem).toContainText('$49.99')
  
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');
});