import React from 'react'
import { useNavigate } from 'react-router'

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <div className='my-2'>
            <button onClick={()=>{navigate(-1)}}>Volver</button>
        </div>
    )
}

export default BackButton
