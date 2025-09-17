export class CheckoutPage {

    locator = {
        pageTitle: '[data-test="title"]',
        cancelBtn: '[data-test="cancel"]',
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        postalCode: '[data-test="postalCode"]',
        continueBtn: '[data-test="continue"]'

    }

    checkoutPageTitleVisible(pageTitle) {
        cy.verifyText(this.locator.pageTitle, pageTitle);
    }

    enterFirstName(firstName) {
        cy.typeText(this.locator.firstName, firstName);
    }

    enterUserLastName(lastName) {
        cy.typeText(this.locator.lastName, lastName);
    }

    enterUserPostalCode(postalCode) {
        cy.typeText(this.locator.postalCode, postalCode);
    }

    clickCancelBtn() {
        cy.clickOnBtn(this.locator.cancelBtn);
    }

    clickContinueBtn() {
        cy.clickOnBtn(this.locator.continueBtn);
    }
}