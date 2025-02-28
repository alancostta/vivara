/// <reference types="Cypress" />

import Cart from '../Cart'

const elPdpPage = require('./elements').ELEMENTS

class PdpPage {
  urlPDP(productLink) {
    cy.visit(productLink)
    //cy.title().should('contain', siteTitle)
  }
  closeModalRegion(){
    cy.get(elPdpPage.modalRegion, {timeout: 5000}).click()


  }

  validateBtnVerCesta(){
    cy.get(elPdpPage.btnVerCesta).should('be.visible')
  }

  clickBtnAddToCart() {
      cy.get(elPdpPage.btnAddToCart, {timeout: 15000}).should('be.visible').first().click({ force: true })
    
  }

  clickBtnPlusProduct(){
    cy.get(elPdpPage.selectorPlusBtn, {timeout:30000}).should('be.enabled').click('center',{force: true})

  }


  clickBtnAddToCartMobile() {
   
    cy.get(elPdpPage.btnAddToCartMobile).click({ force: true })
   
  }

  typeZipCode(zipCode) {
    
    cy.get(elPdpPage.zipCodeField,{timeout:15000})
      .click({ force: true })
      .wait(1000)
      .type(zipCode)
      .wait(2000)
  }

  selectState(state) {
    cy.get(elPdpPage.cbState).select(state, { force: true })
  }

  selectCity(city) {
    cy.get(elPdpPage.cbneighborhood).select(city, { force: true })
  }

  clickBtnCalcShipping() {
    
    cy.get(elPdpPage.btnCalcShipping).should('exist').click({ force: true })
    
  }

  validatePrice() {
  
    cy.get(elPdpPage.productPrice).should('be.visible')
  }

  validatePriceMobile() {
    cy.get(elPdpPage.productPriceMobile).should('be.visible')
  }

  validateImgPdpMainProductImage() {
    cy.get(elPdpPage.productImage).should('be.visible')
  }

  validateSelectorNumericField(quantity){
    cy.get(elPdpPage.selectorNumericField)
    .invoke('val')
    .should('eq', quantity)
  }

  validateSelectorMinicartNumericField(quantity){
    cy.get(elPdpPage.inputMinicartField1,{timeout:3000})
    .invoke('val')
    .should('eq', quantity)
  }

  validateMinicartNumericField(){
    cy.get(elPdpPage.inputMinicartField1).should('be.visible')
    cy.get(elPdpPage.inputMinicartField2).should('be.visible')
    
  }

  validateShippingDataTable() {
    // cy.scrollTo(0,1000)
    cy.get(elPdpPage.tableShippingData , {timeout: 20000}).should('be.visible')
  }

  validateShippingDataTableNotAvailable() {
    
    cy.get(elPdpPage.tableShippingDataUnavailable).should("not.be.visible")
    
  }

  validateBtnAddToCart() {
    cy.get(elPdpPage.btnAddToCart).should('exist')
  }

  validateBtnAddToCartMobile() {
    cy.get(elPdpPage.btnAddToCartMobile).should('exist')
  }

  clickBtnReview(){
    cy.scrollTo(0,3270)
    cy.get(elPdpPage.reviewBtn).click({ force : true})
  }

  validateReviewsPage(){
   cy.get(elPdpPage.reviewPage).should('exist') 
  }

  plusMinicart(){
    // cy.wait(20000)
    cy.get(elPdpPage.plusBtnMinicart, {timeout:60000}).should('be.enabled').click({force:true})
  }

  // // plusMinicart(){
  // //   cy.wait(13000)
  // //   cy.get(elPdpPage.plusBtnMinicart).should('exist').click({force:true})
  // }
  minicartOpen(){
    cy.get(elPdpPage.minicartBtn).click({force:true})
   
      
  
  }
    
  minusMinicart(){
    cy.get(elPdpPage.subBtnMinicart).should('exist').click()
  }

  RemoveItemMinicart(){
    cy.get(elPdpPage.trashBtn).should('be.visible').click()
      .get(elPdpPage.trashBtn).should('not.exist')
  }

  cleanIndexDB() {
    let newRequest = window.indexedDB.open("keyval-store");
    
    newRequest.onerror = function(event) {
      console.log("Database error", event.target.error);
    };
    
    newRequest.onsuccess = function() {
      let deleteRequest = window.indexedDB.deleteDatabase("keyval-store");   
      deleteRequest.onerror = function(event) {
        console.log("Error deleting database", event.target.error);
      };   
      deleteRequest.onsuccess = function() {
        console.log("Database deleted successfully");
      };
    };   
      cy.wait(500)
   }
   cleanIndexDBName() {
     // open a connection to the database
    let newRequest = window.indexedDB.open("session");
    
    newRequest.onerror = function(event) {
      console.log("Database error", event.target.error);
    };
    
    newRequest.onsuccess = function() {
      let deleteRequest = window.indexedDB.deleteDatabase("session");   
      deleteRequest.onerror = function(event) {
        console.log("Error deleting database", event.target.error);
      };   
      deleteRequest.onsuccess = function() {
        console.log("Database deleted successfully");
      };
    };   
      cy.wait(500)
   }

  minicartEmpty(){
    cy.get('.lh-copy > .b').should('exist')
     
  }

  minicartSubtotal(){
    
    cy.get(elPdpPage.subtotalFieldMinicart).should('be.visible')
  }

  validateEmptyCart(){
    cy.get(elPdpPage.minicartEmpty).should('be.visible')
  }

  closeMinicart(){
    cy.wait(1500)
    cy.get(elPdpPage.closeMinicart, {timeout:15000}).click({force: true})
    
  }
 
  clickOnCarouselProduct(){ 
    cy.wait(1000)
   cy.get(elPdpPage.carousel, {timeout:15000}).trigger('mouseover').first()
   cy.get(elPdpPage.carouselProduct).click('center', {force: true})
  }

  clickOnCarouselProductMobile(){
   
    cy.get(elPdpPage.carouselProductMobile).eq(0).should('exist').click({force: true})
   }

  validatePageFullLoaded(){

   cy.get(elPdpPage.fotter).should('exist') 
   
  }

  ValidateBtnGoToCart(){
   cy.get(elPdpPage.btnMinicartToCart, {timeout:40000}).should('be.enabled').click('center',{force:true}) 
  }

  validateCartURL(){
    cy.url().should('contains', 'https://secure.vivara.com.br/checkout')
  }

  VisitPDP(){
    cy.visit()
  }

  visitCart(test){
  cy.visit(test)
  }
  
  validateShippingError(){
  
    cy.get(elPdpPage.shippingInvalid).should('be.visible')
  }

  indexDBregion(){

    const requestIndexedDB = window.indexedDB.open('keyval')   
      console.log(requestIndexedDB)
    requestIndexedDB.onsuccess = function(teste)  {
      const db = teste.target.result;
      const transaction = db.transaction('keyval', 'readonly')
      const store = transaction.objectStore('keyval');
      const requestGet = store.get('main::store::regionData');
      console.log(db)
      console.log(transaction)
      console.log(store)
      console.log(requestGet)

      requestGet.onsuccess = (eventGet) => {
        const meusDados = eventGet.target.result;
        const chaveDoItem = eventGet.target.result.key;
        cy.log(meusDados)
        cy.log(chaveDoItem)
        cy.get(chaveDoItem).should('exist')
      };
    };
  };
  
}
export default new PdpPage()
