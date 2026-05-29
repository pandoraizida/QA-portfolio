import { Locator, Page, expect } from '@playwright/test';

export default class ItemsList {
    readonly page: Page;
    readonly items: Locator;
    readonly itemName: Locator;
    readonly addToCartFirstItem: Locator;
    readonly removeFromCartFirstItemButton: Locator;
    readonly addToCartLastItem: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;;
        this.items = page.getByTestId('inventory-item');
        this.itemName = page.getByTestId('inventory-item-name');
        this.addToCartFirstItem = this.items.first().getByRole('button', { name: 'Add to cart' });
        this.removeFromCartFirstItemButton = this.items.first().getByRole('button', { name: 'Remove' });
        this.addToCartLastItem = this.items.last().getByRole('button', { name: 'Add to cart' });
        this.cartIcon = page.getByTestId('shopping-cart-link');
        this.cartBadge = page.getByTestId('shopping-cart-badge');
    }

    getPageTitle(titleText: string): Locator {
        return this.page.getByTestId('title').filter({ hasText: titleText });
    }

    async addOneItemToCart() {
        await this.addToCartFirstItem.click();
    }

    async removeOneItemFromCart() {
        await this.removeFromCartFirstItemButton.click();
    }

    async addMultipleItemsToCart() {
        await this.addToCartFirstItem.click();
        await this.addToCartLastItem.click();
    }

    async openFirstItemDetailsPage() {
        await this.itemName.first().click();
    }

    async openLastItemDetails() {
        await this.itemName.last().click();
    }

    async expectCartBadgeShowsItemCount(count: number) {
        await expect(this.cartBadge).toBeVisible();
        await expect(this.cartBadge).toHaveText(count.toString());
    }

    async expectBeOnListItemsPage(pageName: string) {
        await expect(this.getPageTitle(pageName)).toBeVisible();
        await expect(this.items).toHaveCount(6);
    }
    
}