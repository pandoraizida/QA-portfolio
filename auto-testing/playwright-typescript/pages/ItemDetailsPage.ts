import { Locator, Page, expect } from '@playwright/test';
import ItemList from "./ItemList";

export default class ItemDetailsPage extends ItemList {
    readonly page: Page;
    readonly backToItemListButton: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.backToItemListButton = page.getByTestId('back-to-products');
    }

    async expectToBeOnItemDetailsPage() {
        await expect(this.backToItemListButton).toBeVisible();
    }
    
}