import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCount = ({productDetail}) => {
    const [count, setCount] = useState(0)
    const sum = ()=>{setCount(count + 1)}
    const rest = ()=>{setCount(count - 1)}
    const {addItem, inCart} = useCartContext()

    return (
        (inCart?<>
            <div><h3>Este producto ya se encuentra en tu carrito.</h3></div>
            </>:
        <>
        <div className='btn-group align-items-center'>
            <button className='btn btn-dark' onClick={rest} disabled={count==0}>-</button>
            <h4 className='mx-2'>{count}</h4>
            <button className='btn btn-dark' onClick={sum} disabled={count>=productDetail.stock}>+</button>  
        </div>
        <div>
            <button className='btn btn-dark' disabled={count==0} onClick={()=>{addItem(productDetail, count)}}>Agregar al carrito</button>
        </div>
        </>)
    )
}   

export default ItemCount
