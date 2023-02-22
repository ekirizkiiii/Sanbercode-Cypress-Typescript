export class CheckoutPage{
    fieldFirstName = '#first-name'
    fieldLastName = '#last-name'
    fieldZipCode = '#postal-code'
    btn_continue = '#continue'
    errAlert = 'h3[data-test="error"]'
    summaryInfo = '.summary_info'
    btn_finish = '#finish'
    checkoutComplete = '#checkout_complete_container'

    emptyCheckoutForm(){
        cy.get(this.fieldFirstName).should('be.empty');
        cy.get(this.fieldLastName).should('be.empty');
        cy.get(this.fieldZipCode).should('be.empty');
    }

    fillCheckoutForm(){
        cy.get(this.fieldFirstName).type('lorem')
        cy.get(this.fieldLastName).type('ipsum')
        cy.get(this.fieldZipCode).type('12345')
    }

    clickContinue(){
        cy.get(this.btn_continue).click()
    }

    verifyErrorAlertMessage(){
        cy.get(this.errAlert).invoke('text').as('errMsg')
    }

    verifyCheckoutOverview(){
        cy.get(this.summaryInfo).should('be.visible');
    }

    clickFinish(){
        cy.get(this.btn_finish).click();
    }

    verifyCheckoutComplete(){
        cy.get(this.checkoutComplete).should('be.visible');
    }


}