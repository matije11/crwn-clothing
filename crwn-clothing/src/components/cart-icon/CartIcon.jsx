import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from '../../contexts/CartContext';
import "./CartIcon.scss";

const CartIcon = () => {
    const { openCart, setOpenCart } = useContext(CartContext)

    const toggleOpenCart = () => setOpenCart(!openCart)

    return (
        <div className='cart-icon-container' onClick={toggleOpenCart} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon