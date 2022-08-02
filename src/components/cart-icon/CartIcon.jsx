import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import {
    CartIconContainer,
    Icon,
    ItemCount
} from './CartIcon.styles'

const CartIcon = () => {
    const { openCart, setOpenCart, cartCount } = useContext(CartContext)

    const toggleOpenCart = () => setOpenCart(!openCart)

    return (
        <CartIconContainer onClick={toggleOpenCart} >
            <Icon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon