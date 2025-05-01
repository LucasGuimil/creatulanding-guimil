import React, { useState } from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0)
    const sum = ()=>{setCount(count + 1)}
    const rest = ()=>{setCount(count - 1)}

    return (
        <div className='btn-group align-items-center'>
            <button className='btn btn-dark' onClick={rest} disabled={count==0}>-</button>
            <h4 className='mx-2'>{count}</h4>
            <button className='btn btn-dark' onClick={sum} disabled={count>=stock}>+</button>  
        </div>
    )
}   

export default ItemCount
