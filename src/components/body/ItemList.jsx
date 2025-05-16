import React from 'react'
import Item from './Item'

const ItemList = ({ list }) => {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4'>
      {list.map(product => (
        <Item product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default ItemList
