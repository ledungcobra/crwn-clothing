export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
            } else {
                return cartItem;
            }
        })
    } else {
        return [
            ...cartItems, {
                ...cartItemToAdd,
                quantity: 1
            }
        ]

    }

}

export const decreaseQuantityItemUtils = (cartItems, cartItemToDecreaseQuantity) => {
    if(cartItemToDecreaseQuantity.quantity>1){
        const idx = cartItems.findIndex(cartItem=> cartItem.id === cartItemToDecreaseQuantity.id);
        cartItems[idx].quantity -= 1;
        cartItems[idx] = {...cartItems[idx]};
        return [...cartItems]

    }else{
        return cartItems.filter(cartItem=> cartItem.id !== cartItemToDecreaseQuantity.id)
    }
}