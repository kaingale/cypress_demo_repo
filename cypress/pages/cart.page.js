export class CartPage {

    locator = {
        pageTitle: '[data-test="title"]',
        prodName: '[data-test="inventory-item-name"]',
        removeBtn: '[data-test="remove-sauce-labs-backpack"]',
        checkoutBtn: '[data-test="checkout"]'
    }

    cartPageTitleVisible(pageTitle) {
        cy.verifyText(this.locator.pageTitle, pageTitle);
    }

    prodNameVisible(prodName) {
        cy.verifyText(this.locator.prodName, prodName);
    }

    prodNotDisplayed() {
        cy.elementNotExist(this.locator.prodName);
    }

    clickRemoveBtn() {
        cy.clickOnBtn(this.locator.removeBtn);
    }

    clickCheckoutBtn() {
        cy.clickOnBtn(this.locator.checkoutBtn);
    }
}