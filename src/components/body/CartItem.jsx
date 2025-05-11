import React from 'react'
import {useCartContext} from '../../context/CartContext'

const CartItem = ({item}) => {
    const {deleteItem} = useCartContext()
    return (
        <div className='d-flex justify-content-center'>
            <div className="card w-50 mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} className="img-fluid h-100 rounded" alt={item.description}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">Cantidad: {item.quantity}</p>
                            <p className="card-text">Precio: ARS$ {item.price}</p>
                            <p className="card-text">Subtotal: ARS$ {item.quantity*item.price}</p>
                        </div>
                    <button className='btn btn-dark mb-1' onClick={()=>{deleteItem(item.id)}}>Eliminar producto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
