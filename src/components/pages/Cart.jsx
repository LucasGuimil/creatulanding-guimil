import React from 'react'
import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router'
import CartItem from '../body/CartItem'

const Cart = () => {
    const {cart, clearCart} = useCartContext()
    return (
        <div>
            {(cart.length==0)? (
                <div>
                    <h1>Al parecer tu carrito está vacío.</h1>
                    <Link to="/" className='btn btn-dark'>Ir al inicio</Link>
                </div>) : (
                <>
                    <div>
                        {cart.map(cartItem => (
                                <CartItem item={cartItem} key={cartItem.id}/>
                        ))}
                    </div>
                    <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
                </>)}
        </div>
    )
}

export default Cart
