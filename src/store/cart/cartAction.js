import { CART_ACTION_TYPES } from "./cartTypes";
import { createAction } from "../../utils/reducer/reducer";

// ======= Function for adding item to cart if not exists else increasing item quantity ====== //
const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
    // if found increment quantity
    if (existingCartItem) {
        return cartItems.map(item => item.id === productToAdd.id ?
            {
                ...item,
                quantity: item.quantity + 1
            } : item
        )
    }
    // return new array with modified cartItem / new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
// ======= Function for reducing item quantity or removing item form cart entirely ====== //
const removeCartItem = (cartItems, itemToRemove) => {
    // find item to remove
    const cartItem = cartItems.find(item => item.id === itemToRemove.id);
    // if quantity is equal to 1 then returtn array without that item
    if (cartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }
    // else decrement quantity and return array
    return cartItems.map(item => item.id === itemToRemove.id ?
        {
            ...item,
            quantity: item.quantity - 1
        } : item
    )
}
// =======  Function removes entire product (cart item) from cart ====== //
const removeProduct = (cartItems, productToRemove) => cartItems.filter(item => item.id !== productToRemove.id)


export const setIsCartOpen = (toggle) => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART, toggle);
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = (addCartItem(cartItems, productToAdd));
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = (removeCartItem(cartItems, itemToRemove));
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeProductFromCart = (cartItems, productToRemove) => {
    const newCartItems = (removeProduct(cartItems, productToRemove))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}