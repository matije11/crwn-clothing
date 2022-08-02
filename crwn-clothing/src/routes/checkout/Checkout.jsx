import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total
} from './Checkout.styles'

const Checkout = () => {
    const { cartItems, total } = useContext(CartContext)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(item => <CheckoutItem item={item} key={item.id} />)}
            <Total>Total: ${total}</Total>
        </CheckoutContainer>
    )
}

export default Checkout