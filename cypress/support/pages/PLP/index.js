/// <reference types="cypress" />

const elPlpPage = require('./elements').ELEMENTS

class PLPPage {
  visitPLP(linkPLP) {
    cy.visit(linkPLP)
   
  }

  clickBtnOrderBy() {
    
    cy.get(elPlpPage.btnselectOrderBy).click({ force: true })
  }

  clickBtnFilterMobile() {
    
    cy.get(elPlpPage.btnFilterMobile).click({ force: true })
  }

  clickBtnFilterSubCategoryMobile() {
    
    cy.log(elPlpPage.btnFilterSubCategoryMobile())
    cy.xpath(elPlpPage.btnFilterSubCategoryMobile())
      .should('exist')
      .click({ force: true })
  }

  clickBtnApplyMobile() {
    
    cy.get(elPlpPage.btnApplyMobile).click({ force: true })
  }

  selectOrderBy(optionOrderBy) {
    
    cy.get(elPlpPage.OrderBySelector).select(elPlpPage.descValueOrder)
    cy.xpath(elPlpPage.btnSelectOptionOrderBy(optionOrderBy))
      .should('exist', optionOrderBy)
      .click({ force: true })
  }

  selectOrder(filter){
    cy.get(elPlpPage.orderByBtn,{timeout:15000}).select(filter, {force: true})
      // cy.get(elPlpPage.moreSellProductOrder).click({force : true})
  }

  selectFilter(){
    cy.get(elPlpPage.filterMenu).click({force :true})
  }

  selectFilterMobile(){
    cy.get(elPlpPage.filterMenu, { timeout: 60000 }).should('be.visible').click({force :true})
  }

  checkFilterMontblancMobile(){
    cy.get(elPlpPage.filterElement).click({force:true})
  }

  confirmBtnFilter(){
    cy.get(elPlpPage.confirmFilterBtn, { timeout: 60000 }).click({force:true})
  }

  confirmBtnFilterMobile(){
    cy.get(elPlpPage.confirmFilterBtn).click({force:true})
  }

  filterSomething(){
    cy.get(elPlpPage.filterElement).click()
      cy.get(elPlpPage.confirmFilterBtn).click()
  }

  cleanFilter(){
    cy.get(elPlpPage.clearFilterBtn).click({force: true})
  }
 
  cleanFilterMobile(){
    cy.get(elPlpPage.clearFilterBtn).click({force: true})
  }
  selectFilterBy(optionFilterBy) {
    
    cy.xpath(elPlpPage.checkFilterOrderBy(optionFilterBy))
      .should('exist')
      .click({ force: true })
  }

  validateProductCard() {
    
    cy.get(elPlpPage.productCard).first().should('exist').should('be.visible')
  }

  validatePageOrdenation(orderBy) {
    
    switch (orderBy) {
      case 'Mais Vendidos':
        cy.url().should('include', 'orders_desc')
        break

      case 'Más reciente':
        cy.url().should('include', 'OrderByReleaseDate')
        break

      case 'Descontos':
        cy.url().should('include', 'discount_desc')
        break

      case 'Precios más alto':
        cy.url().should('include', 'OrderByPriceDESC')
        break

      case 'Precios más bajo':
        cy.url().should('include', 'OrderByPriceASC')
        break

      case 'Nombre, creciente':
        cy.url().should('include', 'OrderByNameASC')
        break

      case 'Nombre, decreciente':
        cy.url().should('include', 'OrderByNameDESC')
        break
    }
  }

  validateCheckBoxFiltersCheckedURL(optionFilterBy) {
   
    cy.url().should('include', optionFilterBy)
  }

  validateCheckBoxFiltersChecked(optionFilterBy) {
    
    cy.xpath(elPlpPage.checkFilterOrderBy(optionFilterBy)).should('be.checked')
  }
  clickPaginationBtn(){
    cy.get(elPlpPage.btnCarregarMaisProdutos).click({force: true})
  }
  validatePagination(){
    cy.url().should('contains', 'page=')
  }
  cardValue(){
    cy.get(elPlpPage.cardValue).first().trigger('mouseover')
  }
  clickBuyBtn(){
    cy.get(elPlpPage.buyBtnCard).click({force:true})
  }
  minicartOpened(){
    cy.get(elPlpPage.minicart).should('be.visible')
  }
}
export default new PLPPage()
