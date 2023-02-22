import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { CartPage } from "./pages/cart_pages";

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
const URL = 'https://www.saucedemo.com/'

describe('Cart Feature', () => {

    beforeEach(()=>{
        loginPage.login(URL,'standard_user','secret_sauce')
        loginPage.assertLogin() 
    })

    it('User can add products to cart', () => {
        dashboardPage.addToCartSauceLabsBackpack()
        dashboardPage.addToCartSauceLabsBoltTshirt()
        dashboardPage.addToCartSauceLabsOnesie()
        dashboardPage.clickCartIcon()
        cartPage.verifyListProductInCart()
        cy.then(function () {
            expect(this.lblNameItem4Dashboard).to.equal(this.lblNameItem4Cart)
            expect(this.lblPriceItem4Dashboard).to.equal(this.lblPriceItem4Cart)
            expect(this.lblNameItem1Dashboard).to.equal(this.lblNameItem1Cart)
            expect(this.lblPriceItem1Dashboard).to.equal(this.lblPriceItem1Cart)
            expect(this.lblNameItem2Dashboard).to.equal(this.lblNameItem2Cart)
            expect(this.lblPriceItem2Dashboard).to.equal(this.lblPriceItem2Cart)
        })
    })
    
    it('User can remove products from cart', () => {
        dashboardPage.addToCartSauceLabsBackpack()
        dashboardPage.addToCartSauceLabsBoltTshirt()
        dashboardPage.addToCartSauceLabsOnesie()
        dashboardPage.clickCartIcon()
        cartPage.removeProductFromCart()
        cartPage.verifyEmptyCart()
    })
})
