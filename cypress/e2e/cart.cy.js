/// <reference types="cypress" />

import { GlobalPage } from "../pages/global.page";
const pageObj = new GlobalPage();

describe('To test cart page functionality', () => {

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
    })

    afterEach(() => {
        pageObj.userLogOut();
    })

    it('Verify checkout button behaviour when user click on checkout button', () => {
        pageObj.cartPageObj.clickCheckoutBtn();
        pageObj.checkoutPageObj.checkoutPageTitleVisible(pageObj.data.checkoutPageTitle);
    });

    it('Verify remove button behaviour when user click on remove button', () => {
        pageObj.cartPageObj.clickRemoveBtn();
        pageObj.cartPageObj.prodNotDisplayed();
    });

});