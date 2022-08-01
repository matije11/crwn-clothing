import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
    // if found increment quantity
    if (existingCartItem) {
        return cartItems.map(item => item.id === productToAdd.id ?
            {
                ...item,
                quantity: item.quantity + 1
            } : item
        )
    }
    // return new array with modified cartItem / new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, itemToRemove) => {
    // find item to remove
    const cartItem = cartItems.find(item => item.id === itemToRemove.id);
    // if quantity is equal to 1 then returtn array without that item
    if (cartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }
    // else decrement quantitiy and return array
    return cartItems.map(item => item.id === itemToRemove.id ?
        {
            ...item,
            quantity: item.quantity - 1
        } : item
    )
}
// function removes entire product (cart item) from cart
const removeProduct = (cartItems, productToRemove) => cartItems.filter(item => item.id !== productToRemove.id)

export const CartContext = createContext({
    openCart: false,
    setOpenCart: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeProductFromCart: () => { },
    cartCount: 0,
    total: 0
})

export const CartProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalQuantity)
    }, [cartItems])

    useEffect(() => {
        let total = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
        setTotal(total)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove));
    }

    const removeProductFromCart = (productToRemove) => {
        setCartItems(removeProduct(cartItems, productToRemove))
    }

    const value = {
        openCart,
        setOpenCart,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemFromCart,
        removeProductFromCart,
        total
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}