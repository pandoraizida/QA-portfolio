## Test project
https://www.saucedemo.com  
**User:** standard_user  
**Password:** secret_sauce

## Test suite Cart Functionality

**Preconditions**
* User is logged in to the application  
* User is on the Products page  

**Postconditions**
* Cart is empty  
* No products are present in the cart  

### TC-CART-01: Add product to cart 

Steps:   
1. Click “Add to cart” for a product

Expected result:  
* Cart icon counter increases  
* Product appears in the cart  

### TC-CART-02: Add multiple products

Steps:  
1. Add 2–3 different products  

Expected result:  
* All products are displayed in the cart  
* Cart counter is correct  

### TC-CART-03: Remove product from cart

Steps:  
1. Add a product  
2. Go to the cart  
3. Click “Remove”

Expected result:  
* Product is removed from the cart  
* Cart counter decreases  

### TC-CART-04: Remove product from product list page

Steps:  
1. Add a product  
2. Click “Remove” on the product listing page

Expected result:  
* Product is removed from the cart  
* Button changes back to “Add to cart”

### TC-CART-05: Remove product from product details page

Steps:  
1. Add a product  
2. Go to product details page  
3. Click “Remove”  

Expected result:  
* Product is removed from the cart  
* Button changes back to “Add to cart” 

### TC-CART-06: Cart persistence check

Steps:  
1. Add a product  
2. Navigate between pages

Expected result:  
* Cart contents remain unchanged
