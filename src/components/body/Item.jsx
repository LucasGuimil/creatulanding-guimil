import React from 'react'
import { Link } from 'react-router'

const Item = ({product}) => {
    
    return (
        <div className="col">
            <div className="card m-4 h-100">
            <img src={product.imagen} className="card-img-top " alt={product.descripcion}/>
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.precio}</p>
                <Link to="#" className="btn btn-dark">Ver detalle</Link>
            </div>  
            </div>
        </div>
    )
}

export default Item
