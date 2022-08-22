import { FC, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../store/cart/cartSelector';
import { addItemToCart, removeItemFromCart, removeProductFromCart } from '../../store/cart/cartAction';
import {
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Price,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from './CheckoutItem.styles';
import { CartItem } from '../../store/cart/cartTypes';

type CheckoutItemProps = {
    item: CartItem
}

const CheckoutItem: FC<CheckoutItemProps> = memo(({ item }) => {
    const { imageUrl, name, quantity, price } = item;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(removeProductFromCart(cartItems, item));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, item));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
})

export default CheckoutItem