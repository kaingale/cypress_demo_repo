// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('typeText', (locator, value) => {
    cy.get(locator).type(value);
});

Cypress.Commands.add('clickOnBtn', (locator) => {
    cy.get(locator).click();
});

Cypress.Commands.add('verifyText', (locator, expText) => {
    cy.get(locator, {timeout:30000}).invoke('text').then((actText) => {
        const trimmedText = actText.trim();
        expect(trimmedText).to.equal(expText);
    });
});

Cypress.Commands.add('containsText', (locator, value) => {
    cy.get(locator).contains(value).should('be.visible');
});

Cypress.Commands.add('elementNotExist', (locator) => {
    cy.get(locator).should('not.exist');
});

Cypress.Commands.add('elementVisible', (locator) => {
    cy.get(locator).should('be.visible');
});

