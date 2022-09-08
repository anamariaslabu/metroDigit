const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '245k8c',
  chromeWebSecurity: false,
  chromeSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  animationDistanceThreshold: 1,
  
  e2e: {
    // setupNodeEvents(on, config) {
      // implement node event listeners here
    // },
    baseUrl: 'https://emag.ro/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  },
});
