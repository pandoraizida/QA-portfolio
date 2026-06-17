import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export default class ItemList extends BasePage {
    private readonly itemName: Locator;
    private readonly addToCartLastItem: Locator;

    constructor(page: Page) {
        super(page);
        this.itemName = page.getByTestId('inventory-item-name');
        this.addToCartLastItem = this.items.last().getByRole('button', { name: 'Add to cart' });
    }

    public async addMultipleItemsToCart(): Promise<void> {
        await this.addToCartFirstItem.click();
        await this.addToCartLastItem.click();
    }

    public async openFirstItemDetailsPage(): Promise<void> {
        await this.itemName.first().click();
    }

    public async openLastItemDetails(): Promise<void> {
        await this.itemName.last().click();
    }

    public async expectBeOnPage(pageName: string): Promise<void> {
        await expect(this.getPageTitle(pageName)).toBeVisible();
        await expect(this.items).toHaveCount(6);
    }
}
