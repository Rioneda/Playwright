// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page

    // locators
    this.usernameInput = page.locator('[data-test="username"]')
    this.passwordInput = page.locator('[data-test="password"]')
    this.loginButton = page.locator('[data-test="login-button"]')
    this.title = page.locator('[data-test="title"]')
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/')
  }

  async fillLoginForm(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
  }
  
  async clickLogin(){
	await this.loginButton.click()  
	}
}
