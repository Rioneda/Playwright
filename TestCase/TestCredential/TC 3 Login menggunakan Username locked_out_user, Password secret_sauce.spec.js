import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { takeScreenshot } from '../utils/screenshot';

test('TC 3 Login menggunakan Username locked_out_user, Password secret_sauce', async ({ page },testInfo) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLoginForm('locked_out_user', 'secret_sauce')
  
  await takeScreenshot(page, testInfo, 'before')
  
  await loginPage.clickLogin()

  await expect(loginPage.errorlogin).toContainText('Epic sadface: Sorry, this user has been locked out.');

  await takeScreenshot(page, testInfo, 'after')
});