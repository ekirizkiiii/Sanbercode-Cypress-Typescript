export class CartPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    lbl_name_sauceLabsBackpack = '#item_4_title_link > div'
    btn_remove_sauceLabsBackpack = '#remove-sauce-labs-backpack'
    
    lbl_name_sauceLabsBoltTshirt = '#item_1_title_link > div'
    btn_remove_sauceLabsBoltTshirt = '#remove-sauce-labs-bolt-t-shirt'
   
    lbl_name_sauceLabsOnesie = '#item_2_title_link > div'
    btn_remove_sauceLabsOnesie = '#remove-sauce-labs-onesie'
    
    btn_checkout = '#checkout'

    verifyListProductInCart(){
        cy.get(this.lbl_name_sauceLabsBackpack).invoke('text').as('lblNameItem4Cart');
        cy.get(this.btn_remove_sauceLabsBackpack).prev().invoke('text').as('lblPriceItem4Cart')
        cy.get(this.lbl_name_sauceLabsBoltTshirt).invoke('text').as('lblNameItem1Cart');
        cy.get(this.btn_remove_sauceLabsBoltTshirt).prev().invoke('text').as('lblPriceItem1Cart')
        cy.get(this.lbl_name_sauceLabsOnesie).invoke('text').as('lblNameItem2Cart');
        cy.get(this.btn_remove_sauceLabsOnesie).prev().invoke('text').as('lblPriceItem2Cart')
    }

    removeProductFromCart(){
        cy.get(this.btn_remove_sauceLabsBackpack).click();
        cy.get(this.btn_remove_sauceLabsBoltTshirt).click();
        cy.get(this.btn_remove_sauceLabsOnesie).click();
    }

    verifyEmptyCart(){
        cy.get(this.lbl_name_sauceLabsBackpack).should('not.exist')
        cy.get(this.lbl_name_sauceLabsBoltTshirt).should('not.exist')
        cy.get(this.lbl_name_sauceLabsOnesie).should('not.exist')
    }

    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }
}