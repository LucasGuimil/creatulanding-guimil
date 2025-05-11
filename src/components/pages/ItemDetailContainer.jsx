import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../body/ItemDetail'
import Loading from '../body/Loading'
import { useCartContext } from '../../context/CartContext'
import { getProductById } from '../../services/firebaseServices'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const {id} = useParams()
    const {cargando, setCargando, productExists} = useCartContext()

    useEffect(()=> {
        setCargando(true)
        productExists(id)
        getProductById(id)
        .then(res =>setProductDetail(res))
        .finally(()=>setCargando(false))
        }
    ,[id])
    
    return (
        <div>
            {cargando?(<Loading/>): (
            <div className='m-auto w-75'>
                <ItemDetail productDetail={productDetail}/>
            </div>)}
        </div>    
    )
}

export default ItemDetailContainer
