export const userCreds: Record<string,string> = {
    userName: 'standard_user',
    userPass: 'secret_sauce'
}


export const pageTitles: Record<string,string> = {
    itemList: 'Products',
    cart: 'Your Cart',
    checkout: 'Checkout: Your Information',
    overview: 'Checkout: Overview',
    complete: 'Checkout: Complete!'
}

export const checkoutInfo: Record<string,string> = {
    firstName: 'first' + Date.now(),
    lastName: 'last' + Date.now(),
    postalCode: 'code' + Date.now()
};
