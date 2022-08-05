import React from 'react'
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
} from './CheckoutItem.styles'

const CheckoutItem = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(removeProductFromCart(cartItems, item));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, item));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={item.imageUrl} alt={`${item.name}`} />
            </ImageContainer>
            <Name>{item.name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{item.quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{item.price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem