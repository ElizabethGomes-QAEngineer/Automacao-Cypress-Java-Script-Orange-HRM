const { defineConfig } = require("cypress");

module.exports = defineConfig ({
    
  e2e: {
           setupNodeEvents(on, config) {},
    
    specPattern:  "../**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php'
  
    },

})