import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../pages/Homepage'
import SearchPage from '../pages/SearchPage'
import MyAccount from '../pages/MyAccount'
import PdpPage from '../pages/Pdp'
import CartPage from '../pages/Cart'
import CheckoutPage from '../pages/Checkout'
import LoginPage from '../pages/Login'
import PLPPage from '../pages/PLP'
import PreEmailPage from '../pages/PreEmail'
import "cypress-real-events"
/*----------------------------------------------------------------------------------*/
/*FAKER */
var faker = require('faker')
/*Personal Data*/
const firstNameFaker = faker.name.firstName()
const lastNameFaker = faker.name.lastName()
const fullNameFaker = firstNameFaker + ' ' + lastNameFaker
const correctEmailFaker = faker.internet.email(firstNameFaker, lastNameFaker)
const invalidEmailFaker = faker.internet.email(
  firstNameFaker,
  lastNameFaker,
  '@invalidprovider'
)
const passwordFaker = faker.internet.password(16)
//const documentFaker = faker.helpers.replaceSymbolWithNumber('#########K')
const phoneFaker = faker.helpers.replaceSymbolWithNumber('11########')
/*Address Data*/
const customStreetFaker = faker.helpers.replaceSymbolWithNumber('###-### #####')
//const customStreetNumberFaker = faker.helpers.replaceSymbolWithNumber('##')
const customNumberFaker = faker.helpers.replaceSymbolWithNumber('##')
//const customStreetComplementFaker = faker.helpers.replaceSymbolWithNumber('##')
const complementFaker = faker.address.direction()
///const neighborhookFaker = faker.lorem.word(12)
/*Cartões*/
const visaRandom = faker.helpers.replaceSymbolWithNumber('4000############')
const americanExpressRandom = faker.helpers.replaceSymbolWithNumber('37#############')
const dinersRandom = faker.helpers.replaceSymbolWithNumber('38############')
const cabalRandom = faker.helpers.replaceSymbolWithNumber('6042############')
const mastercardRandom = faker.helpers.replaceSymbolWithNumber('55##############')
//const cvvCardRandom = faker.helpers.replaceSymbolWithNumber('###')
/*Coupon*/
const invalidCoupon = faker.helpers.replaceSymbolWithNumber('TEST###')
/*FAKER */
/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
/*FIXTURES*/
import PLP from '../../fixtures/plp.json'
import itemsMenuAtendimento from '../../fixtures/itemsMenuAtendimento.json'
import itemsMenuAbout from '../../fixtures/itemsMenuAbout.json'
import itemsCategories from '../../fixtures/itemsCategories.json'
import itemsCategoriesMobile from '../../fixtures/itemsCategoriesMobile.json'
import itemsFooter from '../../fixtures/itemsFooter.json'
import linkLogoHeader from '../../fixtures/linkLogoHome.json'
import addressData from '../../fixtures/addressData.json'
import accessData from '../../fixtures/accessData.json'
import product from '../../fixtures/product.json'
import personalData from '../../fixtures/personalData.json'
import siteTitle from '../../fixtures/siteTitle.json'
import { address } from 'faker'
import Pdp from '../pages/Pdp'
import filter from '../../fixtures/filter.json'
import URLpages from '../../fixtures/URLpages.json'
// import { check } from 'yargs'
import Cart from '../pages/Cart'
import  CouponsData from  '../../fixtures/CouponsData.json'
import Faker from 'faker/lib'


/*const itemsMenuAtendimento = require('../../fixtures/itemsMenuAtendimento.json')
const itemsMenuAbout = require('../../fixtures/itemsMenuAbout.json')
const itemsCategories = require('../../fixtures/itemsCategories.json')
const itemsCategoriesMobile = require('../../fixtures/itemsCategoriesMobile.json')
const itemsFooter = require('../../fixtures/itemsFooter.json')
const linkLogoHeader = require('../../fixtures/linkLogoHome.json')
const addressData = require('../../fixtures/addressData.json')
const accessData = require('../../fixtures/accessData.json')
const product = require('../../fixtures/product.json')*/
//const PLP = require('../../fixtures/plp.json')
/*FIXTURES*/
/*----------------------------------------------------------------------------------*/


Given("I'm on the Home page", () => {
  HomePage.accessHomepage()
})

Given("I'm on the login page", () => {
   LoginPage.acessLoginPage()
})

