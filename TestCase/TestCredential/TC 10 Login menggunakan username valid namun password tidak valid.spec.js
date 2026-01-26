import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshot';

test('TC 10 Login menggunakan username valid namun password tidak valid', async ({ page },testInfo) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');

  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  
  // Isi username (kosong)
  await page.locator('[data-test="username"]').fill('standard_user');

  // Isi password
  await page.locator('[data-test="password"]').fill('ABCD_sauce');

  // Klik login
  await page.locator('[data-test="login-button"]').click();
  
  // memastikan text error ada
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');
});