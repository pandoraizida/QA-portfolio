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

### ORDER-04: If Checkout form fields are empty the error message should be visible

Steps:  
1. Add an item to cart  
2. Go to Checkout  
3. Leave required fields empty  
4. Click Continue  

Expected result:  
* Error message appears (e.g., “First Name is required”)  

### ORDER-05: When checkout with empty cart Checkout button should be disabled

Steps:   
1. Go to Checkout without adding items  

Expected result:  
* Checkout is blocked or cart is shown as empty  

### CART-06: Contunue shopping should return back to the Item List

Steps:  
1. Add an item  
2. Go to cart  
3. Click “Contunue shopping”  

Expected result:  
* User is on Items list page  
* Cart contents remain unchanged  

### ORDER-07: Canceling checkout process should led to the cart

Steps:  
1. Add an item to cart  
2. Start checkout  
2. Click Cancel  

Expected result:  
* User is returned to cart, order is not created  
* Cart contents remain unchanged  

### ORDER-08: Canceling order placement should led to Item List

Steps:  
1. Add an item to cart  
2. Go to cart  
3. Click Checkout  
4. Enter valid data (First Name, Last Name, Postal Code) and click Continue  
5. Click Cancel  

Expected result:  
* User is returned to the Items list, order is not created  
* Cart contents remain unchanged  
 