import {createContext , useContext, useState} from 'react'

export const CartContext = createContext()


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
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
    return (
        <CartContext.Provider value = {{cart, setCart, addItem, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

export const useCartContext = () => {
    return useContext(CartContext)
}
