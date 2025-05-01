import {createContext , useContext, useState} from 'react'

export const CartContext = createContext()


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (product, count)=> {
        console.log(product.id)
        const productExists = cart.some(item => item.id===product.id)

        productExists? console.log("producto ya existente") : setCart([...cart, {...product, quantity: count}])
        console.log(productExists)
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
