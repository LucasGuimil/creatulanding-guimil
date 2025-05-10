import React, { useEffect, useState } from 'react'
import ItemList from '../body/ItemList'
import { useParams } from 'react-router'
import Loading from '../body/Loading'
import { useCartContext } from '../../context/CartContext'
import { getProducts, getProductsByCategory } from '../../services/firebaseServices'

const ItemListContainer = ()=> {
    
    const {list, setList, cargando, setCargando} = useCartContext()
    const {category} = useParams()
    const fetchDesignado = category ? getProductsByCategory : getProducts
    const [greeting, setGreeting] = useState({})


    useEffect(()=>{
        setCargando(true)
        fetchDesignado(category).then(res => {
            setList(res)
            setGreeting({
                categoria: category!==undefined? category:"Todos los productos",
                descripcion: category!==undefined? 'Estos son los productos disponibles de la categoría: '+category:"Estos son todos los productos disponibles."
            })
        })
        .finally(()=>{setCargando(false)})
    },[category])

        return (
            <div>
                {cargando?(<Loading/>):(            
                <div>
                    <h1>Tienda AV</h1>
                    <p>Bienvenido a la tienda oficial para activistas de Anonymous for the Voiceless.</p>
                    <h5>{greeting.descripcion}</h5>
                    <section className='container mb-5'>
                        <ItemList list={list}/>
                    </section>
                </div>)}
            </div>
        )
    }
export default ItemListContainer
