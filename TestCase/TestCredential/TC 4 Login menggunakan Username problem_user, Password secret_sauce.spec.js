import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshot';

test('TC 4 Login menggunakan Username problem_user, Password secret_sauce', async ({ page },testInfo) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');

  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  
  // Isi username (kosong)
  await page.locator('[data-test="username"]').fill('problem_user');

  // Isi password
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Klik login
  await page.locator('[data-test="login-button"]').click();
  
  // memastikan text products ada
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');
});