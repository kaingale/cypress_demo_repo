export class ProductPage {

    locator = {
        pageTitle: '[data-test="title"]',
        addToCartBtnOfProd: '[data-test="add-to-cart-sauce-labs-backpack"]',
        shoppingCartIcon: '[data-test="shopping-cart-link"]'
    }

    productPageTitleVisible(pageTitle) {
        cy.verifyText(this.locator.pageTitle, pageTitle);
    }

    clickAddToCartBtnOfProd() {
        cy.clickOnBtn(this.locator.addToCartBtnOfProd);
    }

    shoppingCartIconContainsProdQty(prodQty) {
        cy.containsText(this.locator.shoppingCartIcon, prodQty);
    }

    clickShoppingCartIcon() {
        cy.clickOnBtn(this.locator.shoppingCartIcon);
    }

}

