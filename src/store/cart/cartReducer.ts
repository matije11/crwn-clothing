import { AnyAction } from 'redux';
import { CartItem } from './cartTypes'
import { setCartItems, setIsCartOpen } from "./cartAction";

export type CartState = {
    readonly openCart: boolean,
    readonly cartItems: CartItem[]
}

export const INITIAL_STATE: CartState = {
    openCart: false,
    cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {

    if (setIsCartOpen.match(action)) {
        return {
            ...state,
            openCart: action.payload
        }
    }

    if (setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload
        }
    }

    return state
}