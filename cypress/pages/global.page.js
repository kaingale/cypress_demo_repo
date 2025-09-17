import { LogInPage } from "./login.page";
import { ProductPage } from "./product.page";
import { CartPage } from "./cart.page";
import { CheckoutPage } from "./checkout.page";
import { CheckoutOverviewPage } from "./checkoutOverview.page";
import { CheckoutCompletePage } from "./checkoutComplete.page";

export class GlobalPage {

    logInObj = new LogInPage();
    productPageObj = new ProductPage();
    cartPageObj = new CartPage();
    checkoutPageObj = new CheckoutPage();
    checkoutOverviewPageObj = new CheckoutOverviewPage();
    checkoutCompletePageObj = new CheckoutCompletePage();

     locator = {
        menuBar: '.bm-burger-button',
        logOutLink: '[data-test="logout-sidebar-link"]',
    }

    data = '';

    readTestData() {
        console.log('test file----' + Cypress.env('testDataFile'));
        cy.fixture(Cypress.env('testDataFile')).then((file) => {
            this.data = file;
        })
    }

    visitApplication() {
        cy.visit(Cypress.env("baseUrl"));
    }

    userLogOut() {
        cy.clickOnBtn(this.locator.menuBar);
        cy.clickOnBtn(this.locator.logOutLink);
    }
}