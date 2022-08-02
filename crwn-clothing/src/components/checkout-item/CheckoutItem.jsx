import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
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
    const { addItemToCart, removeItemFromCart, removeProductFromCart } = useContext(CartContext)

    const clearItemHandler = () => removeProductFromCart(item);
    const removeItemHandler = () => removeItemFromCart(item);
    const addItemHandler = () => addItemToCart(item);

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