import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage
} from './CartDropdown.styles'

const CartDropdown = () => {
    const { cartItems, toggleCart } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckout = () => {
        toggleCart(false);
        navigate("/checkout")
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map(item => <CartItem cartItem={item} key={item.id} />)
                ) :
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown
