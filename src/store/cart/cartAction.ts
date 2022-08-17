import { CategoryItem } from "../categories/categoryTypes";
import { CART_ACTION_TYPES, CartItem } from "./cartTypes";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer";

// ======= Function for adding item to cart if not exists else increasing item quantity ====== //
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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
const removeCartItem = (cartItems: CartItem[], itemToRemove: CartItem): CartItem[] => {
    // find item to remove
    const cartItem = cartItems.find(item => item.id === itemToRemove.id);
    // if quantity is equal to 1 then returtn array without that item
    if (cartItem && cartItem.quantity === 1) {
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
const removeProduct = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => cartItems.filter(item => item.id !== productToRemove.id)

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.TOGGLE_CART, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setIsCartOpen = withMatcher((toggle: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.TOGGLE_CART, toggle))

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = (addCartItem(cartItems, productToAdd));
    return setCartItems(newCartItems)
}

export const removeItemFromCart = (cartItems: CartItem[], itemToRemove: CartItem) => {
    const newCartItems = (removeCartItem(cartItems, itemToRemove));
    return setCartItems(newCartItems)
}

export const removeProductFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems = (removeProduct(cartItems, productToRemove))
    return setCartItems(newCartItems)
}