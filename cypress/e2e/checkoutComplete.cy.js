/// <reference types="cypress" />

import { GlobalPage } from "../pages/global.page";
const pageObj = new GlobalPage();

describe('To test checkout complete page functionality', () => {

    before(() => {
        pageObj.readTestData();
    })

    beforeEach(() => {
        pageObj.visitApplication();
        pageObj.logInObj.enterUserName(pageObj.data.name);
        pageObj.logInObj.enterUserPassword(pageObj.data.password);
        pageObj.logInObj.clickLogInBtn();
        pageObj.productPageObj.clickAddToCartBtnOfProd();
        pageObj.productPageObj.clickShoppingCartIcon();
        pageObj.cartPageObj.clickCheckoutBtn();
        pageObj.checkoutPageObj.enterFirstName(pageObj.data.fName);
        pageObj.checkoutPageObj.enterUserLastName(pageObj.data.lName);
        pageObj.checkoutPageObj.enterUserPostalCode(pageObj.data.postalCode);
        pageObj.checkoutPageObj.clickContinueBtn();
        pageObj.checkoutOverviewPageObj.clickFinishBtn();
    })

    afterEach(() => {
        pageObj.userLogOut();
    })

    it('Verify back to home button behaviour when user click on back to home', () => {
        pageObj.checkoutCompletePageObj.clickBackToHomeBtn();
        pageObj.productPageObj.productPageTitleVisible(pageObj.data.productPageTitle);
    });
});