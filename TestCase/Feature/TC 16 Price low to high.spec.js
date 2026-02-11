import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage.js';
import { takeScreenshot } from '../utils/screenshot.js';

test('TC 16 Price low to high', async ({ page }, testInfo) => {
  const inventoryPage = new InventoryPage(page)
  
  await inventoryPage.goto()
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before-sorting');
  
  // Pilih sorting Low to High
  await inventoryPage.sorting.selectOption('lohi');
//await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

// Ambil semua harga setelah sorting
const prices = await inventoryPage.alLocatorprice.allTextContents();

  //console.log('Harga (string dari UI):', prices);

// Convert dari string "$7.99" → number 7.99
const priceNumbers = prices.map(p => parseFloat(p.replace('$', '')));

//console.log('Harga (string dari UI yang sudah di parse):', priceNumbers);

// Copy dan sort manual untuk pembanding
const sortedPrices = [...priceNumbers].sort((a, b) => a - b);
//console.log('Harga (string dari UI yang sudah di sort):', sortedPrices);

// Validasi: hasil di UI sudah terurut benar
for (let i = 0; i < priceNumbers.length - 1; i++) {
	//console.log(`Compare index ${i}: ${priceNumbers[i]} <= ${priceNumbers[i + 1]}`);
  expect(priceNumbers[i]).toBeLessThanOrEqual(priceNumbers[i + 1]);
}
// Screenshot setelah sorting
  await takeScreenshot(page, testInfo, 'after-sorting');
});