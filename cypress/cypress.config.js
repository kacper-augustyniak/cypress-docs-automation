const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://docs.cypress.io/guides/',
    defaultCommandTimeout: 1000,
    pageLoadTimeout: 1000,

    screenshotsFolder: '~/Desktop/scrn-cypress',

    viewportHight: 1000,
    vieportWidth: 720
  },
})