Given("I'm on the product list page", () => {
  PLPPage.visitPLP(PLP.url)
  cy.url().should('contains', PLP.url)

})

Given('I have one item in the cart with {} units', (quantity) => {
  CartPage.accessCartPageWithProduct1(product[3].salesChannel, product[0].SKU, quantity)
})

Given('I have two items in the cart with {} units each one', (quantity) => {
  CartPage.accessCartPageWithProducts1and2(
    product[0].salesChannel,
    product[0].SKU,
    product[1].SKU,
    quantity
  )
})

Given('I add two items in the cart', () => {
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct1(product[0].SKU, 'visible')
  PdpPage.urlPDP(product[1].url)
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct2(product[1].SKU, 'visible')
})

Given('I click on + symbol', () => {
  
  PdpPage.clickBtnPlusProduct()
  
})
Given('I click on + symbol mobile', () => {
  cy.scrollTo(0,-1000)
  PdpPage.clickBtnPlusProduct()
  
})

Given('I add two items in the cart mobile', () => {
  PdpPage.clickBtnAddToCartMobile()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct1(product[0].SKU, 'visible')
  PdpPage.urlPDP(product[1].url)
  PdpPage.clickBtnAddToCartMobile()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct2(product[1].SKU, 'visible')
})

Given('At {}', (device) => {
  switch (device) {
    case 'Desktop':
      break
    case 'IPhoneXR':
      HomePage.viewPortPDPIphoneXR()
      break
    case 'SamsungS10':
      HomePage.viewPortPDPSamsungS10()
      break
  }
})

Given("I'm on the product detail page", () => {
    PdpPage.urlPDP(product[1].url)
    cy.wait(1500)
})


Given("I'm on the cart with one product and {} units", (quantity) => {
  CartPage.accessCartPageWithProduct1(product[0].salesChannel, product[0].SKU, quantity)
})

When('I click on the modal', () => {
  HomePage.btnModalRegion()
})

When('I click on the modal mobile', () => {
  HomePage.btnModalRegionMobile()
})



When('I do login using correct email and password', () => {
  // HomePage.clickBtnLogin()
  //HomePage.clickBtnLoginWithEmailPassword()
  HomePage.typeEmail(accessData.correctEmail)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
  cy.wait(5000)
})


When('I do login using correct email and password mobile', () => {
  HomePage.clickMenuCategoriesPM()
  HomePage.clickBtnLoginMobile()
 // HomePage.clickBtnLoginWithEmailPasswordmobile()
  HomePage.typeEmail(accessData.correctEmail)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})





When('I do Loggout from the site', () => {
  if (Cypress.env('Device') === 'desktop') {
    HomePage.clickBtnLoggedUser()
  HomePage.clickBtnLogoff()
  } else {
    HomePage.clickBtnLoggedUserMobile()
    HomePage.clickBtnLogoff()
  }
})

When('I Access my Wishlist',() =>{
MyAccount.acessMyWishList()

})



When('I subscribe at the newsletter', () => {
  HomePage.clickbtnNewsletter()
  HomePage.typeNewsletterEmail(accessData.wrongEmail)
  HomePage.clickOkBtnNewsletter()
})

When('Im on cart page',() => {
  cy.visit(URLpages[0].cart)
 
  PdpPage.validateCartURL()
})


When('Im on cart page 2',() => {
  cy.visit(URLpages[1].cart)

  PdpPage.validateCartURL()
})

When('I click on + symbol at minicart',() => {
    PdpPage.plusMinicart() 
})

When('I click on remove button',() => {
  PdpPage.RemoveItemMinicart()

})

When ('Open minicart',() =>{
  PdpPage.minicartOpen()
})



When('I Acess the checkout with personal data filled in', ()=>{
  CheckoutPage.CheckoutPageFill(URLpages[1].cart)
})



When('dont fill any field',() =>{
  CheckoutPage.clickAllProfilesField()
})

When('I fill in the checkout data without firstname', () => {
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeRGProfile(personalData[0].RG)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(phoneFaker)
  CheckoutPage.clickBtnGoToShipping()
})

When('I remove the item from cart', () => {
  CartPage.clickFnItemRemove(product[0].SKU)
})

When('I remove all items from cart', () => {
  CartPage.clickClearCart(product[1].SKU)
})

