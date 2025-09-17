const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    chromeWebSecurity: false,
  },
  env: {
    baseUrl: 'https://www.saucedemo.com/',
    testDataFile:'testData',
    allure: true,
    // optionally:
    allureResultsPath: 'allure-results',
  },
  video: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 10000,
  retries: 2,
});
