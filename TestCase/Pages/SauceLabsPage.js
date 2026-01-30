// pages/SauceLabsPage.js
export class SauceLabsPage {
  constructor(page) {
    this.page = page

    // locators
	this.textname = page.locator('[id="__next"]')
    
  }
  
  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html')
  }
/*
  

  async fillLoginForm(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
  }
  
  async clickLogin(){
	await this.loginButton.click()  
	} */
}
