import { expect } from "playwright/test";
import { pageTitles } from "../constants.ts";
import { test } from "../fixtures/loginFixture.ts";
import * as allure from 'allure-js-commons';

test.describe('Cart Functionality Suite', () => {

    test.beforeEach(async () =>{
        await allure.owner('e.kochetova');
    });


    test('CART-01. Added item displays in the cart @regression @smoke', async ({ itemList, cartPage }) => {
        await allure.severity(allure.Severity.NORMAL);

        await itemList.addOneItemToCart();

        await expect(itemList.removeFromCartFirstItemButton).toBeVisible();
        await itemList.expectCartBadgeShowsItemCount(1);

        await itemList.cartIcon.click();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.removeFromCartFirstItemButton).toBeVisible();
        await expect(cartPage.items).toHaveCount(1);
        await cartPage.expectCartBadgeShowsItemCount(1);
    });

    test('CART-02. Added multiple items display in the cart @regression', async ({ itemList, cartPage }) => {
        await allure.severity(allure.Severity.NORMAL);

        await itemList.addMultipleItemsToCart();

        await itemList.expectCartBadgeShowsItemCount(2);

        await itemList.cartIcon.click();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(2);
        await cartPage.expectCartBadgeShowsItemCount(2);
    });

    test('CART-03: Removed from cart item is not displayed in the cart @regression @smoke', async ({ cartPage }) => {
        await allure.severity(allure.Severity.NORMAL);

        await cartPage.openCartAfterAddingOneItem();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);

        await cartPage.removeOneItemFromCart();
        await expect(cartPage.items).toHaveCount(0);
        await expect (cartPage.cartBadge).not.toBeVisible();
    });

    test('CART-04: Added to the cart item can be removed from the Item list @regression @smoke', async ({ itemList }) => {
        await allure.severity(allure.Severity.NORMAL);

        await itemList.addOneItemToCart();

        await expect(itemList.removeFromCartFirstItemButton).toBeVisible();

        await itemList.removeOneItemFromCart();
        await expect(itemList.cartBadge).not.toBeVisible();
        await expect(itemList.addToCartFirstItem).toBeVisible();
    });

    test('CART-05: Added to the cart item can be removed from the Item Details page @regression', async ({ itemList, itemDetailsPage }) => {
        await allure.severity(allure.Severity.NORMAL);

        await itemList.addOneItemToCart();
        await itemList.openFirstItemDetailsPage();

        await itemDetailsPage.expectToBeOnItemDetailsPage();
        await expect(itemDetailsPage.removeFromCartFirstItemButton).toBeVisible();

        await itemDetailsPage.removeOneItemFromCart();
        await expect(itemList.cartBadge).not.toBeVisible();
        await expect(itemList.addToCartFirstItem).toBeVisible();
    });


    test('CART-07: Cart persistence check @regression', async ({ itemList, itemDetailsPage, cartPage }) => {
        await allure.severity(allure.Severity.CRITICAL);

        await itemList.addOneItemToCart();

        await itemList.expectCartBadgeShowsItemCount(1);

        //check from last item details page
        await itemList.openLastItemDetails();

        await itemDetailsPage.expectToBeOnItemDetailsPage();
        await itemDetailsPage.expectCartBadgeShowsItemCount(1);

        //check from Item List
        await itemDetailsPage.backToItemListButton.click();

        await itemList.expectBeOnListItemsPage(pageTitles.itemList);
        await itemList.expectCartBadgeShowsItemCount(1);
        
        //check from Cart page
        await itemList.cartIcon.click();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);
        await cartPage.expectCartBadgeShowsItemCount(1);
    })

    test('CART-10: Refreshing Cart page does not affect cart state @regression', async ({ cartPage, page }) => {
        await allure.severity(allure.Severity.NORMAL);

        await cartPage.openCartAfterAddingOneItem();
        
        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);
        await cartPage.expectCartBadgeShowsItemCount(1);

        await page.reload();
        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);
        await cartPage.expectCartBadgeShowsItemCount(1);

        await cartPage.removeOneItemFromCart();
        await expect(cartPage.items).toHaveCount(0);
        await expect(cartPage.cartBadge).not.toBeVisible();

        await page.reload();
        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(0);
        await expect(cartPage.cartBadge).not.toBeVisible();

    });

});
