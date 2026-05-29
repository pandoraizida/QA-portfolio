import { expect } from "playwright/test";
import { pageTitles } from "../constants.ts";
import { test } from "../fixtures/loginFixture.ts";

test.describe('Cart Functionality Suite', () => {

    test.beforeEach(async ({ loginPage, itemList }) =>{
    
    await loginPage.userLogin();
    
    await itemList.expectBeOnListItemsPage(pageTitles.itemList);

    });

    test('CART-01. Added item displays in the cart', async ({ itemList, cartPage }) => {
        
        await itemList.addOneItemToCart();

        await expect(itemList.removeFromCartFirstItemButton).toBeVisible();
        await itemList.expectCartBadgeShowsItemCount(1);

        await itemList.cartIcon.click();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.removeFromCartFirstItemButton).toBeVisible();
        await expect(cartPage.items).toHaveCount(1);
        await cartPage.expectCartBadgeShowsItemCount(1);
    });

    test('CART-02. Added multiple items display in the cart', async ({ itemList, cartPage }) => {

        await itemList.addMultipleItemsToCart();

        await itemList.expectCartBadgeShowsItemCount(2);

        await itemList.cartIcon.click();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(2);
        await cartPage.expectCartBadgeShowsItemCount(2);
    });

    test('CART-03: Removed from cart item is not displayed in the cart', async ({ itemList, cartPage }) => {

        await itemList.addOneItemToCart();

        await itemList.cartIcon.click();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);

        await cartPage.removeOneItemFromCart();
        await expect(cartPage.items).toHaveCount(0);
        await expect (cartPage.cartBadge).not.toBeVisible();
    });

    test('CART-04: Added to the cart item can be removed from the Item list', async ({ itemList }) => {

        await itemList.addOneItemToCart();

        await expect(itemList.removeFromCartFirstItemButton).toBeVisible();

        await itemList.removeOneItemFromCart();
        await expect(itemList.cartBadge).not.toBeVisible();
        await expect(itemList.addToCartFirstItem).toBeVisible();
    });

    test('CART-05: Added to the cart item can be removed from the Item Details page', async ({ itemList, itemDetailsPage }) => {

        await itemList.addOneItemToCart();
        await itemList.openFirstItemDetailsPage();

        await itemDetailsPage.expectToBeOnItemDetailsPage();
        await expect(itemDetailsPage.removeFromCartFirstItemButton).toBeVisible();

        await itemDetailsPage.removeOneItemFromCart();
        await expect(itemList.cartBadge).not.toBeVisible();
        await expect(itemList.addToCartFirstItem).toBeVisible();
    });


    test('CART-07: Cart persistence check', async ({ itemList, itemDetailsPage, cartPage }) => {

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

    test('CART-10: Refreshing Cart page does not affect cart state', async ({ itemList, cartPage, page }) => {

        await itemList.addOneItemToCart();

        await itemList.cartIcon.click();
        
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
