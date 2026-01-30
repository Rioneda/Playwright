// pages/InventoryPage.js
export class InventoryPage {
  constructor(page) {
    this.page = page

    // locators
	this.firstitem = page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')
    this.seconditem = page.locator('[data-test="item-1-title-link"] [data-test="inventory-item-name"]')
    this.thriditem = page.locator('[data-test="item-2-title-link"] [data-test="inventory-item-name"]')
    this.fourthitem = page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')
	this.fifthitem = page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')
    this.sixthitem = page.locator('[data-test="item-5-title-link"] [data-test="inventory-item-name"]')
	this.Descriptionitem = page.locator('[data-test="inventory-list"]')
	this.priceitem = page.locator('[data-test="inventory-list"]')
	
	//select inventory item
	this.itemname = page.locator('[data-test="inventory-item-name"]')
	this.itemdesc = page.locator('[data-test="inventory-item-desc"]')
	this.itemprice = page.locator('[data-test="inventory-item-price"]')
	
	//sorting
	this.sorting = page.locator('[data-test="product-sort-container"]')
	this.alLocatorName = page.locator('.inventory_item_name')
	this.alLocatorprice = page.locator('.inventory_item_price')
	
	//Open Menu
	this.Openmenu = page.getByRole('button', { name: 'Open Menu' })
	this.Aboutmenu = page.locator('[data-test="about-sidebar-link"]')
	
	this.backtoProducts = page.locator('[data-test="back-to-products"]')
    
  }
  
  async clickBacktoProducts(){
	  await this.backtoProducts.click()
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
