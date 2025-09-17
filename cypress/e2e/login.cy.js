/// <reference types="cypress" />

import { GlobalPage } from "../pages/global.page";
const pageObj = new GlobalPage();

describe('To test login functionality', () => {

    beforeEach(() => {
        pageObj.readTestData();
        pageObj.visitApplication();
    })

    it('Verify login behaviour when user adding valid credentials', () => {
        pageObj.logInObj.enterUserName(pageObj.data.name);
        pageObj.logInObj.enterUserPassword(pageObj.data.password);
        pageObj.logInObj.clickLogInBtn();
        pageObj.productPageObj.productPageTitleVisible(pageObj.data.productPageTitle);
    })

    it('Verify login behaviour when user adding invalid credentials', () => {
        pageObj.logInObj.enterUserName(pageObj.data.invalidName);
        pageObj.logInObj.enterUserPassword(pageObj.data.password);
        pageObj.logInObj.clickLogInBtn();
        pageObj.logInObj.verifyLoginErrorMessage(pageObj.data.loginErrorMsg);
    })

    it('test header', () => {
        pageObj.logInObj.logoDisplayed(pageObj.data.header);
    })
});