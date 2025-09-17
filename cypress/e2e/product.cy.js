/// <reference types="cypress" />

import { GlobalPage } from "../pages/global.page";
const pageObj = new GlobalPage();

describe('To test product page functionality', () => {

    before(() => {
        pageObj.readTestData();
    })

    beforeEach(() => {
        pageObj.visitApplication();
        pageObj.logInObj.enterUserName(pageObj.data.name);
        pageObj.logInObj.enterUserPassword(pageObj.data.password);
        pageObj.logInObj.clickLogInBtn();
    })

    afterEach(() => {
        pageObj.userLogOut();
    })

    it('Verify add to cart button behaviour when user click on add to cart button', () => {
        pageObj.productPageObj.clickAddToCartBtnOfProd();
        pageObj.productPageObj.shoppingCartIconContainsProdQty('1');
    })

    it('Verify shopping cart icon behaviour when user click on shopping cart icon', () => {
        pageObj.productPageObj.clickAddToCartBtnOfProd();
        pageObj.productPageObj.clickShoppingCartIcon();
        pageObj.cartPageObj.prodNameVisible(pageObj.data.prodName);
    })
});