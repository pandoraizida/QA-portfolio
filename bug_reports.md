## Test project  
**https://www.saucedemo.com**  
**User**: standard_user  
**Password**: secret_sauce  

# Bug report 1
**Title:** User can create an empty order  
**Type:** Functional  
**Environment:** Web version, Mobile version  
**Severity:** High  
**Frequency:** 100%  
**Preconditions:** User is logged into the shop application and is on the main page.  
**Steps to Reproduce:**  
1. Add any product to the cart by clicking the Add to Cart button.  
2. Open the cart page by clicking the cart icon in the top-right corner.  
3. Remove the added product by clicking the Remove button.  
4. Click the Checkout button.  
5. Fill in all required shipping information with valid data and click Continue.  
6. Complete the checkout process by clicking the Finish button.

**Actual Result:** The order is successfully created with no products and a total amount of $0. User is redirected to the “Thank you for your order!” page.  
**Expected Result:** The user should not be able to complete checkout with an empty cart. The Checkout button should be disabled when the cart is empty.  
**Attachments:**
https://github.com/user-attachments/assets/891dc33c-06ce-43c2-a8a2-673b31d35111  
Follow the link to watch the video.  



# Bug report 2
**Title:** Shipping information is cleared after returning to the checkout information step 
**Type:** UI/UX / Functional  
**Environment:** Web version, Mobile version  
**Severity:** High  
**Frequency:** 100%  
**Preconditions:** User is logged into the shop application and is on the main page.  
**Steps to Reproduce:**  
1. Add any product to the cart by clicking the Add to Cart button.  
2. Open the cart page by clicking the cart icon in the top-right corner.  
3. Click the Checkout button.  
4. Fill in all required shipping information with valid data and click Continue.  
5. Return to the shipping information step by clicking the browser Back button.  

**Actual Result:** Previously entered shipping information is cleared and all fields become empty.  
**Expected Result:** Previously entered shipping information should be preserved when returning to the checkout information step. User should be able to review and edit previously entered data.  
**Attachments:**
https://github.com/user-attachments/assets/d599e18e-c4bd-41f0-a13d-d1120ab4d034  
Follow the link to watch the video.  


# Bug report 3
**Title:** Cursor pointer is missing for clickable cart icon  
**Type:** UI/UX  
**Environment:** Web version, Mobile version  
**Severity:** Low  
**Frequency:** 100%  
**Preconditions:** User is logged into the shop application and is on the main page.  
**Steps to Reproduce:**  
1. Hover over the cart icon in the top-right corner.  
2. Compare cursor behavior with other clickable elements on the page.    

**Actual Result:** Cursor remains default on hover over the clickable cart icon.  
**Expected Result:** Cursor should change to pointer on hover, consistent with other clickable UI elements.  
**Attachments:**
https://github.com/user-attachments/assets/166d99d1-090e-4616-b2bf-0f33f138ccc2  
Follow the link to watch the video.  

