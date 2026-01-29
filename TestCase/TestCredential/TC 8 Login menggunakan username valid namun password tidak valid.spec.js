import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { takeScreenshot } from '../utils/screenshot';

test('TC 8 Login menggunakan username valid namun tidak diisi password', async ({ page },testInfo) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLoginForm('visual_user', '')
  
  await takeScreenshot(page, testInfo, 'before')
  
  await loginPage.clickLogin()

  await expect(loginPage.errorlogin).toContainText('Epic sadface: Password is required')

  await takeScreenshot(page, testInfo, 'after')
});

  