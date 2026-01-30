import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { takeScreenshot } from '../utils/screenshot';

/*
-Setelah berhasil login
-Pilih Price high to low
-Pilih lagi sort A to Z
-Pastikan : nama product pada product yang awal berubah
*/

test('TC 18 Sort A to Z', async ({ page }, testInfo) => {
  const inventoryPage = new InventoryPage(page)
  
  await inventoryPage.goto()
  
   // Pilih sorting A → Z
  await inventoryPage.sorting.selectOption('za');

  // Ambil semua nama produk setelah sorting
  const namesatoz = await inventoryPage.alLocatorName.allTextContents();
  //console.log('Nama produk dari UI:', namesatoz);

  // Normalisasi (trim spasi)
  const uiNamesatoz = namesatoz.map(n => n.trim());
  //console.log('Nama produk (normalized):', uiNamesatoz);

  // Buat versi sorted manual Z to A
  const sortedNamesatoz = [...uiNamesatoz].sort((a, b) => b.localeCompare(a));
  //console.log('Nama produk (hasil sorting manual Z→A):', sortedNamesatoz);

  // Validasi: hasil UI sudah Z to A
  expect(uiNamesatoz).toEqual(sortedNamesatoz);

  // Validasi tambahan: pairwise (opsional tapi senior style)
  for (let i = 0; i < uiNamesatoz.length - 1; i++) {
    //console.log(`Compare index ${i}: "${uiNamesatoz[i]}" >= "${uiNamesatoz[i + 1]}"`);
    expect(uiNamesatoz[i].localeCompare(uiNamesatoz[i + 1])).toBeGreaterThanOrEqual(0);
  }

  //console.log('✅ Sorting Name Z to A sudah benar');

// Screenshot awal
  await takeScreenshot(page, testInfo, 'before-sorting');
  
  await inventoryPage.goto()
  
   // Pilih sorting A → Z
  await inventoryPage.sorting.selectOption('az');

  // Ambil semua nama produk setelah sorting
  const namesztoa = await inventoryPage.alLocatorName.allTextContents();
  //console.log('Nama produk dari UI:', namesztoa);

  // Normalisasi (trim spasi)
  const uiNamesztoa = namesztoa.map(n => n.trim());
  //console.log('Nama produk (normalized):', uiNamesztoa);

  // Buat versi sorted manual AtoZ
  const sortedNamesztoa = [...uiNamesztoa].sort((a, b) => a.localeCompare(b));
  //console.log('Nama produk (hasil sorting manual A→Z):', sortedNamesztoa);

  // Validasi: hasil UI sudah AtoZ
  expect(uiNamesztoa).toEqual(sortedNamesztoa);

  // Validasi tambahan: pairwise (opsional tapi senior style)
  for (let i = 0; i < uiNamesztoa.length - 1; i++) {
    //console.log(`Compare index ${i}: "${uiNamesztoa[i]}" <= "${uiNamesztoa[i + 1]}"`);
    expect(uiNamesztoa[i].localeCompare(uiNamesztoa[i + 1])).toBeLessThanOrEqual(0);
  }

  //console.log('✅ Sorting Name A to Z sudah benar');

// Screenshot setelah sorting
  await takeScreenshot(page, testInfo, 'after-sorting');
});