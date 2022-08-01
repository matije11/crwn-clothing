import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
    const { addItemToCart, removeItemFromCart, removeProductFromCart } = useContext(CartContext)

    const clearItemHandler = () => removeProductFromCart(item);
    const removeItemHandler = () => removeItemFromCart(item);
    const addItemHandler = () => addItemToCart(item);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={item.imageUrl} alt={`${item.name}`} />
            </div>
            <span className='name'>{item.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{item.quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{item.price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem