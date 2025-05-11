import React from 'react'
import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router'
import CartItem from '../body/CartItem'

const Cart = () => {
    const {cart, clearCart, cartTotal} = useCartContext()
    console.log(cart)
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
                    <div className='my-2'>
                        <h1 className='text-center'>Total: ARS$ {cartTotal}</h1>
                        <button className='btn btn-dark mx-2' /* onClick={buy} */>Finalizar compra</button>
                        <button className='btn btn-danger mx-2' onClick={clearCart}>Vaciar carrito</button>
                    </div>
                </>)}
        </div>
    )
}

export default Cart
