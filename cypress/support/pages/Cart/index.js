/// <reference types="Cypress" />

const elCartPage = require('./elements').ELEMENTS

class CartPage {
  accessCartPage(page) {
    cy.visit(page)
    
  }

  accessCartPageWithProduct1(salesChannel, SKUIDProduct1, quantity) {
    cy.visit(
      '/checkout/cart/add?sc='+
        salesChannel+
        '&sku=' +
        SKUIDProduct1 +
        '&qty=' +
        quantity +
        '&seller=1'
    )
  }

  accessCartPageWithProduct2(salesChannel, SKUIDProduct2, quantity) {
    cy.visit(
      '/checkout/cart/add?sc='+
        salesChannel+
        '&sku=' +
        SKUIDProduct2 +
        '&qty=' +
        quantity +
        '&seller=1'
    )
  }

  accessCartPageWithProducts1and2(salesChannel, SKUIDProduct1, SKUIDProduct2, quantity) {
    cy.visit(
      '/checkout/cart/add?sc='+
        salesChannel+
        '&sku=' +
        SKUIDProduct1 +
        '&qty=' +
        quantity +
        '&seller=1&sku=' +
        SKUIDProduct2 +
        '&qty=' +
        quantity +
        '&seller=1'
    )
  }

  clickBtnCalculateShipping() {
    
    cy.get(elCartPage.btnCalculateShipping)
      //.should('be.enabled')
      .click({ force: true })
  }

  selectCmbState(state) {
    cy.get(elCartPage.cmbShipState).should('be.enabled').select(state)
  }

  selectCmbCity(city) {
    
    cy.get(elCartPage.cmbShipCity).should('be.enabled').select(city)
  }

  validateLblShippingCost(status) {
    switch (status) {
      case 'calculated':
        cy.get(elCartPage.lblShippingCost).should('be.visible')
        break
      case 'not calculated':
        cy.get(elCartPage.lblShippingCost).should('not.be.visible')
        break
    }
  }

  clickBtnCartToOrderForm() {
    cy.get(elCartPage.btnCartToOrderForm).should('exist').click({ force: true })
    
  }

  validateFnImgProduct1(status) {
    
    cy.get(elCartPage.loading).should('not.be.visible')
  switch (status) {
    case 'visible':
      cy.get(elCartPage.elCartFull).should('be.visible')
      cy.get(`#product-image-${sku}`).should('exist')
      break
    case 'not visible':
      cy.get(elCartPage.elCartFull).should('not.be.visible')
      cy.get(`#product-image-${sku}`).should('not.exist')
      break
  }
}

  validateFnImgProduct2(product2, status) {
    
    cy.get(elCartPage.loading).should('not.be.visible')
    switch (status) {
      case 'visible':
        cy.get(elCartPage.elCartFull).should('be.visible')
        cy.get(elCartPage.fnImgProduct(product2)).should('be.visible')
        break
      case 'not visible':
        cy.get(elCartPage.elCartFull).should('not.be.visible')
        cy.get(elCartPage.fnImgProduct(product2)).should('not.exist')
        break
    }
  }

  validateCartEmpty() {
    cy.get(elCartPage.elCartEmpty).should('be.visible')
  }

  clickFnItemRemove(skuid1) {
    
    cy.get(elCartPage.xpFnItemRemoveProduct1(skuid1), {timeout:30000}).should('exist')
      .should('be.visible')
      .click({force:true})
    
  }

  clickClearCart(skuid1, skuid2) {
   
    cy.get(elCartPage.loading).should('exist')
    cy.get(elCartPage.xpFnItemRemoveProduct1(skuid1)).should('exist')
      .should('be.visible')
      .click({force : true})
  
    // cy.get(elCartPage.loading).should('not.be.visible')
    // cy.get(elCartPage.xpFnItemRemoveProduct2(skuid2)).should('exist')
    // cy.get(elCartPage.xpFnItemRemoveProduct2(skuid2))
    //   .should('be.visible')
    //   .click({force : true})
    // cy.get(elCartPage.loading).should('not.be.visible')
  }

  clickXpFnIncrementQuantity(product1, quantity) {
  
    cy.get(elCartPage.xpFnItemQuantity(product1))
      .invoke('val')
      .then(($value) => {
        let index = quantity - $value
        for (let n = 0; n < index; n++) {
       
          cy.get(elCartPage.xpFnIncrementQuantity(product1))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  clickXpFnDecrementQuantity(product1, quantity) {
  
    cy.get(elCartPage.xpFnItemQuantity(product1))
      .invoke('val')
      .then(($value) => {
        let index = quantity - $value
        for (let n = 0; n > index; n--) {
      
          cy.get(elCartPage.xpFnDecrementQuantity(product1))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  validateXpFnItemQuantity(product1, quantity) {
    cy.get(elCartPage.xpFnItemQuantity(product1))
      .invoke('val')
      .should('eq', quantity)
  }

  typeInputCartCoupon(invalidCoupon) {
  
    cy.get(elCartPage.inputCoupon, { timeout: 50 * 1000 })
      .should('be.visible')
      .type(invalidCoupon, {force : true})
    
  }

  typeZipCode(zipCode) {
   
    cy.get(elCartPage.btnCalculateShipping).should('be.visible').click()
    cy.get(elCartPage.inputZipCode).should('be.visible').type(zipCode, {force : true})
    //cy.get(elCartPage.inputZipCode).tab()

    
  }

  clickBtnCartCoupon() {
    cy.get(elCartPage.btnCoupon).should('be.visible').click({ force: true })
  }

  clickBtnbtnCalculateShipping() {
    cy.get(elCartPage.btnOKCalculateShipping).should('be.visible').click({ force: true })
  }


  validateMsgCartInvalidDiscountCoupon(coupon) {
    
    cy.get(elCartPage.msgInvalidDiscountCoupon, {
      timeout: 10 * 1000,
    }).should('have.text', `Cupón ${coupon} inválido`)
  }

  validateEmpytInputCartCoupon() {
    cy.get(elCartPage.inputCoupon).should('be.empty')
  }

  validateShippingAvailable() {
    cy.get(elCartPage.lblShippingAvailable).should('be.visible')
  }

  validateShippingUnavailable() {
    cy.get(elCartPage.lblShippingUnavailable).should('be.visible')
  }

  validateCartShare(){
    cy.get(elCartPage.btnCompartilharCarrinho).should('be.visible').click({force: true})
  }
  cartSharemessage(){
    cy.get(elCartPage.compartilarCarrinhoMessage).should('be.visible')
  }
  
  validateSubtotalField(){
    cy.get(elCartPage.subtotalField).should('be.visible')
  }

  validateEscolherMaisProdutos(){
    cy.get(elCartPage.linkEscolherMaisProdutos).click({ force : true})
  }

  validateReceberBtn(){
    cy.get(elCartPage.btnCalculateShipping).click({force:true})
    cy.get(elCartPage.CEPReceberBtn).click({force:true})
    cy.get(elCartPage.inputZipCode).type('40255040')
  
  }
  validateRetirarBtn(){
    cy.get(elCartPage.btnCalculateShipping).click({force:true})
    cy.get(elCartPage.CEPReceberBtn).click({force:true})
    cy.get(elCartPage.inputZipCode).type('40255040')
    cy.get(elCartPage.CEPRetirarBtn).click({force:true})
  }

  assertReceber(){
    cy.get(elCartPage.CEPTable).should('be.visible')
  }

  assertRetirar(){
    cy.get(elCartPage.retiradaInfo).should('be.visible')
  }
  
  assertEscolherMaisProdutos(){
    cy.get(elCartPage.bannerHome).should('be.visible')
  }

  removeProduct(){
    cy.get(elCartPage.removeBtn).click({force:true})
  }

  plusBtn(){
    cy.get(elCartPage.plusBtn).should('exist')
    .click({force:true})
  }

  reduceAmount1(){
    cy.get(elCartPage.minusBtn1).should('not.be.disabled')
    .click({force: true})
  }

  reduceAmount(){
    cy.get(elCartPage.minusBtn).click({force: true})
  }

  validateProductQauntity(quantity){
    cy.get(elCartPage.quantityIten1)
      .invoke('val')
      .should('eq', quantity, { timeout: 60000 })
  }

  validateReduceAmount(qntd){
    cy.wait(1500)
    cy.get(elCartPage.quantityIten1)
      .invoke('val')
      .should('eq', qntd, { timeout: 60000 })
  }

  validateRemoveProduct(){
    cy.get(elCartPage.quantityIten2).should('not.exist')
  }

 SelectForGift(){
    cy.get(elCartPage.giftSelector).click({force: true})
  }
  
  selectedForGift(){
    cy.get(elCartPage.giftSelector).should('have.css', 'background-color','rgb(255, 166, 135)')
    cy.get(elCartPage.giftSelector).click({force: true})
  }

  nossasCertificacoesClick(){
    cy.get(elCartPage.NossasCertificacoesLink).click({force:true})
  }

  validateGoesToNossasCertificacoes(){
    cy.url().should('contain','institucional/sustentabilidade-planeta')
    
  }

  sellerCoupon(code){
    cy.get(elCartPage.sellerCode).type(code)
    cy.get(elCartPage.btnAddSellerCode).click()
  }

  discountCoupon(code){
    cy.wait(4000)
    cy.get(elCartPage.discountField,{timeout:15000}).type(code)
    cy.get(elCartPage.btnAddCouponCode).click()
  }

  CodeActived(val){
    switch (val) {
      case "Seller":
        cy.get(elCartPage.sellerCodeSucess).should('contain.text','Código adicionado com sucesso!')
        break;
      case "Coupon":
        cy.get(elCartPage.couponCode).should('contain.text','felicidade')
        cy.wait(2000)
        cy.get(elCartPage.removeCoupon).click({force:true})
        cy.wait(3000)
    }
    cy.get(elCartPage.sellerCodeSucess).should('contain.text','Código adicionado com sucesso!')
  }
}
export default new CartPage()
