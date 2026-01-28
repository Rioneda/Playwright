import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { takeScreenshot } from '../utils/screenshot'

test('TC 2 Berhasil login menggunakan Username standard_user, Password secret_sauce', async ({ page }, testInfo) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLoginForm('standard_user', 'secret_sauce')
  
  await takeScreenshot(page, testInfo, 'before')
  
  await loginPage.clickLogin()

  await expect(loginPage.title).toContainText('Products')

  await takeScreenshot(page, testInfo, 'after')
})
