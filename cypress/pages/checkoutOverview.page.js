export class CheckoutOverviewPage {

    locator = {
        pageTitle: '[data-test="title"]',
        paymentInfo: '[data-test="checkout-summary-container"] .summary_info',
        cancelBtn: '[data-test="cancel"]',
        finishBtn: '[data-test="finish"]'
    }

    checkoutOverviewPageTitleVisible(pageTitle) {
        cy.verifyText(this.locator.pageTitle, pageTitle);
    }

    paymentInformationVisible() {
        cy.elementVisible(this.locator.paymentInfo)
    }

    clickCancelBtn() {
        cy.clickOnBtn(this.locator.cancelBtn);
    }

    clickFinishBtn() {
        cy.clickOnBtn(this.locator.finishBtn);
    }

}