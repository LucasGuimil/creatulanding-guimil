import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm mt-0 mb-2 navbar-dark fondo-oscuro">
            <div className="container-fluid justify-content-between">
                <Link className="navbar-brand p-2" to="/"><img src="/public/assets/images/av-logo.png" width="100px" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-sm-0 " >
                        <li className="nav-item mx-3">
                            <NavLink className={({isActive})=> isActive?'active nav-link fw-bold fs-4':'nav-link fw-bold fs-4'} to="/" end>Todo</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className={({isActive})=> isActive?'active nav-link fw-bold fs-4':'nav-link fw-bold fs-4'} to="/category/Unisex" end>Unisex</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className={({isActive})=> isActive?'active nav-link fw-bold fs-4':'nav-link fw-bold fs-4'} to="/category/Mujer" end>Mujer</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className={({isActive})=> isActive?'active nav-link fw-bold fs-4':'nav-link fw-bold fs-4'} to="/category/Accesorios" end>Accesorios</NavLink>
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