When('I add the quantity for {} units', (quantity) => {
  CartPage.clickXpFnIncrementQuantity(product[0].SKU, quantity)
})

When('I reduce the quantity for {} units', (quantity) => {
  CartPage.clickXpFnDecrementQuantity(product[0].SKU, quantity)
})

When('I access the product page {}', (product) => {
  HomePage.typeSearchBar(product)
  SearchPage.clickFnSrcResult(product)
})

When('The page is full loaded', () => {
  PdpPage.validatePageFullLoaded()
})

When('I click on add cart button',() =>{
  cy.wait(2000)
  PdpPage.minicartOpen()
  PdpPage.closeMinicart()
  PdpPage.clickBtnAddToCart()
})

When('The page is full loaded in mobile', () => {
  PdpPage.validateBtnAddToCartMobile()
})

When('I select the ordination by {}', (optionOrderBy) => {
  PLPPage.selectOrderBy(optionOrderBy)
})

When('I click on buy button',()=>{
  PLPPage.clickBuyBtn()
})

When('I select to Order by {}',(order) => {
  switch (order) {
    case 'Mais vendidos':
      PLPPage.selectOrder(filter[0].Value)
      break;
    case 'Descontos':
      PLPPage.selectOrder(filter[1].Value)
      break;
  }
  

})


When('I select the mobile filter {}', (optionFilterBy) => {
  PLPPage.clickBtnFilterMobile()
  PLPPage.clickBtnFilterSubCategoryMobile()
  PLPPage.selectFilterBy(optionFilterBy)
  PLPPage.clickBtnApplyMobile()
})


When('I access the category page {}', (categoryNew) => {
  category = categoryNew
  HomePage.validateCategoryLink(category)
})
When('Go to the cart', ()=>{
  CartPage.accessCartPage(URLpages[1].cart)
})

When('I edit my personal data - {} Gender', (gender) => {
  MyAccount.clickEditPersonalData()
  cy.wait(2000)
  switch (gender) {
    case 'Male':
      cy.wait(3000)
      MyAccount.selectGender(personalData[0].gender,)
      MyAccount.clickSavePersonalData()
      break;

    case 'Female':
      cy.wait(3000)
      // MyAccount.typeName(firstNameFaker)
      // MyAccount.typeLastName(lastNameFaker)
      // MyAccount.typeHomePhone(personalData[1].phone)
      MyAccount.selectGender(personalData[1].gender)
      // MyAccount.typeBirthDate(personalData[1].birthDate)
      // MyAccount.typeDocument(personalData[1].documentID)
      MyAccount.clickSavePersonalData()
      break;
  }
  
})

When('I edit my personal data - Without Gender', () => {
  MyAccount.clickEditPersonalData()
  MyAccount.typeName(firstNameFaker)
  MyAccount.typeLastName(lastNameFaker)
  MyAccount.typeDocument(personalData[0].documentID)
  MyAccount.typeHomePhone(personalData[0].phone)
  MyAccount.typeBirthDate(personalData[0].birthDate)
  MyAccount.clickSavePersonalData()
})

When('I calculate valid shipping', () => {
  CartPage.typeZipCode(addressData[0].zipCode)
})

When('I calculate invalid shipping', () => {
  CartPage.typeZipCode(addressData[2].zipCode)
  CartPage.clickBtnbtnCalculateShipping()
})

When('I reduce the amount from cart1', () =>{
  CartPage.reduceAmount1()
})


Then('I visualize the region being applied', () => {
 
  if (Cypress.env('Device') === 'desktop') {
    HomePage.visibleModalRegionApplied()
  } else {
    cy.scrollTo('top')
    HomePage.visibleModalRegionApplied()
  }

})

Then('I visualize the regionalization modal', () => {
  HomePage.visibleModalRegion()
})

Then('I must be logged on the site', () => {
  
  if (Cypress.env('Device') === 'desktop') {
    HomePage.validateUserLogged('logged', accessData) 
  } else {
    HomePage.clickMenuCategories()
    HomePage.validateUserLoggedMobile('logged', accessData)
  }
})




Then('I must not be logged into the site', () => {
 
  if (Cypress.env('Device') === 'desktop') {
    HomePage.validateUserLogged('not logged', accessData)
  } else {
    HomePage.clickMenuCategories()
    HomePage.validateUserLoggedMobile('not logged', accessData)
  }
})

