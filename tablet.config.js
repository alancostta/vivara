//NENHUM ARQUIVO AQUI SERÁ RODADO
// const { defineConfig } = require('cypress')
// const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');

// module.exports = defineConfig({
//   viewportWidth: 768,
//   viewportHeight: 1024,
//   chromeWebSecurity: false,
//   video: true,
//   videoCompression: false,
//   videoUploadOnPasses: true,
//   defaultCommandTimeout: 30000,
//   pageLoadTimeout: 180000,
//   requestTimeout: 15000,
//   retries: {
//     runMode: 1,
//     openMode: 1,
//   },
//   e2e: {
//     chromeWebSecurity: false,
//     modifyObstructiveCode: false,
//     testIsolation: false,
//     setupNodeEvents(on, config) {
//       require('./cypress/plugins/index.js')(on, config);
//       cypressBrowserPermissionsPlugin(on, config);
//       return config;
//     },      
//     specPattern: '**/*.{feature,features}',
//     baseUrl: 'https://www.vivara.com.br/',
//   },
//   env: {
//     "Device":"tablet",
//     "TAGS":"Tablet",
//     'browserPermissions': {
//       notifications: "allow",
//       geolocation: "allow",
//     }
    
//   },
// })
