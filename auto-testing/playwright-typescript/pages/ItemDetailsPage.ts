import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export default class ItemDetailsPage extends BasePage {
    public readonly backToItemListButton: Locator;

    constructor(page: Page) {
        super(page);
        this.backToItemListButton = page.getByTestId('back-to-products');
    }

    public async expectBeOnPage(): Promise<void> {
        await expect(this.backToItemListButton).toBeVisible();
    }
}
