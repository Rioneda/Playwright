import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { takeScreenshot } from '../utils/screenshot';

test('TC 7 Login menggunakan Username visual_user Password secret_sauce', async ({ page },testInfo) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLoginForm('visual_user', 'secret_sauce')
  
  await takeScreenshot(page, testInfo, 'before')
  
  await loginPage.clickLogin()

  await expect(loginPage.title).toContainText('Products')

  await takeScreenshot(page, testInfo, 'after')
});