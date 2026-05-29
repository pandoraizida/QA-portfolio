## Test project
https://www.saucedemo.com  
**User:** standard_user  
**Password:** secret_sauce

**Preconditions**
* User is logged in to the application  
* User is on the Items page  

**Postconditions**
* Cart is empty  
* No items are present in the cart  

### CART-01: Added item displays in the cart 

Steps:   
1. Click “Add to cart” for an item

Expected result:  
* Cart icon counter increases  
* Item appears in the cart  

### CART-02: Added multiple items display in the cart

Steps:  
1. Add 2–3 different items  

Expected result:  
* All items are displayed in the cart  
* Cart counter is correct  

### CART-03: Removed from cart item is not displayed in the cart

Steps:  
1. Add an item  
2. Go to the cart  
3. Click “Remove”

Expected result:  
* Item is removed from the cart  
* Cart counter decreases  

### CART-04: Added to the cart item can be removed from the Item list

Steps:  
1. Add an item  
2. Click “Remove” on the item listing page

Expected result:  
* Item is removed from the cart  
* Button changes back to “Add to cart”

### CART-05: Added to the cart item can be removed from the Item Details page

Steps:  
1. Add an item  
2. Go to item details page  
3. Click “Remove”  

Expected result:  
* Item is removed from the cart  
* Button changes back to “Add to cart” 

### CART-06: Cart persistence check

Steps:  
1. Add an item  
2. Navigate between pages

Expected result:  
* Cart contents remain unchanged  