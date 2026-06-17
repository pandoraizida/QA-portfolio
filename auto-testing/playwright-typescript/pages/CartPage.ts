import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { checkoutInfo } from "../constants.ts";

export default class CartPage extends BasePage {
    public readonly continueShoppingButton: Locator;
    public readonly checkoutButton: Locator;
    public readonly cancelButton: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly postalCode: Locator;
    public readonly continueButton: Locator;
    public readonly finishButton: Locator;
    public readonly completeOrderInfo: Locator;
    public readonly checkoutErrorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.continueShoppingButton = page.getByTestId('continue-shopping');
        this.checkoutButton = page.getByTestId('checkout');
        this.cancelButton = page.getByTestId('cancel');
        this.firstName = page.getByTestId('firstName');
        this.lastName = page.getByTestId('lastName');
        this.postalCode = page.getByTestId('postalCode');
        this.continueButton = page.getByTestId('continue');
        this.finishButton = page.getByTestId('finish');
        this.completeOrderInfo = page.getByRole('heading', { name: 'Thank you for your order!'});
        this.checkoutErrorMessage = page.getByTestId('error').filter({ hasText: 'Error: First Name is required' });
    }

    public async openCartAfterAddingOneItem(): Promise<void> {
        await this.addOneItemToCart();
        await this.cartIcon.click();
    }

    public async fillAllCheckoutInfo(): Promise<void> {
        await this.firstName.fill(checkoutInfo.firstName);
        await this.lastName.fill(checkoutInfo.lastName);
        await this.postalCode.fill(checkoutInfo.postalCode);
    }

    public async expectBeOnPage(pageName: string): Promise<void> {
        await expect(this.getPageTitle(pageName)).toBeVisible();
    }
}
