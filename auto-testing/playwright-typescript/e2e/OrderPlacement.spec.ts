import { expect } from "playwright/test";
import { pageTitles } from "../constants.ts";
import { test } from "../fixtures/loginFixture.ts";

test.describe('Order Placement Suite', () => {

    test.beforeEach(async ({ loginPage, itemList }) =>{
    
    await loginPage.userLogin();
    
    await itemList.expectBeOnListItemsPage(pageTitles.itemList);

    });

    test('ORDER-01: Successful order placement with one item', async ({ cartPage }) => {
        
        await cartPage.openCartAfterAddingOneItem();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);

        await cartPage.checkoutButton.click();

        await cartPage.expectBeOnPage(pageTitles.checkout);

        await cartPage.fillAllCheckoutInfo();
        await cartPage.continueButton.click();

        await cartPage.expectBeOnPage(pageTitles.overview);
        await expect(cartPage.items).toHaveCount(1);

        await cartPage.finishButton.click();

        await cartPage.expectBeOnPage(pageTitles.complete);
        await expect(cartPage.completeOrderInfo).toBeVisible();
    });

    test('ORDER-02: Successful order placement with multiple items', async ({ itemList, cartPage }) => {
        
        await itemList.addMultipleItemsToCart();
        await itemList.cartIcon.click();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(2);

        await cartPage.checkoutButton.click();
        await cartPage.expectBeOnPage(pageTitles.checkout);

        await cartPage.fillAllCheckoutInfo();
        await cartPage.continueButton.click();

        await cartPage.expectBeOnPage(pageTitles.overview);
        await expect(cartPage.items).toHaveCount(2);

        await cartPage.finishButton.click();

        await cartPage.expectBeOnPage(pageTitles.complete);
        await expect(cartPage.completeOrderInfo).toBeVisible();
    });

    test('ORDER-04: If Checkout form fields are empty the error message should be visible', async ({ cartPage }) => {
        
        await cartPage.openCartAfterAddingOneItem();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);

        await cartPage.checkoutButton.click();

        await cartPage.expectBeOnPage(pageTitles.checkout);

        await cartPage.continueButton.click();

        await expect(cartPage.checkoutErrorMessage).toBeVisible();

    });

    test('CART-06: Contunue shopping should return back to the Item List', async ({ itemList, cartPage }) => {

        await cartPage.openCartAfterAddingOneItem();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);
        await expect(cartPage.continueShoppingButton).toBeVisible();

        await cartPage.continueShoppingButton.click();

        await itemList.expectBeOnListItemsPage(pageTitles.itemList);
        await itemList.expectCartBadgeShowsItemCount(1);
    });

    test('ORDER-07: Canceling checkout process should led to the cart', async ({ cartPage }) => {
        
        await cartPage.openCartAfterAddingOneItem();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);

        await cartPage.checkoutButton.click();

        await cartPage.expectBeOnPage(pageTitles.checkout);
        await expect(cartPage.cancelButton).toBeVisible();

        await cartPage.cancelButton.click();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);
        await cartPage.expectCartBadgeShowsItemCount(1);

    });

    test('ORDER-08: Canceling order placement should led to Item List', async ({ itemList, cartPage }) => {
        
        await cartPage.openCartAfterAddingOneItem();

        await cartPage.expectBeOnPage(pageTitles.cart);
        await expect(cartPage.items).toHaveCount(1);

        await cartPage.checkoutButton.click();

        await cartPage.expectBeOnPage(pageTitles.checkout);
        
        await cartPage.fillAllCheckoutInfo();
        await cartPage.continueButton.click();

        await cartPage.expectBeOnPage(pageTitles.overview);
        await expect(cartPage.items).toHaveCount(1);
        await expect(cartPage.cancelButton).toBeVisible();

        await cartPage.cancelButton.click();

        await itemList.expectBeOnListItemsPage(pageTitles.itemList);
        await itemList.expectCartBadgeShowsItemCount(1);

    });
});
