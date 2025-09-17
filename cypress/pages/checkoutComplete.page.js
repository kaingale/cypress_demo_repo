export class CheckoutCompletePage {

    locator = {
        pageTitle: '[data-test="title"]',
        ThankUOrder: '[data-test="complete-header"]',
        orderDispatch: '[data-test="complete-text"]',
        backToHomeBtn: '[data-test="back-to-products"]'
    }

    checkoutCompletePageTitleVisible(pageTitle) {
        cy.verifyText(this.locator.pageTitle, pageTitle);
    }

    thankUMsgVisible(message) {
        cy.verifyText(this.locator.ThankUOrder, message);
    }

    orderDispatchMsgVisible(message) {
        cy.verifyText(this.locator.orderDispatch, message);
    }

    clickBackToHomeBtn() {
        cy.clickOnBtn(this.locator.backToHomeBtn);
    }

}