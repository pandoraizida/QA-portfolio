import { Locator, Page, expect } from '@playwright/test';
import ItemList from "./ItemList";
import { checkoutInfo } from "../constants.ts";

export default class CartPage extends ItemList {
    readonly page: Page;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;
    readonly cancelButton: Locator
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly completeOrderInfo: Locator;
    readonly checkoutErrorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;;
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

    async openCartAfterAddingOneItem() {
        await this.addOneItemToCart();
        await this.cartIcon.click();
    }

    async fillAllCheckoutInfo() {
        await this.firstName.fill(checkoutInfo.firstName);
        await this.lastName.fill(checkoutInfo.lastName);
        await this.postalCode.fill(checkoutInfo.postalCode);
    }

    async expectBeOnPage(pageName: string) {
        await expect(this.getPageTitle(pageName)).toBeVisible();
    }
    
}