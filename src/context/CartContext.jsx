import {createContext , useContext, useEffect, useState} from 'react'
import { getProducts, getProductsByCategory } from '../services/firebaseServices'
import { useParams } from 'react-router'

export const CartContext = createContext()


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [list, setList] = useState([]) 
    const [cargando, setCargando] = useState(true)
    

    

    const addItem = (product, count)=> {
        const productExists = cart.some(item => item.id===product.id)
        productExists? console.log("producto ya existente") : setCart([...cart, {...product, quantity: count}])
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
        return total + (item.quantity * item.precio) 
    },0)

    getProducts()
    return (
        <CartContext.Provider value = {{cart, setCart, addItem, deleteItem, clearCart, cartQuantity, cartTotal, list, setList, cargando, setCargando}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

export const useCartContext = () => {
    return useContext(CartContext)
}
