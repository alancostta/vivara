export const ELEMENTS = {
  btnselectOrderBy: 'span.vtex-search-result-3-x-filterPopupTitle',
  //btnSelectOptionOrderBy:'//button[text()="Precios más alto"]',
  productCard: '.vtex-product-summary-2-x-imageNormal',
  btnFilterMobile:
    '.product-listing__sort > :nth-child(1)',
  btnApplyMobile: `.vtex-search-result-3-x-filterApplyButtonWrapper > .vtex-button > .vtex-button__label`,
  
  OrderBySelector:
    '.mobile-sort > [data-testid="open-filter-button"]',

  btnSelectOptionOrderBy: (optionOrderBy) =>
    `//button[text()='${optionOrderBy}']`,
  checkFilterOrderBy: (optionFilterBy) => `//input[@value='${optionFilterBy}']`,
  btnFilterSubCategoryMobile: () => `//span[text()='Color']`,
  orderByBtn:
  '[data-testid="search-sort"]',
  btnCarregarMaisProdutos:
  '[data-testid="show-more"]',
  confirmFilterBtn:
  ':nth-child(3) > [data-testid="desktop-desktop-store-filter-accordion-panel"] > .filter-header-container > .filter-header > .filter-header__controls > :nth-child(1)',
  confirmFilterBtnMobile:
  ':nth-child(3) > [data-testid="mobile-mobile-store-filter-accordion-panel"] > .filter-header-container > .filter-header > .filter-header__controls > :nth-child(1)',
  clearFilterBtn:
  ':nth-child(3) > [data-testid="desktop-desktop-store-filter-accordion-panel"] > .filter-header-container > .filter-header > .filter-header__controls > :nth-child(2)',
  clearFilterBtnMobile:
  ':nth-child(3) > [data-testid="mobile-mobile-store-filter-accordion-panel"] > [data-testid="store-list"] > :nth-child(3)',
  filterElement:
  ':nth-child(3) > [data-testid="desktop-desktop-store-filter-accordion-panel"] > [data-testid="store-list"] > :nth-child(3) > [data-testid="desktop-desktop-store-filter-accordion-panel-checkbox"]',
  filterMenu:
  ':nth-child(3) > [data-testid="desktop-desktop-store-filter-accordion-button"]',
  filterMenuMobile:
  '.filter-modal__body',
  filterElementMobile:
  ':nth-child(3) > [data-testid="mobile-mobile-store-filter-accordion-panel"] > [data-testid="store-list"] > :nth-child(3) > [data-testid="mobile-mobile-store-filter-accordion-panel-checkbox"]',
  cardValue:
  '.shelf-product-card-listing > .shelf-product-card-listing__content > .shelf-product-card-listing__cost',
  buyBtnCard:
  '[data-testid="buy-button"]',
  minicart:
  '[data-testid="store-modal"]',
}
