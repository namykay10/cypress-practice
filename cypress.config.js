const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 8000,
    "requestTimeout": 10000
  },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
 
});