Then('I validate if is clean cart', () => {
  CartPage.validateCartEmpty()
})

Then('I validate if the two items are in cart', () => {
  CartPage.validateFnImgProduct1(product[0].SKU, 'visible')
  CartPage.validateFnImgProduct2(product[1].SKU, 'visible')
})

Then('I validate if the quantity has been changed to {}', (quantity) => {
  CartPage.validateXpFnItemQuantity(product[0].SKU, quantity)
})

Then ('Check if a success message appears', () => {
 CartPage.cartSharemessage()
})

Then('the product value is visible', () => {
  PdpPage.validatePrice()
})

Then('The product value is visible in mobile', () => {
  PdpPage.validatePriceMobile()
})



Then('I validate if are {} same products at minicart',(quantity) => {
  PdpPage.validateSelectorMinicartNumericField(quantity)
})
Then('I validate if are {} products to add in the cart',(quantity)=>{
  // cy.scrollTo(0,-1000)
  PdpPage.validateSelectorNumericField(quantity)

})

Then('I validate if are 2 different products at minicart',() => {
  PdpPage.validateMinicartNumericField()
})

Then('I validate if are {} product at minicart',(quantity)  => {
  PdpPage.validateMinicartNumericField(quantity)
})

Then('The shipping table should be displayed', () => {
  PdpPage.validateShippingDataTable()
})

Then('The shipping error will be displayed', ()=>{
  PdpPage.validateShippingError()
})


Then('The product should not be on the minicart anymore', () =>{
  PdpPage.validateEmptyCart()
})

Then('Validate if the subtotal is showing',() =>{
  PdpPage.minicartSubtotal()
})

Then('Im on carts page',() => {
  
  PdpPage.validateCartURL()
})

Then('Validate Item adicionado a sua cesta / ver cesta appears', () => {
  PdpPage.validateBtnVerCesta
})

Then('The discount coupon should be invalid', () => {
  CartPage.validateMsgCartInvalidDiscountCoupon(invalidCoupon)
  CartPage.validateEmpytInputCartCoupon()
})

Then('validate if the {} code is active',(val) =>{
  CartPage.CodeActived(val)
})

Then('I validate if are {} product at minicart',(quantity)  => {
  CartPage
})
Then('should have {} quantity of the same product in the cart',(quantity) =>{
  CartPage.validateProductQauntity(quantity)

})

Then('The product card should be visible', () => {
  PLPPage.validateProductCard()
})

Then('I validate the page ordenation by {}', (orderBy) => {
  PLPPage.validatePageOrdenation(orderBy)
})

Then('The filter parameter must be in the url {}', (optionFilterBy) => {
  PLPPage.validateCheckBoxFiltersCheckedURL(optionFilterBy)
})

Then('More products should appears',() =>{
  PLPPage.validatePagination()
})

Then('The filter parameter must be checked {}', (optionFilterBy) => {
  PLPPage.validateCheckBoxFiltersChecked(optionFilterBy)
})

Then('The mobile filter parameter must be checked {}', (optionFilterBy) => {
  PLPPage.clickBtnFilterMobile()
  PLPPage.clickBtnFilterSubCategoryMobile()
  PLPPage.validateCheckBoxFiltersChecked(optionFilterBy)
})

Then('the minicart is opened',()=>{
  PLPPage.minicartOpened()
})

Then('validate if filter works',() => {
  const deviceType = Cypress.env('deviceType');
  const filter = "sort=score_desc";
  cy.url().should('contains', filter);
  cy.url().should('contains',PLP.validateFilter)
})
Then('validate if have any filter select',() => {
  cy.url().should('contains' , PLP.url)
})



Then('I validate the footer PG links', () => {
  
  if (Cypress.env('Device') === 'desktop') {
    cy.scrollTo('bottom')
    itemsFooter.forEach((itemsFooter) => {
    HomePage.validateFooterLinks(itemsFooter.text, itemsFooter.url)
  })
  } else {
    cy.scrollTo('bottom')
    HomePage.validateFooterLinksmobile()
  }
   
})




Then('the Vivara logo has a link to homepage', () => {
  HomePage.logoVivaraLink(linkLogoHeader.link)
  cy.url().should('contains',linkLogoHeader.link )
  
})

Then('the Life logo has a link to homepage', () => {
  HomePage.logoLifeLink()
  cy.wait(1500)
  cy.url().should('contains',linkLogoHeader.Life )
  
})

