import React, { useState } from 'react'
import { createOrder } from '../../services/firebaseServices'
import { useCartContext } from '../../context/CartContext'

const CheckoutForm = () => {
    const {cartTotal, cart} = useCartContext()
    const [user, setUser] = useState({
        name:'',
        phone: '',
        email: ''
    })
    
    function updateBuyerData (e) {
        setUser({...user, [e.target.name]: e.target.value })
    }
    const buySubmit = (e) => {
        e.preventDefault()
        let newOrder = {
            buyer: user,
            total: cartTotal,
            items: cart,
            date: new Date()
        }
        createOrder(newOrder)
            .then(response => {
                console.log(response)
                alert("su orden es la número"+response.id)
            })
            .catch(error => console.log(error))
        
    }   


    return (
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
                <button className='btn btn-dark' type='submit' onClick={buySubmit}>Comprar</button> 
                <button className='btn btn-danger' type='reset'>Cancelar</button>
            </form>
        </div>
    )
}

export default CheckoutForm
