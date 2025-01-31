const { defineConfig } = require('cypress')
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');

module.exports = defineConfig({
  viewportWidth: 360,
  viewportHeight: 760,
  chromeWebSecurity: false,
  video: true,
  videoCompression: false,
  videoUploadOnPasses: true,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 180000,
  requestTimeout: 15000,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    testIsolation: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config),
      config = cypressBrowserPermissionsPlugin(on, config) 
    },      
    specPattern: '**/*.{feature,features}',
    baseUrl: 'https://www.vivara.com.br/',
  },
  env: {
    "Device":"mobile",
    "TAGS":"Mobile",
    'browserPermissions': {
      notifications: "allow",
      geolocation: "allow",
    }
    
  },
})
