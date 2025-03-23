import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm mt-0 mb-2 navbar-dark fondo-oscuro">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand p-2" href="#"><img src='../src/assets/av-logo.png' width="100px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-sm-0 " >
                        <li className="nav-item mx-3">
                            <a className="nav-link active fw-bold fs-5" href="#Todo ">Todo</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link fw-bold fs-5" href="#Unisex">Unisex</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link fw-bold fs-5" href="#Mujer">Mujer</a>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
