import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { CartPage } from "./pages/cart_pages";
import { CheckoutPage } from "./pages/checkout_pages";

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

describe('Checkout Feature', () => {

    beforeEach(()=>{
        loginPage.login(URL,'standard_user','secret_sauce')
        loginPage.assertLogin()
        dashboardPage.addToCartSauceLabsBackpack()
        dashboardPage.addToCartSauceLabsBoltTshirt()
        dashboardPage.addToCartSauceLabsOnesie()
        dashboardPage.clickCartIcon()
        cartPage.clickCheckout() 
    })

    it('User can not checkout without fill all field on Checkout: Your Information page', () => {
        checkoutPage.emptyCheckoutForm()
        checkoutPage.clickContinue()
        checkoutPage.verifyErrorAlertMessage()
        cy.then(function () {
            expect(this.errMsg).to.equal('Error: First Name is required')
        })
    })
    
    it('User can checkout with fill all field on Checkout: Your Information page', () => {
        checkoutPage.fillCheckoutForm()
        checkoutPage.clickContinue()
        checkoutPage.verifyCheckoutOverview()
        checkoutPage.clickFinish()
        checkoutPage.verifyCheckoutComplete()
    })
})
