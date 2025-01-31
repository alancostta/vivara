/// <reference types="Cypress" />

const elHomepage = require('./elements').ELEMENTS

class HomePage {
  accessHomepage() {
    cy.visit('/')
    // cy.title().should('contain', siteTitle)
  }
  btnModalRegion(){
    cy.wait(3000)
    cy.get(elHomepage.btnModalRegion).click({position:'center'})
  }

  btnModalRegionMobile(){
    cy.get(elHomepage.btnModalRegion).click({force:true})
  }

 

  

  visibleModalRegionApplied(){
    cy.get(elHomepage.modalRegionApplied,{timeout:30000})
    .invoke('text')
    .should('contains',',')
  }

  visibleModalRegion(){
   
    cy.get(elHomepage.modalRegion).should('exist')
  }

  closeModalRegion(){
   
    cy.get(elHomepage.modalRegion).click({force:true})
  }

  viewPortPDPIphoneXR() {
    cy.viewport('iphone-xr')
    
  }

  viewPortPDPSamsungS10() {
    cy.viewport(360,760)
    
  }

  urlHomeIphoneXR(siteTitle) {
    cy.viewport('iphone-xr')
    cy.visit('/')
    cy.title().should('contain', siteTitle)
  }

  validateAtendimentoMenuLinks(itemMenuCentralAtencion, linkPage) {
    cy.xpath(
      elHomepage.itemMenuCentralAtencionElectrolux(itemMenuCentralAtencion)
    ).then((el) => {
      expect(el).have.attr('href').contain(linkPage)
    })
  }

  validateFooterLinks(itemFooterText, itemFooterLink) {
    cy.xpath(elHomepage.itemFooter(itemFooterText)).then((el) => {
      expect(el).have.attr('href').contain(itemFooterLink)
    })
  }

  validateFooterLinksmobile() {
    cy.get(elHomepage.footerMobile).should('be.visible')
  }

  clickMenuCategories() {
    cy.get(elHomepage.menuCategoriesMobile)
      .should('exist')
      .click('center',{ force: true })
      
   // cy.get(elHomepage.menumobilenivel)
    //  .should('exist')
    //  .click({ force: true })      
      
  }

  hoverMenuCategories() {
    cy.get(elHomepage.menuCategoriesMan).trigger('mouseover', { force: true })
      .get(elHomepage.menuAneisMan).should('be.visible') 
  
  }

  validateLinksOnMenuCategories() {
    cy.get(
      elHomepage.itemCategoryMenu).should('be.visible')
  }

  validateLinksOnMenuCategoriesmobile() {
    cy.get(
      elHomepage.itemCategoryMenumobile).should('be.visible')
  }

  validateLinksOnHeaderMenuCategories(itemCategoryText, itemCategoryLink) {
    cy.log(elHomepage.itemHeaderMenu(itemCategoryText, itemCategoryLink))
    cy.get(elHomepage.itemHeaderMenu(itemCategoryText, itemCategoryLink))
      .first()
      .should('be.visible')
  }

  validateLinkHeaderToHome(linkHeaderToHome) {
    cy.get(elHomepage.HEADER.headerEluxCOLogo).then((el) => {
      expect(el).have.attr('href').eq(linkHeaderToHome)
    })
  }

  validateHome(link){
    cy.url().should('eq',link)
  }

  validateLinkHeaderToHomeMobile(linkHeaderToHome) {
    cy.get(elHomepage.HEADER.headerEluxCOLogoMobile).then((el) => {
      expect(el).have.attr('href').eq(linkHeaderToHome)
    })
  }

  clickBtnLogin() {
   
    cy.get(elHomepage.HEADER.btnLogin)
      .should('be.visible')
      .click({ force: true })
  }

  clickBtnLoginMobile() {
    this.closePromoModal()
   
    cy.get(elHomepage.HEADER.btnLoginMobile).should('exist')
    
    cy.scrollTo('bottom')
    
    cy.scrollTo('top')
    cy.get(elHomepage.HEADER.btnLoginMobile)
      .should('be.visible')
      .click({ multiple: true }, { force: true })
  }

