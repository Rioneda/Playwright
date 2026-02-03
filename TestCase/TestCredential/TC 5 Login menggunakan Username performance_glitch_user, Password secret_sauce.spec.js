import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { readExcel } from '../utils/excelReader'
import { takeScreenshot } from '../utils/screenshot';

const data = readExcel('Login')
  .find((d, index) => d.testCase === 'TC 5')
  
test('TC 5 Login menggunakan Username performance_glitch_user, Password secret_sauce', async ({ page },testInfo) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLoginForm(data.username, data.password)
  
  await takeScreenshot(page, testInfo, 'before')
  
  await loginPage.clickLogin()

  await expect(loginPage.title).toContainText(data.expectedText)

  await takeScreenshot(page, testInfo, 'after')
});