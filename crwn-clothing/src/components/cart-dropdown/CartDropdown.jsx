import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import "./CartDropdown.scss";

const CartDropdown = () => {
    const { cartItems, setOpenCart } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckout = () => {
        setOpenCart(false);
        navigate("/checkout")
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem cartItem={item} key={item.id} />)}
            </div>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown
