/// <reference types="Cypress" />
const elMyAccount = require('./elements').ELEMENTS

class MyAccount {
  validateUserLoggedMobile(Email, status, cookieAuth) {
    switch (status) {
      case 'logged':
       // cy.get(elMyAccount.lblEmail).should('be.visible')
       // cy.get(elMyAccount.lblEmail).contains(Email)
        cy.getCookie(cookieAuth).should('exist')
        break
      case 'not logged':
       // cy.get(elMyAccount.lblEmail).should('not.exist')
        cy.getCookie(cookieAuth).should('not.exist')
    }
  }

  selectProfile() {
      cy.get(elMyAccount.optProfile).should('be.visible').click({ force: true })
    
  }

  accessMyAccountPage() {
   
    cy.visit('/account#/')
    
  }

  visitAddress() {
   
    cy.visit('/account#/addresses')
    
  }

  visitMyOrders() {
      cy.visit('account#/orders')
      cy.wait(1000)
      cy.reload
      cy.wait(2000)
      cy.get(elMyAccount.OrderBtn).click({ force:true })
  }

  visitAccount() {
    
    cy.visit('/account#')
    
    
  }

  editProfile(){
    cy.get(elMyAccount.editProfileBtn).click({force:true})
    
    cy.url().should('contains', '/account#/profile/edit')
  }

  selectLogout() {
    
    cy.get(elMyAccount.optExit).should('be.visible').click({ force: true })
    
  }

  logoutConfirmationMobile() {
    
    cy.get(elMyAccount.btnLogoutMobile)
      .should('be.visible')
      .click({ force: true })
    
  }

  clickNewAddress() {
    cy.xpath(elMyAccount.btnAddNewAddress)
      .should('exist')
      .click({ force: true })
   
  }

  clickEditAddress() {
    cy.xpath(elMyAccount.btnEditAddress)
      .first()
      .should('exist')
      .click({ force: true })
    
  }

  clickEditMoreDataAdress(){
    cy.xpath(elMyAccount.labelEditAddress)
      .should('exist')
      .click({ force: true })
    
  }

  clickEditPersonalData(){
    cy.xpath(elMyAccount.editPersonalData,{timeout:15000}).click()
  }

  selectState(state) {
    cy.get(elMyAccount.cbState).select(state, { force: true })
  }

  selectGender(Gender) {
    cy.get(elMyAccount.cbGender,{timeout:10000}).select(Gender, { force: true })
  }

  typeZipCode(zipCode) {
    cy.get(elMyAccount.zipCodeField).clear()
    cy.get(elMyAccount.zipCodeField).type(zipCode)
  }

  selectCity(city) {
    cy.get(elMyAccount.cbCity).select(city, { force: true })
  }

  typeStreet(Street) {
    
    cy.get(elMyAccount.inputStreet).clear()
    cy.get(elMyAccount.inputStreet).should('be.enabled').type(Street)
  }

  typeNumber(Number) {
    cy.get(elMyAccount.inputNumber).clear()
    cy.get(elMyAccount.inputNumber).should('be.enabled').type(Number)
  }

  typeComplement(Complement) {
    cy.get(elMyAccount.inputComplement).clear()
    cy.get(elMyAccount.inputComplement).should('be.enabled').type(Complement)
  }

  typeNeighborhood(Neighborhood) {
    cy.get(elMyAccount.inputnNeighborhood).clear()
    cy.get(elMyAccount.inputnNeighborhood).should('be.enabled').type(Neighborhood)
  }

  typeReceiverName(ReceiverName) {
    cy.get(elMyAccount.inputReceiverName).clear()
    cy.get(elMyAccount.inputReceiverName).should('be.enabled').type(ReceiverName)
  }

  typeName(Name) {
    cy.get(elMyAccount.inputName).clear()
    cy.get(elMyAccount.inputName).should('be.enabled').type(Name)
  }

  typeLastName(LastName) {
    cy.get(elMyAccount.inputLastName).clear()
    cy.get(elMyAccount.inputLastName).should('be.enabled').type(LastName)
  }

  typeDocument(Document) {
    cy.get(elMyAccount.inputDocument).clear()
    cy.get(elMyAccount.inputDocument).should('be.enabled').type(Document)
  }

  typeHomePhone(areaCodePhone, phoneFaker) {
    cy.get(elMyAccount.inputHomePhone).clear()
    cy.get(elMyAccount.inputHomePhone).should('be.enabled').type(areaCodePhone, phoneFaker)
  }

  typeBirthDate(BirthDate) {
    cy.get(elMyAccount.inputBirthDate).clear()
    cy.get(elMyAccount.inputBirthDate).should('be.enabled').type(BirthDate)
  }

  clickSaveNewAddress() {
    cy.get(elMyAccount.btnSaveNewAddress)
      .should('exist')
      .click({ force: true })
    
  }

  clickSaveEditedAddress() {
    
    //cy.get(elMyAccount.btnSaveEditedAddress)
    cy.contains('Salvar endereço')
      .should('exist')
      .dblclick({ force: true })
   
  }

  clickDeleteAddress() {
    cy.xpath(elMyAccount.btnDeleteAddress)
      .should('exist')
      .click({ force: true })
   
  }

  clickSavePersonalData() {
    cy.get(elMyAccount.btnSavePersonalData)
      .should('exist')
      .click({ force: true })
    
  }

  validateAddressTable() {
   
    cy.get(elMyAccount.myAddressTable).should('be.visible')
  }

  validateAddressSavedStreet(street) {
    cy.get(elMyAccount.myAddressSavedStreet).first().should('have.text', street)
  }

  validateAddressSavedNumber(number) {
    cy.get(elMyAccount.myAddressSavedNumber).first().should('have.text', number)
  }

  validateMyOrdersPage() {
    cy.url().should('contains', '/orders')
  }

  validateMyOrdersPageMobile() {
    
    cy.get(elMyAccount.myOrdersLabelMobile).should('have.text',"Pedidos")
  }

  validateAddressSavedComplement(complement) {
    cy.get(elMyAccount.myAddressSavedComplement).first().should('have.text', complement)
  }

  validateAddressSavedZipCode(zipCode) {
    cy.get(elMyAccount.myAddressSavedZipCode).first().should('have.text', zipCode)
  }

  validateDeletedAddressStreet(street) {
    cy.get(elMyAccount.myAddressSavedStreet).first().should('not.have.text', street)
  }

  validateAddressSavedCity(city) {
    cy.get(elMyAccount.myAddressSavedCity).first().should('have.text', city)
  }

  validateAddressSavedState(state) {
    cy.get(elMyAccount.myAddressSavedState).first().should('have.text', state, { matchCase: false })
  }

  validateAddressSavedCountry(country) {
    cy.get(elMyAccount.myAddressSavedCountry).first().should('have.text', country)
  }

  validateNameSaved(Name) {
    cy.get(elMyAccount.nameSaved).first().should('have.text', Name)
  }

  validateLastNameSaved(LastNameSaved) {
    cy.get(elMyAccount.lastNameSaved).first().should('have.text', LastNameSaved)
  }

  validateDocumentSaved(DocumentSaved) {
    cy.get(elMyAccount.documentSaved).first().should('have.text', DocumentSaved)
  }

  validateGenderSaved(GenderSaved) {
    cy.get(elMyAccount.genderSaved).first().should('have.text', GenderSaved)
  }

  validateBirthDate(BirthDate) {
    cy.get(elMyAccount.birthDate).first().should('have.text', BirthDate)
  }

  validateHomePhone(Phone) {
    cy.get(elMyAccount.homePhone).first().should('have.text', Phone)
  }

  acessMyWishList(){

    // cy.wait(3000)
    cy.visit('/wishlist/')
    cy.wait(1500)
    // cy.reload()
    // cy.get(elMyAccount.wishlistBtn, {timeout: 10000}).click ({force :true})
  }
  ValidateWishListPage(){
    cy.wait(1500)
    cy.url().should('contains', '/wishlist/', {timeout: 10000})
  }
}
export default new MyAccount()
