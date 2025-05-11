import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const ItemCount = ({productDetail}) => {
    const {addItem, inCart} = useCartContext()
    const [count, setCount] = useState(0)
    const sum = ()=>{setCount(count + 1)}
    const rest = ()=>{setCount(count - 1)}
    const toastAlert = Swal.mixin({
        toast: true,
        timer:1500,
        text: "¡Producto añadido correctamente!",
        icon: 'success',
        showConfirmButton: false,
        timerProgressBar: true,
    })

    return (
        (inCart==true?(<>
            <div><h3>Este producto ya se encuentra en tu carrito.</h3></div>
            </>):
        (<>
        <div className='btn-group align-items-center'>
            <button className='btn btn-dark' onClick={rest} disabled={count==0}>-</button>
            <h4 className='mx-2'>{count}</h4>
            <button className='btn btn-dark' onClick={sum} disabled={count>=productDetail.stock}>+</button>  
        </div>
        <div>
            <button className='btn btn-dark' disabled={count==0} onClick={()=>{addItem(productDetail, count),toastAlert.fire()}}>Agregar al carrito</button>
        </div>
        </>))
    )
}

export default ItemCount
