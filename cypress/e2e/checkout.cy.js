/// <reference types="cypress" />

import { GlobalPage } from "../pages/global.page";
const pageObj = new GlobalPage();

describe('To test checkout page functionality', () => {

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
    })

    afterEach(() => {
        pageObj.userLogOut();
    })

    it('Verify behaviour when user added checkout information & click on continue button', () => {
        pageObj.checkoutPageObj.enterFirstName(pageObj.data.fName);
        pageObj.checkoutPageObj.enterUserLastName(pageObj.data.lName);
        pageObj.checkoutPageObj.enterUserPostalCode(pageObj.data.postalCode);
        pageObj.checkoutPageObj.clickContinueBtn();
        pageObj.checkoutOverviewPageObj.checkoutOverviewPageTitleVisible(pageObj.data.checkoutOverviewPageTitle);
        pageObj.checkoutOverviewPageObj.paymentInformationVisible();

    });

    it('Verify cancels button behaviour when user click on cancel button', () => {
        pageObj.checkoutPageObj.clickCancelBtn();
        pageObj.cartPageObj.cartPageTitleVisible(pageObj.data.cartPageTitle);
        pageObj.cartPageObj.prodNameVisible(pageObj.data.prodName);
    });

});