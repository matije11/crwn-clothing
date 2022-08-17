import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    CartIconContainer,
    Icon,
    ItemCount
} from './CartIcon.styles'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cartSelector'
import { setIsCartOpen } from '../../store/cart/cartAction'

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const openCart = useSelector(selectIsCartOpen);

    const toggleOpenCart = () => dispatch(setIsCartOpen(!openCart))

    return (
        <CartIconContainer onClick={toggleOpenCart} >
            <Icon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon