import React, { useState } from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0)
    const sum = ()=>{count===stock ? setCount(stock) : setCount(count + 1)}
    const rest = ()=>{count===0 ? setCount(0) : setCount(count - 1)}

    return (
        <div className='btn-group align-items-center'>
            <button className='btn-dark' onClick={rest}>-</button>
            <h4 className='mx-2'>{count}</h4>
            <button className='btn-dark' onClick={sum}>+</button>  
        </div>
    )
}   

export default ItemCount
