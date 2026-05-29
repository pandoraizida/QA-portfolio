import { Locator, Page, expect } from '@playwright/test';
import { userCreds } from '../constants.ts';

export default class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly userPassword: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByTestId('username');
        this.userPassword = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
    }

    async gotoLoginPage() {
        await this.page.goto('/');
    };

    async userLogin() {
        const userName = userCreds.userName;
        const userPass = userCreds.userPass;

        await this.gotoLoginPage();
        await this.userName.fill(userName);
        await this.userPassword.fill(userPass);
        await this.loginButton.click();
    }
    
    async expectBeOnLoginPage() {
        await expect(this.userName).toBeVisible();
        await expect(this.userPassword).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }
}