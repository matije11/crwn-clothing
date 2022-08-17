import { useSelector } from 'react-redux'
import { selectCartTotal, selectCartItems } from '../../store/cart/cartSelector';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import PaymentForm from '../../components/payment-form/PaymentForm';
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total
} from './Checkout.styles'

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

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
            <PaymentForm />
        </CheckoutContainer>
    )
}

export default Checkout