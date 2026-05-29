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

### ORDER-01: Successful order placement with one item

Steps:  
1. Add an item to cart  
2. Go to cart  
3. Click Checkout  
4. Enter valid data (First Name, Last Name, Postal Code) and click Continue  
5. Confirm order  

Expected result:  
* Order is successfully placed  
* “Thank you for your order” message is displayed  

### ORDER-02: Successful order placement with multiple items

Steps:  
1. Add multiple items  
2. Complete checkout  

Expected result:  
* All items are included in the order  
* “Thank you for your order” message is displayed  

### ORDER-03: Total price calculation check

Steps:  
1. Add an item  
2. Go to Checkout Overview  

Expected result:  
* Total price is correctly calculated (subtotal + tax)  
 
