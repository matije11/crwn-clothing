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

    const goToCheckout = () => navigate("/checkout")

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
