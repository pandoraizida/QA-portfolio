import { Locator, Page, expect } from '@playwright/test';

export default class LoginPage {
    private readonly page: Page;
    private readonly userName: Locator;
    private readonly userPassword: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByTestId('username');
        this.userPassword = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
    }

    public async gotoLoginPage(): Promise<void> {
        await this.page.goto('/');
    }

    public async login(userName: string, userPassword: string): Promise<void> {
        await this.userName.fill(userName);
        await this.userPassword.fill(userPassword);
        await this.loginButton.click();
    }

    public async expectBeOnLoginPage(): Promise<void> {
        await expect(this.userName).toBeVisible();
        await expect(this.userPassword).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }
}
