import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div>
            <h3>No hemos podido encontrar la página que estás buscando.</h3>
            <Link className="btn btn-dark" to="/" end>Volver al inicio</Link>
        </div>
    )
    }

export default NotFound
