import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshot';

test('TC 1 Memastikan dapat akses web saucedemo.spec', async ({ page },testInfo) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');

  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');
});