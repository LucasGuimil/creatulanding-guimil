import React, { use, useState } from 'react'
import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router'
import CartItem from '../body/CartItem'
import Swal from 'sweetalert2'
import CheckoutForm from '../body/CheckoutForm'

const Cart = () => {
    const {cart, clearCart, cartTotal} = useCartContext()
    const [hide, setHide] = useState(true)

    const clearCartAlert = ()=> {Swal.fire({
        title: "Vaciar carrito",
        text: '¿Está seguro? Esta acción no podrá deshacerse.',
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#010101",
        confirmButtonColor: "#d33",
        confirmButtonText: "Vaciar",
        cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
                Swal.fire({
                title: "¡Acción realizada con éxito!",
                icon: "success",
                confirmButtonColor: "#010101"
                });
            }
        })}


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
                        <button className='btn btn-dark mx-2' onClick={()=>setHide(false)}>Finalizar compra</button>
                        <button className='btn btn-danger mx-2' onClick={()=>clearCartAlert()}>Vaciar carrito</button>
                    </div>
                    <div>
                        {hide?<></>:<CheckoutForm/>}
                    </div>
                </>)}
        </div>
    )
}

export default Cart
