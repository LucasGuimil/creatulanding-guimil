import {createContext , useContext, useEffect, useState} from 'react'
import { getProducts, getProductsByCategory } from '../services/firebaseServices'
import Swal from 'sweetalert2'

export const CartContext = createContext()


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [list, setList] = useState([]) 
    const [cargando, setCargando] = useState(true)
    const [inCart, setInCart] = useState(false)
    
    const productExists = (product)=> {
        cart.some(item => item.id===product.id)?setInCart(true):setInCart(false)
    }

    const addItem = (product, count)=> { 
        setCart([...cart, {...product, quantity: count}])
        Swal.fire({
            timer:1500,
            text: "¡Producto añadido correctamente!",
            icon: 'success',
            showConfirmButton: false,
        })
        setInCart(true)
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
        <CartContext.Provider value = {{cart, setCart, addItem, deleteItem, clearCart, cartQuantity, cartTotal, list, setList, cargando, setCargando, inCart, productExists}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

export const useCartContext = () => {
    return useContext(CartContext)
}
