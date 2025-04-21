import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchProductById } from '../../services/fetchProducts'
import ItemDetail from '../body/ItemDetail'
import Loading from '../body/Loading'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const {id} = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(()=> {
        setCargando(true)
        fetchProductById(id).then(res => setProductDetail(res)).finally(()=>setCargando(false))}
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
