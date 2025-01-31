export const ELEMENTS = {
  HEADER: {
    SEARCH: {
      inputSearchBar: `#downshift-0-input`,
      inputSearchBarMobile: '#downshift-1-input',
      openinputSearchBarMobile: '#downshift-1-input',
      btnLoggedUserMobile:
      '.menu-mobile-login > .user',
      btnNotLoggedUserMobile:
      '.menu-mobile-login > h2'
    },

    MODAL_LOGIN: {
      EMAIL_PASSWORD: {
        inputEmail: 'div.vtex-login-2-x-inputContainerEmail input',
        inputPassword: 'div.vtex-login-2-x-inputContainerPassword input',
        btnEnter: 'div.vtex-login-2-x-sendButton button[type=submit]',
        msgInvalidLogin: '.vtex-login-2-x-formError',
        recoveryPassword:
          'div.vtex-login-2-x-emailAndPasswordForm a.vtex-login-2-x-forgotPasswordLink',
        btnExit:
         '.vtex-my-account-1-x-menuLink',
        btnOptionExit:
          '.bg-action-primary > .vtex-button__label',
      },

      // LOGGED_USER: {
      //   btnExit: '.vtex-my-account-1-x-menuLink',
      //   btnOptionExit: '.styles_modal__gNwvD > .ph6lo',
      // },

      RECOVERY_PASSWORD: {
        btnExit: '.vtex-my-account-1-x-menuLink',
        btnOptionExit: '.styles_modal__gNwvD > .ph6lo',
        inputEmail: 'div.vtex-login-2-x-emailVerification input[name=email]',
        btnSend:
          'div.vtex-login-2-x-emailVerification div.vtex-login-2-x-formFooter div[class*=sendButton] button[type=submit]',
        inputNewPassword:
          'div.vtex-login-2-x-inputContainerPassword div.relative input[type=password]',
        inputConfirmNewPassword:
          'div.vtex-login-2-x-inputContainerPassword > label input[type=password]',
        btnCreate: 'div.vtex-login-2-x-sendButton button',
      },

      login: 'div.absolute div.vtex-login-2-x-box',
      btnLoginWithEmailPassword:
        'div.absolute div.vtex-login-2-x-box div.vtex-login-2-x-emailPasswordOptionBtn',
        btnLoginWithEmailPasswordmobile:
        ':nth-child(2) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label',
    },

    btnLogin:
      '.vtex-login-2-x-label',
    btnLoginMobile:
      '.paguemenos-store-theme-2-x-loginSpan',
    btnLoggedUser: '.user',
    btnNotLoggedUser: '[data-login-wrapper="true"] > [data-testid="store-link"] > span',
    headerEluxCOLogo: `.vtex-store-components-3-x-logoLink`,
    headerEluxCOLogoMobile: '.vtex-store-components-3-x-logoLink',
    linkmobilenivel1: ':nth-child(4) > .flex-none > .pr0-ns > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer > .vtex-menu-2-x-menuItem > .vtex-menu-2-x-menuItemInnerDiv > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent',

  },

  PROMO_MODAL : {
    btnCloseModal: '.trackfield-store-components-0-x-cookies-disclaimer__button'
  },

  itemFooter: (itemFooterText) => `//a[normalize-space()='${itemFooterText}']`,
  menuCategories: '.header-content-wrapper > nav',
  menuCategoriesMobile:
   '.drawer-menu-container>.btn-drawer-menu',
  menuCategoriesMan:
  ':nth-child(5) > .menu-item-container > .menu-item',
  menuAneisMan:
  '[href="/para-eles/joias/aneis"] > p',
  itemCategoryMenu: 
    `#menu-item-category-ofertas`,
  itemCategoryMenumobile: 
  `:nth-child(2) > .title-subsection__first-layer-vivara`,
  itemHeaderMenu:
    `#menu-item-category-manipulacao`,

  btnModalRegion:
    '[data-region-wrapper="true"] > span',

  btnOKModalRegion:
  '.region-modal__btn',

  modalRegionApplied:
  '[data-region-wrapper="true"] > span',

  modalRegion:
    '.region-modal__form',

  fieldModalRegion:
  '.region-modal__input',

  newsletter:
    '#newsletter-input',
  btnOkNewsletter:
    '.vtex-store-components-3-x-buttonContainer > .vtex-button > .vtex-button__label',
  msgSucessfulNewsletter:
  '.vtex-store-components-3-x-confirmationText',
  btnCloseCookieInfo:
  '#onetrust-close-btn-container > .onetrust-close-btn-handler',
  logoVivara:
  '.logoTop > [data-testid="store-link"]',
  logoLife:
  '.bgLogo > [data-testid="store-link"]',
  footerDesk:
  '.menu > .footer-upper-container',
  myLocationRegion:
'[data-testid="store-button"] > p',
  footerMobile:
  '.upper-footer-mobile > :nth-child(1) > :nth-child(3)',
   seeAllJeweleryCategory:
  ':nth-child(2) > :nth-child(1) > [href="/vivara/joias"]',
  msgInvalidCEP:
  '.region-modal__cep-invalid'
}
