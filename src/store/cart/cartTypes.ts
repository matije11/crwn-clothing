import { CategoryItem } from "../categories/categoryTypes";

export enum CART_ACTION_TYPES {
    TOGGLE_CART = 'TOGGLE_CART',
    SET_CART_ITEMS = 'SET_CART_ITEMS'
}

export type CartItem = CategoryItem & {
    quantity: number;
}