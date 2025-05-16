import React, { useState } from 'react'
import { createOrder, updateStock } from '../../services/firebaseServices'
import { useCartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import Loading from './Loading'
import { useNavigate } from 'react-router'

const CheckoutForm = () => {
    const {cartTotal, cart, setHide, cargando, setCargando, clearCart} = useCartContext()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name:'',
        phone: '',
        email: ''
    })


    function updateBuyerData (e) {
        setUser({...user, [e.target.name]: e.target.value })
    }
    let error = false
    let errorDetail = ""
    const buySubmit = (e) => {
        e.preventDefault()
        let newOrder = {
            buyer: user,
            total: cartTotal,
            items: cart,
            date: new Date()
        }

        if (user.name.length < 4){
            errorDetail="Ingrese un nombre válido."
            error = true 
        } 
        if (user.phone.length <10) {
            errorDetail= "Ingrese un número de teléfono válido."
            error=true
        }
        let regexrMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!regexrMail.test(user.email)) {
            errorDetail="Ingrese un email válido."
            error=true
        }
        if (error) {
            Swal.fire({
                title: "Datos inválidos",
                text: errorDetail,
                icon: "error",
                confirmButtonColor:"#010101",
            })
            return
        }
        Swal.fire({
            title: "¿Desea realizar la compra?",
            text: "Verifique sus datos, los mismos no podrán ser modificados luego de aceptar.",
            icon: "warning",
            denyButtonColor: "#010101",
            showDenyButton: true,
            confirmButtonColor: "#d33",
            denyButtonText: "Cancelar",
            confirmButtonText: "Finalizar compra",
        }).then((result) => {
            if (result.isConfirmed) {
                setCargando(true)
                createOrder(newOrder)
                    .then(response => {
                        setCargando(false)
                        Swal.fire({
                            title: '¡Compra exitosa!',
                            text: `Su pedido ha sido creado con éxito bajo la orden: ${response.id}. Le llegará el detalle al mail para realizar el pago.`,
                            icon: 'success',
                            confirmButtonColor: '#010101',
                            didClose: ()=> {
                                cart.map(cartItem=> {
                                    updateStock(cartItem.id,cartItem.quantity).then(()=>{
                                        clearCart()
                                        setHide(true)
                                        navigate('/')   
                                    })
                                })
                            }
                        })
                    })
                
            }
        })
    }   

    const cancel = (e)=> {
        e.preventDefault()
        Swal.fire({
            title: "¿Desea cancelar la compra?",
            icon: "question",
            denyButtonColor: "#010101",
            showDenyButton: true,
            confirmButtonColor: "#d33",
            denyButtonText: "No",
            confirmButtonText: "Sí",
        }).then((result) => {
            if (result.isConfirmed) {
                setHide(true)
            }
        })
    }

    return (
        <> {cargando?(<Loading />):(
        <div className='container w-50'>
            <form onSubmit={buySubmit}> 
                <fieldset><legend>Complete sus datos para finalizar la compra.</legend>
                <div className="row mb-3">
                    <label htmlFor='name' className='col-form-label col-sm-3 text-start'>Nombre completo: </label>
                    <div className='col-sm-9'>
                        <input type='text' name='name' className='form-control' onChange={updateBuyerData}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor='phone' className='col-form-label col-sm-3 text-start'>Teléfono: </label>
                    <div className='col-sm-9'>
                        <input type='number' name='phone' className='form-control' onChange={updateBuyerData}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor='email' className='col-form-label col-sm-3 text-start'>Email: </label>
                    <div className='col-sm-9'>
                        <input type='email' name='email' className='form-control' onChange={updateBuyerData}></input>
                    </div>
                </div>
                </fieldset>
                <div className='p-2'>
                    <button className='btn btn-dark mx-2' type='submit' onClick={buySubmit}>Comprar</button> 
                    <button className='btn btn-danger mx-2' type='reset' onClick={cancel}>Cancelar</button>
                </div>
            </form>
        </div>)
        }
    </>
    )
}

export default CheckoutForm
