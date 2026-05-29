## Test project
https://www.saucedemo.com  
**User:** standard_user  
**Password:** secret_sauce  

### CART-07: Attempt to remove a non-existent in the cart item

Steps:  
1. Log in to the application  
2. Open an empty cart  
2. Try to remove an item  

Expected result:  
* There no items in the cart
* No errors occur, UI remains stable.  

### CART-08: Multiple clicks on “Add to cart”

Steps:  
1. Log in to the application  
2. Click “Add to cart” multiple times for the same item  

Expected result:  
* Item is not duplicated in the cart  

### CART-9: Cart behavior after page refresh

Steps:  
1. Log in to the application  
2. Add an item  
3. Refresh the page and remove the item  

Expected result:  
* Cart state remains correctly synchronized  

### CART-10: Cart access without authentication redirects to Login page

Steps:  
1. Open the site without login  
2. Try accessing cart via URL  

Expected result:  
* Redirect to login page  
