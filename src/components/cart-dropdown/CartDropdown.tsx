import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage
} from './CartDropdown.styles'
import { selectCartItems } from '../../store/cart/cartSelector'


const CartDropdown = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems)

    const goToCheckout = useCallback(() => {
        navigate("/checkout")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                ) :
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown
