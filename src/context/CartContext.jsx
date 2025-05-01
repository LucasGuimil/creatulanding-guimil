import {useContext , useState} from 'react'

export const Context = useContext()


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity)=> {
        setCart([...cart, {...product, quantity: quantity}])
    }


    return (
        <div>
        
        </div>
    )
}

export default CartContext
