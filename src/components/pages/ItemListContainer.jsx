import React, { useEffect, useState } from 'react'
import ItemList from '../body/ItemList'
import fetchProducts from '../../services/fetchProducts'

const ItemListContainer = ()=> {
    
    const [list, setList] = useState([])

    useEffect(()=>{
        fetchProducts().then(response => {
            console.log(response)
            setList(response)
        })
    },[])

    return (
        <div>
            <h1>Tienda AV</h1>
            <h3>Todos los productos</h3>
            <p>Bienvenido a la tienda oficial para activistas de Anonymous for the Voiceless.</p>
            <section className='container mb-5'>
                <ItemList list={list}/>
            </section>
        </div>
    )
}

export default ItemListContainer