  clickBtnLoginWithEmailPassword() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.btnLoginWithEmailPassword)
      .should('exist')
      .click()
  }

  clickBtnLoginWithEmailPasswordmobile() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.btnLoginWithEmailPasswordmobile)
      .should('exist')
      .click()
  }
  typeEmail(validEmail) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.inputEmail, {timeout:15000})
      .should('exist')
      .type(validEmail)
  }

  typeNewsletterEmail(newsletter) {
    cy.get(elHomepage.newsletter).type(newsletter)
    
  }

  typePassword(validPassword) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.inputPassword, {timeout:15000})
      .should('exist')
      .type(validPassword)
  }

  clickBtnEnter() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.btnEnter)
      .should('be.visible')
      .click({ force: true })
    
  }

  validateMsgLogin(msg) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.msgInvalidLogin)
      .should('be.visible')
      .and('have.text', msg)  }



  validateUserLogged(status, cookieAuth) {
    switch (status) {
      case 'logged':
        cy.get(elHomepage.HEADER.btnLoggedUser).should('be.visible')
        // cy.getCookie(cookieAuth).should('exist')
        break
      case 'not logged':
        cy.get(elHomepage.HEADER.btnNotLoggedUser).should('be.visible')
        // cy.getCookie(cookieAuth).should('not.exist')
    }
  }

  validateUserLoggedMobile(status, cookieAuth) {
    switch (status) {
      case 'logged':
        cy.get(elHomepage.HEADER.SEARCH.btnLoggedUserMobile).should('be.visible')
        // cy.getCookie(cookieAuth).should('exist')
        break
      case 'not logged':
        cy.get(elHomepage.HEADER.SEARCH.btnNotLoggedUserMobile).should('be.visible')
        // cy.getCookie(cookieAuth).should('not.exist')
    }
  }

  clickBtnLoggedUserMobile() {
    cy.get(elHomepage.HEADER.SEARCH.btnLoggedUserMobile).click({ force: true })
  }
  clickBtnLoggedUser() {
    cy.get(elHomepage.HEADER.btnLoggedUser).click({ force: true })
  }
  clickBtnLogoff() {
    //cy.get(elHomepage.HEADER.MODAL_LOGIN.LOGGED_USER.btnLogoff)
      //.should('be.visible')
      // cy.contains('Sair')
      cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.btnExit).click({ force : true})
      cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.btnOptionExit).click({ force : true })
  }

  clickRecoveryPassword() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.recoveryPassword)
      .should('be.visible')
      .click({ force: true })
  }

  typeEmailRecoveryPassword(email) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.inputEmail)
      .should('be.visible')
      .type(email)
  }

  clickBtnSendRecoveryPassword() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.btnSend)
      .should('be.visible')
      .click({ force: true })
  }

  typeNewPasswordRecoveryPassword(newPassword) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.inputNewPassword)
      .should('be.visible')
      .type(newPassword)
  }

  typeConfirmNewPasswordRecoveryPassword(newPassword) {
    cy.get(
      elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.inputConfirmNewPassword
    )
      .should('be.visible')
      .type(newPassword)
  }

  clickBtnSendRecoveryPassword() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.btnSend)
      .should('be.visible')
      .click({ force: true })
  }

  typeSearchBar(product1) {
  
    cy.get(elHomepage.HEADER.SEARCH.inputSearchBar)
      .should('be.enabled')
      .type(product1 + '{enter}', { force: true })
  }

  typeSearchBarMobile(product1) {
   
    cy.get(elHomepage.HEADER.SEARCH.openinputSearchBarMobile)
    .should('be.enabled')
    .click({ force: true })
    cy.get(elHomepage.HEADER.SEARCH.inputSearchBarMobile)
      .should('be.enabled')
      .type(product1 + '{enter}', { force: true })
  }

  closePromoModal(){
   
    cy.get('body').then((body) => {
      if(body.find(elHomepage.PROMO_MODAL.btnCloseModal).length > 0){
        cy.get(elHomepage.PROMO_MODAL.btnCloseModal).should('be.visible').click()
      }
    })
  }

  clickbtnNewsletter(){
    cy.scrollTo(0, 6000)
    
    cy.get(elHomepage.newsletter).click({ force : true})
  }

  clickOkBtnNewsletter(){
    cy.get(elHomepage.btnOkNewsletter).click({force: true }) 

  }

  checkSucessfulNewsletter(){
    cy.get(elHomepage.msgSucessfulNewsletter).should('exist')
  }

  btnCloseCookie(){
    cy.get(elHomepage.btnCloseCookieInfo, {timeout: 20000}).click({force: true})
  }

  logoLifeLink(){
    cy.get(elHomepage.logoLife).click({force:true})
  }
  logoVivaraLink(){
    cy.get(elHomepage.logoVivara).click()
  }
  validateFooter(){
    if (Cypress.env('Device') === 'desktop') {
      cy.get(elHomepage.footerDesk).should('be.visible')
    } else {
      cy.get(elHomepage.footerMobile).should('be.visible')
    }
  }
    
  
  changeCEP(cep){
   cy.get(elHomepage.fieldModalRegion).type(cep)
   cy.get(elHomepage.btnOKModalRegion).click()
  }
  
  validateRegionMyLocatinon(){
    cy.get(elHomepage.myLocationRegion).should('be.visible')  
      .realClick('Allow', { delay: 100 },{position:'center'})
   
    
  }
  ValidateMenuCategory(){
    cy.get(elHomepage.jeweleryCategory).click
    cy.get(elHomepage.seeAllJeweleryCategory).click()
  }

  validateInavalidPostal(){
    cy.get(elHomepage.msgInvalidCEP).should('be.visible')
  }

  
}
export default new HomePage()
