/// <reference types="Cypress" />

const elSrcPage = require('./elements').ELEMENTS
import Homepage from '../Homepage/index'

class SearchPage {
  clickFnSrcResult(product1) {
    Homepage.closePromoModal()
    
    cy.get(elSrcPage.SEARCH_RESULT.fnSrcResult(product1))
      .should('be.visible')
      .click({ force: true })
  }

  validateResultEmpty() {
   
    cy.get(elSrcPage.SEARCH_RESULT.resultEmpty).should('be.visible')
  }
}
export default new SearchPage()
