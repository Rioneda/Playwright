import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { readExcel } from '../utils/excelReader.js';
import { takeScreenshot } from '../utils/screenshot.js';

const data = readExcel('Login')
  .find((d, index) => d.testCase === 'TC 9')

test('TC 9 Login menggunakan password valid namun tidak diisi username', async ({ page },testInfo) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLoginForm(data.username, data.password)
  
  await takeScreenshot(page, testInfo, 'before')
  
  await loginPage.clickLogin()

  await expect(loginPage.errorlogin).toContainText(data.expectedText)

  await takeScreenshot(page, testInfo, 'after')
});

  