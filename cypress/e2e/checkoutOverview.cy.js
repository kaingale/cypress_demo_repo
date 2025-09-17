/// <reference types="cypress" />

import { GlobalPage } from "../pages/global.page";
const pageObj = new GlobalPage();

describe('To test checkout overview functionality', () => {

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
    })

    afterEach(() => {
        pageObj.userLogOut();
    })
    
    it('Verify cancel button behaviour when user click on cancel button', () => {
        pageObj.checkoutOverviewPageObj.clickCancelBtn();
        pageObj.productPageObj.productPageTitleVisible(pageObj.data.productPageTitle);
    });

    it('Verify finish button behaviour when user click on finish button', () => {
        pageObj.checkoutOverviewPageObj.clickFinishBtn();
        pageObj.checkoutCompletePageObj.checkoutCompletePageTitleVisible(pageObj.data.checkoutCmpletePageTitle);
        pageObj.checkoutCompletePageObj.thankUMsgVisible(pageObj.data.ThankUMsg);
        pageObj.checkoutCompletePageObj.orderDispatchMsgVisible(pageObj.data.orderDispatchMsg)
    });

});