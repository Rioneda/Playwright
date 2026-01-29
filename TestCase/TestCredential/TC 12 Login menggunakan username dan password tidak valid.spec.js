import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { takeScreenshot } from '../utils/screenshot';

test('TC 12 Login menggunakan username dan password tidak valid', async ({ page },testInfo) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLoginForm('testusername', 'testpassword')
  
  await takeScreenshot(page, testInfo, 'before')
  
  await loginPage.clickLogin()

  await expect(loginPage.errorlogin).toContainText('Epic sadface: Username and password do not match any user in this service')

  await takeScreenshot(page, testInfo, 'after')
});