## Test project
https://www.saucedemo.com  
**User:** standard_user  
**Password:** secret_sauce  

### TC-CART-08: Attempt to remove a non-existent product

Steps:  
1. Log in to the application  
2. Open an empty cart  
2. Try to remove a product  

Expected result:  
* No errors occur, UI remains stable.  

### TC-CART-09: Multiple clicks on “Add to cart”

Steps:  
1. Log in to the application  
2. Click “Add to cart” multiple times for the same product  

Expected result:  
* Product is not duplicated in the cart  

### TC-CART-10: Cart access without authentication

Steps:  
1. Open the site without login  
2. Try accessing cart via URL  

Expected result:  
* Redirect to login page  

### TC-CART-11: Cart behavior after page refresh

Steps:  
1. Log in to the application  
2. Add a product  
3. Refresh the page and remove the product  

Expected result:  
* Cart state remains correctly synchronized  