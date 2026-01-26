import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshot';

test('TC 19 About Saucedemo', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  
  await page.getByRole('button', { name: 'Open Menu' }).click();
  // Screenshot awal
  await takeScreenshot(page, testInfo, 'before');
  await page.locator('[data-test="about-sidebar-link"]').click();
  await expect(page.locator('[id="__next"]')).toContainText('© 2026 Sauce Labs Inc., all rights reserved. SAUCE and SAUCE LABS are registered trademarks owned by Sauce Labs Inc. in the United States, EU, and may be registered in other jurisdictions.');
  // Screenshot akhir
  await takeScreenshot(page, testInfo, 'after');

});