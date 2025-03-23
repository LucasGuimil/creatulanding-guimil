import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark fondo-oscuro">
            <div className="container-fluid">
                <a className="navbar-brand p-2" href="#"><img src='../src/assets/av-logo.png' height="80px" /></a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Todo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Unisex</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Mujer</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
