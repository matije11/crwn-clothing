import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import {
    CartIconContainer,
    Icon,
    ItemCount
} from './CartIcon.styles'

const CartIcon = () => {
    const { openCart, toggleCart, cartCount } = useContext(CartContext)

    const toggleOpenCart = () => toggleCart(!openCart)

    return (
        <CartIconContainer onClick={toggleOpenCart} >
            <Icon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon