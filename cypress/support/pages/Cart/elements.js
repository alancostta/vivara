export const ELEMENTS = {
  btnCompartilharCarrinho:
  '#ButtonCopyCart',
  removeBtn: 
  '[id^="item-remove-"] > .icon',

  compartilarCarrinhoMessage:
  '.full-cart > .summary-template-holder > .row-fluid > .cart-more-options',
  linkEscolherMaisProdutos:
  '#cart-choose-more-products',
  subtotalField:
  '.accordion-inner > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(2)',
  CEPReceberBtn:
  '.srp-toggle__delivery',
  CEPTable:
  '.srp-delivery-select-container',
  CEPRetirarBtn:
  '.srp-toggle__pickup',
  plusBtn:
  '#item-quantity-change-increment-74098 > .icon',
  minusBtn:
  '#item-quantity-change-decrement-74098 > .icon',
  plusBtn1:
  '#item-quantity-change-increment-66005 > .icon',
  minusBtn1:
  '#item-quantity-change-decrement-66005 > .icon',
  quantityIten1:
  '#item-quantity-74098',
  quantityIten2:
  '#item-quantity-66005',
  retiradaInfo:
  '.srp-pickup-info',
  bannerHome:
  '.vtex-slider-layout-0-x-sliderLayoutContainer--banner-principal > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid=slider-track] > .vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-slider-layout-0-x-imageElementLink > .vtex-slider-layout-0-x-imageElement',
  NossasCertificacoesLink:
  '.sustainability-link',
  loading: 
  '.loading > .loading-img > .icon-spinner',
  btnCalculateShipping: 
  '.srp-data > #shipping-calculate-link',
  btnOKCalculateShipping:
  '#cart-shipping-calculate',
  sellerCode:
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .seller-code-fieldset > .seller-code-fields > span > #cart-seller-code',
  discountField:
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  btnAddSellerCode:
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .seller-code-fieldset > .seller-code-fields > span > #cart-seller-code-add',
  btnAddCouponCode:
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > [data-bind="fadeVisible: isUsingCoupon()"] > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add',
  sellerCodeSucess:
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .seller-code-fieldset > .cart-seller-code-success',
  couponCode:
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > .info > span',
  removeCoupon:
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > .info > .delete > #cart-coupon-remove',
  cmbShipState: 
  'select#ship-state',
  cmbShipCity: 
  'select#ship-city',
  giftSelector: 
  ':nth-child(3) > .item-attachments-item-fields > .item-attachment-name-embalagem > .item-attachment-name-label-checkbox > .item-attachment-name-label-checkbox-text',
  lblShippingCost:
  'label.srp-shipping-current-single',
  btnCartToOrderForm:
  '#cart-to-orderform',
  fnImgProduct: (skuid1) => `#product-image-${skuid1}`,
  fnImgProduct2: (skuid2) => `#product-image-${skuid2}`,
  elCartFull: 
  'div#cartLoadedDiv div.cart',
  elCartEmpty: 
  'div#cartLoadedDiv div.empty-cart-content',
  inputCoupon:
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  inputZipCode: 
  '#ship-postalCode',
  lblShippingUnavailable: 
  '.help',
  lblShippingAvailable:
  '.srp-result',
  btnCoupon: 
  '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add',
  msgInvalidDiscountCoupon: 
  '.vtex-front-messages-detail',
  carouselCart:
  'ins-web-smart-recommender-body-wrapper ins-responsive-mode-active',
  xpFnItemRemoveProduct1: (skuid) =>
    `#item-remove-${skuid} > .icon`,
  xpFnItemRemoveProduct2: (skuid) =>
    `#item-remove-${skuid} > .icon`,
  xpFnIncrementQuantity: (skuid) =>
  `#item-quantity-change-increment-${skuid}> .icon`,
  xpFnDecrementQuantity: (skuid) =>
    `#item-quantity-change-decrement-${skuid}> .icon`,
  xpFnItemQuantity: (skuid) =>
    `#item-quantity-${skuid}`
}