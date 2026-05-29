import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ItemList from '../pages/ItemList';
import CartPage from '../pages/CartPage';
import ItemDetailsPage from '../pages/ItemDetailsPage';

export const test = base.extend<{
    loginPage: LoginPage;
    itemList: ItemList;
    cartPage: CartPage;
    itemDetailsPage: ItemDetailsPage
}>({
    loginPage: async ({ page }, use) => await use(new LoginPage(page)),
    itemList: async ({ page }, use) => await use(new ItemList(page)),
    cartPage: async ({ page }, use) => await use(new CartPage(page)),
    itemDetailsPage: async ({ page }, use) => await use(new ItemDetailsPage(page))
});