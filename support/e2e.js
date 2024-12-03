import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // impede que o Cypress falhe o teste
});