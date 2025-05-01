import {createContext , useContext, useState} from 'react'

export const CartContext = createContext()


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addItem = (product, count)=> {
        const productExists = cart.some(item => item.id===product.id)
        productExists? console.log("producto ya existente") : setCart([...cart, {...product, quantity: count}])
    }

    return (
        <CartContext.Provider value = {{cart, setCart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

export const useCartContext = () => {
    return useContext(CartContext)
}
