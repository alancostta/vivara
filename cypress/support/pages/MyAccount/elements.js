export const ELEMENTS = {
  lblEmail:
    '.paguemenos-store-theme-2-x-labelLinks',
  optProfile: ':nth-child(1) > .vtex-account_menu-link',
  optExit: 'div .vtex-my-account-1-x-menuLink',
  btnLogoutMobile:
    '.vtex-modal__confirmation > .bg-action-primary > .vtex-button__label',
  OrderBtn:
  ':nth-child(3) > .vtex-account_menu-link',
  editProfileBtn:
  '.vtex-button__label',
  wishlistBtn:
  '[href="#/wishlist"]',
  //Address
  btnAddNewAddress:
    '//div[@class="db-m dn"][not(contains(@style,"display:none"))]//a[(@href="#/addresses/new")]',
  btnEditAddress: '(//div[contains(@class,"vtex-button__label flex items-center justify-center h-100 ph5")][normalize-space()="Editar"])',
  labelEditAddress: '//span[@class="c-link pointer"]',
  btnSaveEditedAddress: 'body > div.render-container.render-route-store-account > div > div.vtex-store__template.bg-base > div > div:nth-child(5) > div > div > div > div > section > main > div > article > main > button > div',
  btnSaveNewAddress: '.ph7 > .vtex-button > .vtex-button__label',
  cbState: 'select[name=state]',
  zipCodeField: 'input[name=postalCode]',
  cbCity: 'select[name=city]',
  cbneighborhood: 'select[name=neighborhood]',
  inputStreet: 'input[name=street]',
  inputNumber: 'input[name=number]',
  inputComplement: 'input[name=complement]',
  inputnNeighborhood: 'input[name=neighborhood]',
  inputReceiverName: 'input[name=receiverName]',
  myAddressTable: 'div.vtex-my-account-1-x-addressBox',
  myAddressSavedStreet: ':nth-child(1) > .b--muted-4 > .ph7 > .lighter > .address-summary > :nth-child(1) > .street',
  myAddressSavedNumber: '.vtex-my-account-1-x-boxContainerBody span.number',
  myAddressSavedZipCode: '.vtex-my-account-1-x-boxContainerBody span.postalCode',
  myAddressSavedComplement:
    '.vtex-my-account-1-x-boxContainerBody span.complement',
  myAddressSavedCity: '.vtex-my-account-1-x-boxContainerBody span.city',
  myAddressSavedState: '.vtex-my-account-1-x-boxContainerBody span.state',
  myAddressSavedCountry: '.vtex-my-account-1-x-boxContainerBody span.country',

  //Personal Data
  editPersonalData: '//div[contains(text(),"Editar")]',
  inputName: 'input[name=firstName]',
  inputLastName: 'input[name=lastName]',
  inputDocument: '.vtex-styleguide-9-x-input',
  inputHomePhone: 'input[name=homePhone]',
  cbGender: '.o-0',
  inputBirthDate: 'input[name=birthDate]',
  btnSavePersonalData: '.vtex-profile-form-3-x-profileContainer > .pa0 > .vtex-button__label',
  //Personal Data Saved
  nameSaved: '.vtex-my-account-1-x-nameContainer > .flex-auto > .light',
  lastNameSaved: '.vtex-my-account-1-x-nameContainer > .w-50-ns > .light',
  documentSaved: '.flex > :nth-child(1) > .flex-ns > .mb8 > .light',
  genderSaved: '.vtex-my-account-1-x-genderContainer > .w-50-ns > .light',
  birthDate: '.vtex-my-account-1-x-phoneNumberContainer > .flex-auto > .light',
  homePhone: '.vtex-my-account-1-x-phoneNumberContainer > .w-50-ns > .light',
  //MyOrders
  myOrdersLabel: '.mw9 > :nth-child(2)',
  myOrdersLabelMobile: '.db-m > .vtex-pageHeader__container > .c-on-base > .vtex-pageHeader__title'
}
