import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshot';

test('TC 17 Price high to low', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before-sorting');
  
    // Pilih sorting Low to High
await page.locator('[data-test="product-sort-container"]').selectOption('hilo');

// Ambil semua harga setelah sorting
const prices = await page.locator('.inventory_item_price').allTextContents();

  //console.log('Harga (string dari UI):', prices);

// Convert dari string "$7.99" → number 7.99
const priceNumbers = prices.map(p => parseFloat(p.replace('$', '')));

//console.log('Harga (string dari UI yang sudah di parse):', priceNumbers);

// Copy dan sort manual untuk pembanding
const sortedPrices = [...priceNumbers].sort((a, b) => b - a);
//console.log('Harga (string dari UI yang sudah di sort):', sortedPrices);

// Validasi: hasil di UI sudah terurut benar
for (let i = 0; i < priceNumbers.length - 1; i++) {
	//console.log(`Compare index ${i}: ${priceNumbers[i]} >= ${priceNumbers[i + 1]}`);
    expect(priceNumbers[i]).toBeGreaterThanOrEqual(priceNumbers[i + 1]);
}

// Screenshot setelah sorting
  await takeScreenshot(page, testInfo, 'after-sorting');
});