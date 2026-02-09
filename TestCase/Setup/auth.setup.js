import { chromium } from '@playwright/test';

export default async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // pastikan sudah login
  await page.waitForSelector('[data-test="title"]');

  await context.storageState({ path: 'auth.json' });
  await browser.close();
};


/*
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
*/