const { defineConfig } = require('cypress');
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');
const fs = require('fs');
const path = require('path');

// Definindo o caminho para as pastas de vídeo e screenshots
const videosDir = path.join(__dirname, 'cypress', 'videos');
const screenshotsDir = path.join(__dirname, 'cypress', 'screenshots');

// Garantir que as pastas existam ou sejam criadas
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  video: true, // Garante que o vídeo seja gravado em falhas
  videoCompression: false,
  videoUploadOnPasses: false, // Não enviar vídeos de testes bem-sucedidos
  screenshotOnRunFailure: true, // Garante que screenshots sejam tiradas em falhas
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
      require('./cypress/plugins/index.js')(on, config);
      cypressBrowserPermissionsPlugin(on, config);

      // Forçar a criação de vídeos e screenshots de falhas
      on('after:run', (results) => {
        if (results.totalFailed > 0) {
          console.log(`Foram encontrados ${results.totalFailed} falhas, vídeos e screenshots devem ser gerados.`);
        }
      });

      return config;
    },
    specPattern: '**/*.{feature,features}',
    baseUrl: 'https://www.vivara.com.br/',
  },
  env: {
    'browserPermissions': {
      notifications: "allow",
      geolocation: "allow",
    },
  },
});