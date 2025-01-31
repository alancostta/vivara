export const ELEMENTS = {
  CLIENT_PROFILE_DATA: {
    inputClientPreEmail: '#client-pre-email',
    btnClientPreEmail: '#btn-client-pre-email',
    inputClientEmail: '#client-email',
    inputFirstName: '#client-first-name',
    inputLastName: '#client-last-name',
    inputDocument: '#client-document',
    inputRG:'#client-rg',
    inputAreaCodePhone: '[data-bind="visible: !hasDifferentPhone()"] > .input > #client-phone1',
    inputPhone: '#client-phone',
    chkTermsAndConditions: '#acepto-terminos-y-condiciones',
    btnGoToShipping: 'button#go-to-shipping',
    moreThan12YearsCheckbox:'#declare-over-12-years-old',
    editBtnProfile:'.accordion-toggle > .link-box-edit > .icon-edit',
    modalValidateID:'.vtexIdUI',
    closeModalValidateID:'#vtexIdUI-auth-selector > .modal-header > .close'
  },

  SHIPPING_DATA: {
    cbmState: 'select#ship-state',
    cbmCity: 'select#ship-city',
    cmbAddressType: 'select#streetTypeSelector',
    zipCode: '.form-postalCode-custom > #ship-postalCode',
    btnOKZipCode: '.button-postalCode-custom',
    inputCustomStreet: 'input#ship-street',
    inputCustomNumber: 'input#ship-number',
    inputCustomStreetNumber: 'input#customStreetNumber',
    inputCustomStreetComplement: 'input#customStreetComplement',
    inputComplement: 'input#ship-complement',
    inputNeighborhood: 'input#ship-neighborhood',
    inputFullName: 'input#ship-receiverName',
    btnGoToPayment: '#btn-go-to-payment',
    titleShippingData: '#shipping-data > .step > .accordion-heading > .accordion-toggle',
    editAdressBTN:'#edit-address-button',
    withdrawBtn: '.srp-toggle__pickup',
    withdrawaloptions : '#find-pickup-link',
    deliveryway:'#find-pickup-link',
    deliveryMethod:'.srp-toggle__wrapper',
    modalpickupcloseButton:'.vtex-pickup-points-modal-3-x-closeButton'
  },

  PAYMENT: {
    selectCreditCard: 'a#payment-group-creditCardPaymentGroup',
    selectMercadoPago: 'a#payment-group-MercadoPagoPaymentGroup',
    BANK: {
      bankInvoiceEfecty: 'label.bank-invoice-item-efecty',
    },
    btnBuyNow: '[data-bind="fadeVisible: !window.router.sac.isActive() && window.paymentData.isPaymentButtonVisible(), click: submit, disable: window.checkout.disablePaymentButton"] > span',
    iframeCreditCard: '#iframe-placeholder-creditCardPaymentGroup > iframe',
    fieldCardNumber:
      '.iframe-credit-card-payment-group div .CardForm div.PaymentCardNumber #creditCardpayment-card-0Number',
    pixPayment:'#payment-group-instantPaymentPaymentGroup > .payment-group-item-text',
    buyBtn:'[data-bind="fadeVisible: !window.router.sac.isActive() && window.paymentData.isPaymentButtonVisible(), click: submit, disable: window.checkout.disablePaymentButton"] > span',
    },
  ALERT: {
    firstNameAlert: 'p.client-first-name.input.pull-left.text.required> .help',
    lastNameAlert: 'p.client-last-name.input.pull-left.text.required > .help',
    RGAlert:'input#client-rg.input-small.error',
    phoneAlert: 'input#client-phone.input-small.error',
    documentAlert: 'input#client-document.input-small.error',
    changeShippingData: '.unavailable-actions > [autofocus=""]',
    pixModal:'.VTEX-PIX__pix-logo-container'
  },
  shippingPrice:
  '.promotion-bar__message-text',
  backToTheCart:
  '#orderform-minicart-to-cart',
  emailPopUp:
  '.identified-user-modal > .modal-body',
  confirmEmailAcessPopUp:
  '#btn-identified-user-button'
}
