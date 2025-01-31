// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
//import percy implement with cypress
import '@percy/cypress';

// Import commands.js using ES2015 syntax:
import './commands'
//import 'cypress-real-events/support';

import '@shelex/cypress-allure-plugin'
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

require('cypress-xpath')



Cypress.on("before:scenario", (scenario) => {
  const isMobile = Cypress.config("viewportWidth") < 768;
  const deviceType = isMobile ? 'mobile' : 'desktop';
Cypress.env('deviceType', deviceType);

  const { tags } = scenario;

  if (tags && tags.includes("@Mobile") && !isMobile) {
    cy.log("Teste pulado - Somente para dispositivos móveis");
    Cypress.runner.stop();
  }

  if (tags && tags.includes("@@Desk") && isMobile) {
    cy.log("Teste pulado - Somente para desktop");
    Cypress.runner.stop();
  }

  Cypress.on('fail', (error, runnable) => {
    cy.screenshot(); // Captura um screenshot sempre que um erro ocorrer
    throw error; // Continua exibindo o erro para não interromper os testes
  });
  
  Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
      cy.log(`Screenshot salvo: ${screenshotFileName}`);
    }
  });



})
