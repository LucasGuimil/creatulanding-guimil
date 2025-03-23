import React from 'react'

function CartWidget() {
  return (
    <button className="btn fondo-oscuro">
      <div className="position-relative">
        <a><img className= "cart" src="../src/assets/shopping-cart.svg" alt="" height="50px"/></a>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger p-1"><span>0</span></span>
      </div>
    </button>
  )
}

export default CartWidget
