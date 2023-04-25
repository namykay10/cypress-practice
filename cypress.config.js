const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://computer-database.gatling.io/computers",
    "defaultCommandTimeout": 80000,
    "pageLoadTimeout": 50000,
    "requestTimeout": 10000,
    "viewportHeight": 800,
    "viewportWidth": 1500,
    "testFiles": "**/*.feature",
    //"ignoreTestFiles": ["**/*.js"],
    "supportFile": "cypress/support/index.js"
  },
    
   // setupNodeEvents(on, config) {
      // implement node event listeners here
    //},
 
});
