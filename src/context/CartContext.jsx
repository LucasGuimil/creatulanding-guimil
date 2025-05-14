import React, {createContext , useContext, useState} from 'react'

export const CartContext = createContext()


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [list, setList] = useState([]) 
    const [cargando, setCargando] = useState(true)
    const [inCart, setInCart] = useState(false)
    const [hide, setHide] = useState(true)
    
    const productExists = (id)=> {
        cart.some(item => item.id===id)? setInCart(true):setInCart(false)
    }

    const addItem = (product, count)=> { 
        if (!inCart){
        setCart([...cart, {...product, quantity: count}]) 
        setInCart(true)}
    }

    const deleteItem = (id) => {
        const indexItem = cart.findIndex(item => item.id===id)
        const updatedCart = [...cart]
        updatedCart.splice(indexItem,1)
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const cartQuantity = cart.reduce((quantity, item) => {
        return quantity + item.quantity
    },0)

    const cartTotal = cart.reduce((total, item)=> {
        return total + (item.quantity * item.price) 
    },0)

    return (
        <CartContext.Provider value = {{cart, setCart, addItem, deleteItem, clearCart, cartQuantity, cartTotal, list, setList, cargando, setCargando, inCart, productExists, hide, setHide}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

export const useCartContext = () => {
    return useContext(CartContext)
}