Then('the store logo has a link to homepage mobile', () => {
  // HomePage.validateLinkHeaderToHomeMobile(linkLogoHeader.link)
  
})

Then('No results should be displayed', () => {
  SearchPage.validateResultEmpty()
})

Then('I verify the categories available on menu', () => {
  if (Cypress.env('Device') === 'desktop') {
    HomePage.hoverMenuCategories()
  } else {
    HomePage.clickMenuCategories()
    itemsCategoriesMobile.forEach((itemsCategoriesMobile) => {
      HomePage.validateLinksOnMenuCategoriesmobile()
    })
  }  
})

Then('I verify the categories available on header menu', () => {
  itemsHeaderMenu.forEach((itemsHeaderMenu) => {
    HomePage.validateLinksOnHeaderMenuCategories(
      itemsHeaderMenu.text,
      itemsHeaderMenu.url
    )
  })
})

Then('I visualize a a error-Inavalid postal code',() => {
  HomePage.validateInavalidPostal()
})

Then('the withdrawal options are visible',() =>{
  CheckoutPage.withdrawalOptions()
})

Then('Validate if the shipping methods are visible', () =>{
  CheckoutPage.deliveryOptions()
  CheckoutPage.selectDelivery()
  CheckoutPage.modalpickupcloseButton()
})

Then('The QR code is visible', () =>{
  CheckoutPage.PixModal()
})



Then('I check if the personal data was edited correctly - {} Gender', (gender) => {
  cy.wait(3000)
  switch (gender) {
    case 'Male':
      if (Cypress.env('Device') === 'desktop') {
        cy.wait(2000)
        MyAccount.validateGenderSaved(personalData[0].gender2)
      
      } 
      else {
        cy.wait(2000)
        MyAccount.validateGenderSaved(personalData[0].gender2) 
      }

      break;
    case 'Female':
      cy.wait(1000)
      if (Cypress.env('Device') === 'desktop') {
      cy.wait(2000)
      MyAccount.validateGenderSaved(personalData[1].gender2)
      
      }
      else {
      cy.wait(2000)
      MyAccount.validateGenderSaved(personalData[1].gender2) 
      }

      break;
  }
  

})



Then('I check if the personal data was edited correctly - Without Gender', () => {
  MyAccount.validateNameSaved(firstNameFaker)
  MyAccount.validateLastNameSaved(lastNameFaker)
  MyAccount.validateDocumentSaved(personalData[0].documentID)
  MyAccount.validateBirthDate(personalData[0].birthDate)
  MyAccount.validateHomePhone(personalData[0].phone)
})

Then('I check if the address was edited correctly', () => {
  MyAccount.validateAddressTable()
  //MyAccount.validateAddressSavedStreet(customStreetFaker)
  MyAccount.validateAddressSavedNumber(customNumberFaker)
  MyAccount.validateAddressSavedComplement(complementFaker)
  MyAccount.validateAddressSavedZipCode(addressData[1].zipCode)
  //MyAccount.validateAddressSavedCity(addressData[1].city)
  //The state is showed in upper case in front-end, but cypress is case sensitive
  //MyAccount.validateAddressSavedState(state)
  //MyAccount.validateAddressSavedCountry(addressData[1].country)
})

Then('I check that I am in the correct page', () => {
  
  if (Cypress.env('Device') === 'desktop') {
    MyAccount.validateMyOrdersPage()

  }
  else {
    MyAccount.validateMyOrdersPageMobile()
  }

})

Then('I check that I am in Wishlist page',()=>{
  MyAccount.ValidateWishListPage()
   
  // if (Cypress.env('Device') === 'desktop') {
  //   MyAccount.ValidateWishListPage() 
  // } 
  // else{
  //   MyAccount.ValidateWishListPage()
   
  // }
})

Then('The footer should being showing',()=>{
  HomePage.validateFooter()
})

Then('I check if the address was deleted correctly', () => {
  MyAccount.validateAddressTable()
  MyAccount.validateDeletedAddressStreet(customStreetFaker)
  MyAccount.validateDeletedAddressComplement(complementFaker)
  MyAccount.validateDeletedAddressCity(addressData[1].city)
  //The state is showed in upper case in front-end, but cypress is case sensitive
  //MyAccount.validateAddressSavedState(state)
  //MyAccount.validateAddressSavedCountry(addressData[1].country)
})

