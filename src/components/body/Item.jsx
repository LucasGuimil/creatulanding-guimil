import React from 'react'
import { Link } from 'react-router'

const Item = ({product}) => {
    
    return (
        <div className="col">
            <div className="card m-4 h-100">
            <img src={product.image} className="card-img-top " alt={product.description}/>
                <div className="card-body d-flex flex-column justify-content-center p-0">
                    <div><h5 className="card-title">{product.name}</h5></div>
                    <div><p className="card-text">ARS$ {product.price}</p></div>
                    <div><p className="card-text text-muted">En stock: {product.stock}</p></div>
                </div> 
                    <Link to={'/item/'+ product.id} className="btn btn-dark w-50 mx-auto mb-2">Ver detalle</Link>
                </div>
        </div>
    )
}

export default Item
