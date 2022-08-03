import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer'; // helper funciton instead of writing type and payload

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

export const CartContext = createContext({
    openCart: false,
    toggleCart: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeProductFromCart: () => { },
    cartCount: 0,
    total: 0
})

const INITIAL_STATE = {
    openCart: false,
    cartItems: [],
    cartCount: 0,
    total: 0
}
export const CART_ACTION_TYPES = {
    TOGGLE_CART: 'TOGGLE_CART',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}
// ====== Reducer function - best to use when one action (state change) needs to update multiple values (states)... ====== //
const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                openCart: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { openCart, cartItems, cartCount, total } = state;

    const toggleCart = (toggle) => {
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART, toggle))
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newCount = newCartItems.reduce((total, item) => total + item.quantity, 0);
        const newTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItems: newCartItems,
            cartCount: newCount,
            total: newTotal
        }))
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = (addCartItem(cartItems, productToAdd));
        updateCartItemsReducer(newCartItems)
    }

    const removeItemFromCart = (itemToRemove) => {
        const newCartItems = (removeCartItem(cartItems, itemToRemove));
        updateCartItemsReducer(newCartItems)
    }

    const removeProductFromCart = (productToRemove) => {
        const newCartItems = (removeProduct(cartItems, productToRemove))
        updateCartItemsReducer(newCartItems)
    }

    const value = {
        openCart,
        toggleCart,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemFromCart,
        removeProductFromCart,
        total
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}