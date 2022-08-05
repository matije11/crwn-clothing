import { CART_ACTION_TYPES } from './cartTypes'

const INITIAL_STATE = {
    openCart: false,
    cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                openCart: payload
            }
        default:
            return state
    }
}