## Test project
https://www.saucedemo.com  
**User:** standard_user  
**Password:** secret_sauce

**Preconditions**
* User is logged in to the application  
* User is on the Products page  

**Postconditions**
* Cart is empty  
* No products are present in the cart  

### TC-ORDER-04: Empty fields in checkout form

Steps:  
1. Add product(s) to cart  
2. Go to Checkout  
3. Leave required fields empty  
4. Click Continue  

Expected result:  
* Error message appears (e.g., “First Name is required”)  

### TC-ORDER-05: Checkout with empty cart

Steps:  
1. Add product(s) to cart  
2. Go to Checkout without adding items  

Expected result:  
* Checkout is blocked or cart is shown as empty  

### TC-ORDER-06: Cancel checkout process

Steps:  
1. Add product(s) to cart  
2. Start checkout  
2. Click Cancel  

Expected result:  
* User is returned to cart, order is not created  

### TC-ORDER-07: Cancel order placement

Steps:  
1. Add product(s) to cart  
2. Go to cart  
3. Click Checkout  
4. Enter valid data (First Name, Last Name, Postal Code) and click Continue  
5. Click Cancel  

Expected result:  
* User is returned to the Product list, order is not created  
 