Then('I validate if have just {} quantity of this product', (qntd) =>{
  CartPage.validateReduceAmount (qntd)
})

Then('I validate if have just 1 product', ()=>{
Cart.validateRemoveProduct()
})

Then ('Validate im on cart page',()=>{
  PdpPage.validateCartURL()
})

Then('Region should exist on indexDB',()=> {
  PdpPage.indexDBregion()
})

Then('checkbox MASTERCARD must be selected', () => {
  CheckoutPage.validateCardNumberMastercard()
})

Then ('The minicart is empty' ,() =>{
  PdpPage.validateEmptyCart()
})

Then('checkbox VISA must be selected', () => {
  CheckoutPage.validateCardNumberVisa()
})

Then('checkbox DINNERS must be selected', () => {
  CheckoutPage.validateCardNumberDinners()
})

Then('checkbox AMERICANEXPRESS must be selected', () => {
  CheckoutPage.validateCardNumberAmericanExpress()
})

Then('checkbox CABAL must be selected', () => {
  CheckoutPage.validateCardNumberCabal()
})

Then('mandatory firstname alert is displayed', () => {
  CheckoutPage.validateFirstNameAlert()
})

Then('mandatory all alert are displayed', () => {
  CheckoutPage.validateFirstNameAlert()
  CheckoutPage.validateLastNameAlert()
  CheckoutPage.validateDocumentAlert()
  CheckoutPage.validateRGAlert()
  CheckoutPage.validatePhoneAlert()
})
Then('mandatory lastname alert is displayed', () => {
  CheckoutPage.validateLastNameAlert()
})

Then('The delivery should be {}',(quantity) =>{
 CheckoutPage.freeDelivery(quantity) 
})

Then('mandatory document alert is displayed', () => {
  CheckoutPage.validateDocumentAlert()
})


// Then('The modal of Confirm Your ID appears',() =>{
//   CheckoutPage.validateModalConfirmID()
//   CheckoutPage.closeModalConfirmID()
// })
Then('mandatory phone number alert is displayed', () => {
  CheckoutPage.validatePhoneAlert()
})
Then('mandatory RG alert is displayed', () => {
  CheckoutPage.validateRGAlert()
})
Then('mandatory CPF alert is displayed', () => {
  CheckoutPage.validateDocumentAlert()
})

Then('The shipping table should be displayed at Cart', () => {
  CartPage.validateShippingAvailable()
})


Then('Should go to Nossas Certificações',() =>{
  CartPage.validateGoesToNossasCertificacoes()
})

Then('The cart should be empty',() =>{
  CartPage.validateCartEmpty()
})

Then('validate if the gift is selected', () =>{
  CartPage.selectedForGift()
})



And('On the product page calculate valid shipping', () => {
  cy.wait(5000)
  PdpPage.typeZipCode(addressData[0].zipCode)
  PdpPage.clickBtnCalcShipping()
  PdpPage.validateShippingDataTable()
  
})

And('On the product page calculate invalid shipping', () => {
  PdpPage.typeZipCode(addressData[2].zipCode)
  PdpPage.clickBtnCalcShipping()

})

And('I Access my orders page', () => {
  MyAccount.visitMyOrders()
})

And('I Access the profile page', () => {
 
  if (Cypress.env('Device') === 'desktop') {
    MyAccount.visitAccount()
  } 
  else {
    cy.wait(3000)
    MyAccount.visitAccount()
    MyAccount.selectProfile() 
  }
})

And('I access the edition address page', () => {
  MyAccount.clickEditAddress()
})

And('I must be logged',() =>{
  LoginPage.setLoginCookie(accessData.cookieAuth,accessData.cookieValue)
  cy.visit("/")
 
})

And('Set cookies',()=>{
  LoginPage.setLoginCookie(accessData.cookieAuth,accessData.cookieValue)
  cy.wait(500)
  LoginPage.setLoginCookie(accessData.cookieAuht2,accessData.cookieValue)
  cy.wait(2000)
  cy.visit('/account#/profile')
})

And('I see the region modal', () => {
   PdpPage.closeModalRegion()
})

And('Open minicart',() =>{
  PdpPage.minicartOpen()
})

And ('I click on - symbol at minicart', () =>{
  PdpPage.minusMinicart()
}) 


And('Go to checkout',()=>{
  CartPage.clickBtnCartToOrderForm()
})

