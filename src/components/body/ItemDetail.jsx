import React, { useState } from 'react'
import ItemCount from './ItemCount'
import BackButton from './BackButton'
import {useCartContext} from '../../context/CartContext'

const ItemDetail = ({productDetail}) => {
    const [count, setCount] = useState(0)
    const {addItem} = useCartContext()
    

    return (
        <div>
            <div>
                <BackButton/>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={productDetail.image} className="img-fluid rounded" alt={productDetail.description}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{productDetail.name}</h4>
                        <p className="card-text">{productDetail.description}</p>
                        <p className="card-text">Precio: ARS${productDetail.price}</p>
                        <p className="card-text"><small className="text-muted">Stock: {productDetail.stock}</small></p>
                        <ItemCount stock={productDetail.stock} count={count} setCount={setCount} />
                    </div>
                    <button className='btn btn-dark' disabled={count==0} onClick={()=>{addItem(productDetail, count)}}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
