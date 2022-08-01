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

export const CartContext = createContext({
    openCart: false,
    setOpenCart: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalQuantity)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { openCart, setOpenCart, cartItems, addItemToCart, cartCount }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}