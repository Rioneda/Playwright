import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshot';

test('TC 15 Sort Z to A', async ({ page, },testInfo) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before-sorting');
  
   // Pilih sorting Z → A
  await page.locator('[data-test="product-sort-container"]').selectOption('za');

  // Ambil semua nama produk setelah sorting
  const names = await page.locator('.inventory_item_name').allTextContents();
  console.log('Nama produk dari UI:', names);

  // Normalisasi (trim spasi)
  const uiNames = names.map(n => n.trim());
  console.log('Nama produk (normalized):', uiNames);

  // Buat versi sorted manual Z → A
  const sortedNames = [...uiNames].sort((a, b) => b.localeCompare(a));
  console.log('Nama produk (hasil sorting manual Z→A):', sortedNames);

  // Validasi: hasil UI sudah Z → A
  expect(uiNames).toEqual(sortedNames);

  // Validasi tambahan: pairwise (opsional tapi senior style)
  for (let i = 0; i < uiNames.length - 1; i++) {
    console.log(`Compare index ${i}: "${uiNames[i]}" >= "${uiNames[i + 1]}"`);
    expect(uiNames[i].localeCompare(uiNames[i + 1])).toBeGreaterThanOrEqual(0);
  }
  
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after-sorting');

  console.log('✅ Sorting Name Z to A sudah benar');	
});