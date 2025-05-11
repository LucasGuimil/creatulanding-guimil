import React from 'react'
import {useCartContext} from '../../context/CartContext'
import Swal from 'sweetalert2'

const CartItem = ({item}) => {
    const {deleteItem} = useCartContext()
    const deleteProductFromCart = ()=> {Swal.fire({
        title: "Elimnar producto del carrito",
        text: '¿Está seguro? Esta acción no podrá deshacerse.',
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#010101",
        confirmButtonColor: "#d33",
        confirmButtonText: "Eliminar producto",
        cancelButtonText: "Cancelar"
        }).then((result) => {
        if (result.isConfirmed) {
            deleteItem(item.id)
            Swal.fire({
            title: "¡Acción realizada con éxito!",
            icon: "success",
            confirmButtonColor: "#010101"
            });
        }
        })}

        
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
                    <button className='btn btn-dark mb-1' onClick={()=>{deleteProductFromCart()}}>Eliminar producto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
