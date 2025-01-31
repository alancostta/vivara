/// <reference types="Cypress" />



const elLogin = require('./elements').ELEMENTS

class LoginPage {
  acessLoginPage() {
    cy.visit('https://secure.vivara.com.br/login?returnUrl=/')
  }

  setLoginCookie(auth,value){
    cy.setCookie(auth,value)
  }

}
export default new LoginPage()
