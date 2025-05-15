import React from 'react'
import { Link } from 'react-router'
import { useCartContext } from '../../context/CartContext'

function CartWidget() {
  const {cartQuantity} = useCartContext()
  return (
    <button className="btn fondo-oscuro">
      <div className="position-relative">
        <Link to="/cart"><img className= "cart" src="/src/assets/images/shopping-cart.svg" alt="" height="40px"/></Link>
        <span hidden={cartQuantity===0?true:false}className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger p-1"><span>{cartQuantity}</span></span>
      </div>
    </button>
  )
}

export default CartWidget
