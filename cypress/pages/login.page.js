export class LogInPage {

    locator = {
        userName: '[data-test="username"]',
        userPwd: '[data-test="password"]',
        logInBtn: '[data-test="login-button"]',
        errorMsg: '[data-test="error"]'
    }
    enterUserName(name) {
        cy.typeText(this.locator.userName, name);
    }

    logoDisplayed(testData) {
        // cy.get('.login_logo').contains(testData).should('be.visible');
        cy.verifyText('.login_logo', testData);
    }
    enterUserPassword(password) {
        cy.typeText(this.locator.userPwd, password);
    }

    clickLogInBtn() {
        cy.clickOnBtn(this.locator.logInBtn);
    }

    verifyLoginErrorMessage(errorMsg) {
        cy.verifyText(this.locator.errorMsg, errorMsg);
    }
}