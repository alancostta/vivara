/// <reference types="Cypress" />

const elCheckoutPage = require('./elements').ELEMENTS

class CheckoutPage {
  visitProfile() {
    cy.visit('/checkout/#/profile')
  }

  typeClientPreEmailProfile(clientPreEmail) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientPreEmail)
      .should('be.visible')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientPreEmail)
      .should('be.visible')
      .focus()
      .type(clientPreEmail, { force: true })
  }

  typeClientEmailProfile(clientEmail) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientEmail)
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientEmail)
      .should('be.enabled')
      .focus()
      .type(clientEmail, { force: true })
  }

  typeFirstNameProfile(firstName) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputFirstName)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputFirstName)
      .should('be.enabled')
      .focus()
      .type(firstName, { force: true })
     
  }

  typeLastNameProfile(lastName) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputLastName)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputLastName)
      .should('be.enabled')
      .focus()
      .type(lastName, { force: true })
  }

  typeDocumentProfile(document) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputDocument)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputDocument)
      .should('be.enabled')
      .focus()
      .type(document, { force: true })
    
  }

  typeRGProfile(document) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputRG)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputRG)
      .should('be.enabled')
      .focus()
      .type(document, { force: true })
    
  }


  typePhoneProfile(phone) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputPhone)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputPhone)
      .should('be.enabled')
      .focus()
      .type(phone, { force: true })
  }

  chkTermsAndConditions(action) {
    switch (action) {
      case 'check':
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions)
          .should('be.enabled')
          .check()
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions).should(
          'be.checked'
        )
        break
      case 'uncheck':
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions)
          .should('be.enabled')
          .uncheck()
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions).should(
          'not.be.checked'
        )
        break
    }
  }

  clickBtnPreEmail() {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.btnClientPreEmail)
      .should('be.enabled')
      .click({ force: true })
  }

  clickBtnGoToShipping() {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputRG).click()
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.moreThan12YearsCheckbox).check()
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.btnGoToShipping)
      .should('be.enabled')
      .click({ force: true })
  }

  selectAddressTypeShipping(addressType) {
   
    cy.get(elCheckoutPage.SHIPPING_DATA.cmbAddressType)
      .should('be.enabled')
      .select(addressType, { force: true })
  }

  typeZipCode(zipCode) {
    cy.get(elCheckoutPage.SHIPPING_DATA.zipCode)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.zipCode)
      .should('be.enabled')
      .focus()
      .type(zipCode, {force:true})
    cy.get(elCheckoutPage.SHIPPING_DATA.btnOKZipCode).click({force:true})
  }

  typeCustomStreetShipping(customStreet) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreet)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreet)
      .should('be.enabled')
      .focus()
      .type(customStreet, { force: true })
  }

  typeCustomNumberShipping(typeCustomNumberShipping) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomNumber)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomNumber)
      .should('be.enabled')
      .focus()
      .type(typeCustomNumberShipping, { force: true })
  }


  typeCustomStreetNumberShipping(customStreetNumber) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetNumber)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetNumber)
      .should('be.enabled')
      .focus()
      .type(customStreetNumber, { force: true })
  }

  typeCustomStreetComplementShipping(customStreetComplement) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetComplement)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetComplement)
      .should('be.enabled')
      .focus()
      .type(customStreetComplement, { force: true })
  }

  typeComplementShipping(complement) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputComplement)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputComplement)
      .should('be.enabled')
      .focus()
      .type(complement, { force: true })
  }

  typeNeighborhoodShipping(neighborhood) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputNeighborhood)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputNeighborhood)
      .should('be.enabled')
      .focus()
      .type(neighborhood, { force: true })
  }

  typeFullNameShipping(fullName) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
      .should('be.enabled')
      .focus()
      .type(fullName + '{enter}', { force: true })
  }

  clearFullNameShipping() {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
      .should('be.enabled')
      .clear({ force: true })
  }

  clickBtnGoToPayment() {
    cy.get(elCheckoutPage.SHIPPING_DATA.btnGoToPayment)
      .should('be.enabled')
      .click({ force: true })
  }

  selectMercadoPago() {
    cy.get(elCheckoutPage.PAYMENT.selectMercadoPago)
      .should('be.visible')
      .click({ force: true })
  }

  selectBankInvoiceEfecty() {
    cy.get(elCheckoutPage.PAYMENT.BANK.bankInvoiceEfecty)
      .should('be.visible')
      .click({ force: true })
  }

  selectCreditCardPayment() {
  
    cy.get(elCheckoutPage.PAYMENT.selectCreditCard).should('be.visible').click()
   
  }

  typeCardNumberVisa(CardNumberVisa) {
    
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberVisa, { force: true })
  }

  typeCardNumberAmericanExpress(CardNumberAmericanExpress) {
   
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberAmericanExpress, { force: true })
  }

  typeCardNumberMasterCard(CardNumberMasterCard) {
    
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberMasterCard, { force: true })
  }

  typeCardNumberDinners(CardNumberDinners) {
  
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberDinners, { force: true })
  }

  typeCardNumberCabal(CardNumberCabal) {
  
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberCabal, { force: true })
  }

  validateCardNumberVisa() {
  
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard0cc-0')
      .should('be.checked')
  }

  validateCardNumberAmericanExpress() {

    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard2cc-0')
      .should('be.checked')
  }

  validateCardNumberCabal() {
   
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard6cc-0')
      .should('be.checked')
  }

  validateCardNumberMastercard() {

    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard7cc-0')
      .should('be.checked')
  }

  validateCardNumberDinners() {
  
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard5cc-0')
      .should('be.checked')
  }

  validateFirstNameAlert() {
    cy.get(elCheckoutPage.ALERT.firstNameAlert).should('exist')
  }

  validateLastNameAlert() {
   
    cy.get(elCheckoutPage.ALERT.lastNameAlert).should('exist')
  }

  validateDocumentAlert() {
 
    cy.get(elCheckoutPage.ALERT.documentAlert).should('exist')
  }

  validatePhoneAlert() {

    cy.get(elCheckoutPage.ALERT.phoneAlert).should('exist')
  }

  validateRGAlert() {
    cy.get(elCheckoutPage.ALERT.RGAlert).should('exist')
  }

  clickBtnBuyNow() {
    cy.get(elCheckoutPage.PAYMENT.btnBuyNow)
      .should('be.visible')
      .click({ force: true })
  }

  selectCmbState(state) {
    cy.get(elCheckoutPage.SHIPPING_DATA.cbmState)
      .should('be.enabled')
      .select(state, { force: true })
  }

  selectCmbCity(city) {
  
    cy.get(elCheckoutPage.SHIPPING_DATA.cbmCity)
      .should('be.enabled')
      .select(city, { force: true })
  }

  selectCmbDirection(addressType) {
    cy.get(elCheckoutPage.SHIPPING_DATA.cmbAddressType)
      .should('be.enabled')
      .select(addressType, { force: true })
  }

  clickChangeShippingDataModal() {
    cy.get(elCheckoutPage.ALERT.changeShippingData)
      .should('be.visible')
      .click({ force: true })
  }

  validateCheckoutPage(){
    cy.get(elCheckoutPage.SHIPPING_DATA.titleShippingData).should('be.visible')
  }

  freeDelivery(quantity){
    cy.get(elCheckoutPage.shippingPrice).contains('Você ganhou Frete grátis.')
    // .invoke('val')
    // .should('eq', quantity)
  }
  
  backToCart(){
    cy.get(elCheckoutPage.backToTheCart).click({force:true})
    
    
  }
  CheckoutPageFill(page){
    cy.visit(page)
  }

  editPesonalDataBtn(){
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.editBtnProfile,{timeout:10000}).should('exist').click({force:true})
  
  }

  selectWithdrawalBtn(){
    cy.get(elCheckoutPage.SHIPPING_DATA.withdrawBtn, {timeout: 10000}).click()

  }

  withdrawalOptions(){
    cy.get(elCheckoutPage.SHIPPING_DATA.withdrawaloptions).should('be.visible')
  }
  deliveryOptions(){
    cy.get(elCheckoutPage.SHIPPING_DATA.deliveryMethod).should('be.visible')
  }
  selectDelivery(){
    cy.get(elCheckoutPage.SHIPPING_DATA.deliveryway, {timeout:10000}).should('be.visible').click({force:true})
  }
  modalpickupcloseButton(){
    cy.get(elCheckoutPage.SHIPPING_DATA.modalpickupcloseButton).should('be.visible').click({force:true})
  }

  editAdressBtn(){
    cy.get(elCheckoutPage.SHIPPING_DATA.editAdressBTN).should('exist').click({force: true})
  }

  selectPIX(){
    cy.get(elCheckoutPage.PAYMENT.pixPayment).click()
    
  }

  PixModal(){
    cy.get(elCheckoutPage.ALERT.pixModal, {timeout:30000}).should('be.visible')
  }
  validateModalConfirmID(){
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.modalValidateID, {timeout:20000}).should('exist')
  }
  // Modal é exibido e 1 milesimo de segundo então não da pra validar
  // closeModalConfirmID(){
  //   cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.closeModalValidateID).should('be.visible').as('btn').click()
  // }
  ClosePopUpEmail(){
    cy.get(elCheckoutPage.emailPopUp).should('be.visible')
    cy.get(elCheckoutPage.confirmEmailAcessPopUp).click({force:true})
  }

  clickAllProfilesField(){
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputFirstName).click()
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputLastName).click()
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputDocument).click()
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputPhone).click()
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputRG).click()
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.moreThan12YearsCheckbox).check()
  }
}
export default new CheckoutPage()
