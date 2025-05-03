import React from 'react'
import { Link } from 'react-router'

const Item = ({product}) => {
    
    return (
        <div className="col">
            <div className="card m-4 h-100">
            <img src={product.image} className="card-img-top " alt={product.description}/>
                <div className="card-body my-auto">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">ARS$ {product.price}</p>
                </div> 
                <div className='card-footer mb-1'>
                    <Link to={'/item/'+ product.id} className="btn btn-dark">Ver detalle</Link>
                </div>
            </div>
        </div>  
    )
}

export default Item
