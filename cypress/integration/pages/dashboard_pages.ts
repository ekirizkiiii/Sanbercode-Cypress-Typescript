export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    lbl_name_sauceLabsBackpack = '#item_4_title_link > div'
    btn_addToCart_sauceLabsBackpack = '#add-to-cart-sauce-labs-backpack'
    
    lbl_name_sauceLabsBoltTshirt = '#item_1_title_link > div'
    btn_addToCart_sauceLabsBoltTshirt = '#add-to-cart-sauce-labs-bolt-t-shirt'
   
    lbl_name_sauceLabsOnesie = '#item_2_title_link > div'
    btn_addToCart_sauceLabsOnesie = '#add-to-cart-sauce-labs-onesie'
    
    btn_icon_cart = '#shopping_cart_container'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addToCartSauceLabsBackpack(){
        cy.get(this.lbl_name_sauceLabsBackpack).invoke('text').as('lblNameItem4Dashboard');
        cy.get(this.btn_addToCart_sauceLabsBackpack).prev().invoke('text').as('lblPriceItem4Dashboard')
        cy.get(this.btn_addToCart_sauceLabsBackpack).click();
    }

    addToCartSauceLabsBoltTshirt(){
        cy.get(this.lbl_name_sauceLabsBoltTshirt).invoke('text').as('lblNameItem1Dashboard');
        cy.get(this.btn_addToCart_sauceLabsBoltTshirt).prev().invoke('text').as('lblPriceItem1Dashboard')
        cy.get(this.btn_addToCart_sauceLabsBoltTshirt).click();
    }

    addToCartSauceLabsOnesie(){
        cy.get(this.lbl_name_sauceLabsOnesie).invoke('text').as('lblNameItem2Dashboard');
        cy.get(this.btn_addToCart_sauceLabsOnesie).prev().invoke('text').as('lblPriceItem2Dashboard')
        cy.get(this.btn_addToCart_sauceLabsOnesie).click();
    }

    clickCartIcon(){
        cy.get(this.btn_icon_cart).click()
    }
}