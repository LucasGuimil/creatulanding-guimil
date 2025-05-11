import React, { useState } from 'react'
import ItemCount from './ItemCount'
import BackButton from './BackButton'

const ItemDetail = ({productDetail}) => {
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
                    </div>
                        <ItemCount productDetail={productDetail}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
