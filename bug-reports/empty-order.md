## Test project and creds
**https://www.saucedemo.com**  
**User**: standard_user  
**Password**: secret_sauce  

## Bug report
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
Follow the link to watch video.  
https://github.com/user-attachments/assets/3cc11121-d7bc-4e0e-92f1-b3a13ceec0d1
