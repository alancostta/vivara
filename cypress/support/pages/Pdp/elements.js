export const ELEMENTS = {
  btnAddToCart: '.product-details__buttons > [data-testid="buy-button"]',
  btnAddToCartMobile:
    '[data-testid="buy-button"]',
  btnCalcShipping:
  '.shipping-simulator__button',
  viuTambem:
  '.vtex-flex-layout-0-x-flexRow--recommendation-title-shelf-desk > .mt0 > .pr0 > .vtex-rich-text-0-x-container',
  cbState: 'select[name=state]',
  zipCodeField: '.shipping-simulator__input',
  cbneighborhood: 'select[name=neighborhood]',
  productPrice:'.product-details__values > .product-details__prices',
  productPriceMobile: ':nth-child(1) > .vtex-flex-layout-0-x-flexRow > .flex-ns > :nth-child(1)',
  productImage: 'img[data-vtex-preload=true]',
  tableShippingData: '.shipping-simulator__response-container > :nth-child(1)',
  tableShippingDataUnavailable: '.vtex-input__error',
  modalRegion:
    '.close-icon-modal',
  selectorPlusBtn:
   '[aria-label="Increment Quantity"] > [data-testid="store-icon"]',
 selectorNumericField:
 '[data-testid="store-quantity-selector"] > [data-testid="store-input"]',
   reviewBtn:
  '.yourviews-yourviewsreviews-0-x-reviewsWriteReviewButton > .vtex-button > .vtex-button__label',
    reviewPage:
  '.yv-frm-rating > .yv-control-label',
  btnVerCesta:
  '.nt4 > .vtex-button > .vtex-button__label',
  minicartBtn:
  '[data-testid="cart-toggle"]',
  plusBtnMinicart:
  '[data-cart-quantity="true"] > [data-testid="store-quantity-selector"] >[aria-label="Increment Quantity"]',
  subBtnMinicart:
  '[data-cart-quantity="true"] > [data-testid="store-quantity-selector"] >[aria-label="Decrement Quantity"]',
  inputMinicartField1:
   '[data-cart-quantity="true"] > [data-testid="store-quantity-selector"] > [data-testid="store-input"]',
  inputMinicartField2:
  '[data-testid="store-modal"] > :nth-child(2) > :nth-child(4)',
  minicartTitle:
  '.vtex-rich-text-0-x-wrapper > .lh-copy',
  subtotalFieldMinicart:
  'footer > [data-testid="store-list"]',
  minicartEmpty:
  '.lh-copy > .b',
  trashBtn:
  ':nth-child(3) > [data-testid="cart-item"] > [data-testid="store-card-actions"] > [data-cart-item-summary="true"] > [data-testid="remove-from-cart-button"]',
  minicartEmpty:
  '[data-empty-cart-title="true"] > p',
  closeMinicart:
  '[data-testid="cart-sidebar-button-close"]',
  carousel:
  '.shelf-container > .slick-slider > .slick-list > .slick-track > [data-index="1"] > :nth-child(1)',
  carouselProduct:
  '.shelf-product-card-pdp__cost> [data-testid="buy-button"]',
  fotter:
  '.footer-bottom__social > :nth-child(1)',
  btnMinicartToCart:
  '.checkout-button >.button',
  carouselProductMobile:
  ':nth-child(n) > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(n) > .shelf-product-card-pdp > :nth-child(n) > .gatsby-image-wrapper > [sizes="(max-width: 768px) 25vw, 30vw"]',
  promotionMinicart:
  '.cart__promotion-bar > .promotion__bar-wrapper > .promotion__bar-container',
  shippingInvalid:
  '.shipping-simulator__cep-invalid'
}
