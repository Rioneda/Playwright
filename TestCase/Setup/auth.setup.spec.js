import { test, expect } from '@playwright/test';

test('Setup - Login standard_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  
  // Isi username (kosong)
  await page.locator('[data-test="username"]').fill('standard_user');

  // Isi password
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Klik login
  await page.locator('[data-test="login-button"]').click();
  
  // memastikan text products ada
  await expect(page.locator('[data-test="title"]')).toContainText('Products');

  await page.context().storageState({ path: 'auth.json' });
});