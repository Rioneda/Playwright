import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { takeScreenshot } from '../utils/screenshot';

test('TC 9 Login menggunakan password valid namun tidak diisi username', async ({ page },testInfo) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLoginForm('', 'secret_sauce')
  
  await takeScreenshot(page, testInfo, 'before')
  
  await loginPage.clickLogin()

  await expect(loginPage.errorlogin).toContainText('Epic sadface: Username is required')

  await takeScreenshot(page, testInfo, 'after')
});

  