And('Click on Nossas Certificações', () =>{
  CartPage.nossasCertificacoesClick()
})

And('click on Carregar mais produtos',() =>{
  PLPPage.clickPaginationBtn()

})



And ('Add an other product' ,() =>{
  
  if (Cypress.env('Device') === 'desktop') {
    PdpPage.closeMinicart()
    PdpPage.clickOnCarouselProduct()
  } 
  else {
    PdpPage.closeMinicart()
    PdpPage.clickOnCarouselProductMobile() 
    cy.wait(2000)
    PdpPage.minicartOpen()
    PdpPage.closeMinicart()
    PdpPage.clickBtnAddToCart()
  }
})

And('select some filter',() =>{
  
  if (Cypress.env('Device') === 'desktop') {
    PLPPage.selectFilter()
    PLPPage.filterSomething()
  }
  else {
    PLPPage.clickBtnFilterMobile()
    PLPPage.selectFilterMobile()
    PLPPage.checkFilterMontblancMobile()
    PLPPage.confirmBtnFilterMobile()
  }
})

And('clear filter',() =>{
  
  if (Cypress.env('Device') === 'desktop') {
    PLPPage.cleanFilter()
  } 
  else {
    PLPPage.clickBtnFilterMobile()
    PLPPage.selectFilterMobile()
    PLPPage.cleanFilterMobile()
  }
})

And('I mouseover on the {}',(el) =>{
  if (el=="card") {
    PLPPage.cardValue()
  } else {
    if(el="modal region")
    HomePage.btnModalRegion()
  }
})

And('I access the {} page',(page)=>{
  cy.visit(page)
})

And('I click on Ir para a sacola button',() =>{
PdpPage.ValidateBtnGoToCart()
})

And('Close cookies info', () => {
  HomePage.btnCloseCookie()
})

And('Close CEP modal', () => {
  PdpPage.closeModalRegion()
})

And('Change the postal code',() =>{
  HomePage.changeCEP("40255040")

})

And('Use a invalid postal code',() =>{
HomePage.changeCEP("00000000")
})

And('visit PDP',() =>{
  PdpPage.urlPDP(product[1].url)
  
})

And('close minicart',() => {
PdpPage.closeMinicart()
})

And('Change validate MyLocation',() =>{
  HomePage.validateRegionMyLocatinon()
})

And('click on plus symbol',() =>{

  CartPage.plusBtn()
})

And('Fill Pré-email field',() =>{
  PreEmailPage.fillEmail()
  CheckoutPage.ClosePopUpEmail()
})

And ('click to edit my personal data', ()=>{
CheckoutPage.editPesonalDataBtn()

})

// And('click to edit my address',() =>{
//   CheckoutPage.selectDelivery()
//   CheckoutPage.editAdressBtn()
// })

And('Fill New Pré-email field',() =>{
  PreEmailPage.AccessPage(URLpages[0].Email)
  PreEmailPage.fillEmailFaker(correctEmailFaker)
  
})
And('Remove product from cart', () =>{
  CartPage.removeProduct()
})

And('add a {} coupon',(val) =>{
  switch (val) {
    case "Seller":
      CartPage.sellerCoupon(CouponsData.SellerCoupon)
      break;
    case"Discount":
    CartPage.discountCoupon(CouponsData.DiscountCoupon)
    
  }
  
})


And('clean IndexDB', () =>{
  PdpPage.cleanIndexDB()
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
})
And('I fill the address data', () => {
  cy.reload()
  CheckoutPage.typeZipCode(addressData[0].zipCode)
  CheckoutPage.typeCustomNumberShipping(customNumberFaker)
  CheckoutPage.clickBtnGoToPayment()
})
And('click withdrawal button in store',() =>{
  CheckoutPage.selectWithdrawalBtn()
})

And("I'm on the Home page", () => {
  HomePage.accessHomepage()
})

And('Select PIX payment', () =>{
  CheckoutPage.clickBtnGoToPayment()
  CheckoutPage.selectPIX()
  CheckoutPage.clickBtnBuyNow()
})

And('remove a product', () => {
  CartPage.clickFnItemRemove(product[1].SKU)
})
And ('Click to select for gift',() =>{
  CartPage.SelectForGift()
})
And('I reduce the amount from cart', () =>{
  CartPage.reduceAmount()
})

