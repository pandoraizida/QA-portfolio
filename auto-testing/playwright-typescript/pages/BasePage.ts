import { Locator, Page, expect } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;
    public readonly cartIcon: Locator;
    public readonly cartBadge: Locator;
    public readonly items: Locator;
    public readonly addToCartFirstItem: Locator;
    public readonly removeFromCartFirstItemButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = page.getByTestId('shopping-cart-link');
        this.cartBadge = page.getByTestId('shopping-cart-badge');
        this.items = page.getByTestId('inventory-item');
        this.addToCartFirstItem = this.items.first().getByRole('button', { name: 'Add to cart' });
        this.removeFromCartFirstItemButton = this.items.first().getByRole('button', { name: 'Remove' });
    }

    protected getPageTitle(titleText: string): Locator {
        return this.page.getByTestId('title').filter({ hasText: titleText });
    }

    public async addOneItemToCart(): Promise<void> {
        await this.addToCartFirstItem.click();
    }

    public async removeOneItemFromCart(): Promise<void> {
        await this.removeFromCartFirstItemButton.click();
    }

    public async expectCartBadgeShowsItemCount(count: number): Promise<void> {
        await expect(this.cartBadge).toBeVisible();
        await expect(this.cartBadge).toHaveText(count.toString());
    }

    public abstract expectBeOnPage(pageName?: string): Promise<void>;
}
