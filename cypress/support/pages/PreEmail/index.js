/// <reference types="Cypress" />

const elPreEmail = require('./elements').ELEMENTS

class PreEmail{
    fillEmailFaker(EmailFaker){
        cy.get(elPreEmail.emailField, {timeout:10000}).type(EmailFaker)
        cy.get(elPreEmail.confirmBtn).click({force:true})
    }
    
    AccessPage(page){
        cy.visit(page)
    
    }
    
    fillEmail(){
        
        cy.get(elPreEmail.emailField).type('lucas.jones@acct.global')
        cy.get(elPreEmail.confirmBtn).click({force:true})
    }
    closePopUp(){
        
        cy.get(elPreEmail.PopUp).click({force:true})
    }

}
export default new PreEmail