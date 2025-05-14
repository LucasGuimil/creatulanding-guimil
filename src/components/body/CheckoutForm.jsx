import React from 'react'

const CheckoutForm = () => {
    return (
        <div className='container w-50'>
            <form>
                <fieldset><legend>Complete sus datos para finalizar la compra.</legend>
                <div className="row mb-3">
                    <label htmlFor='name' className='col-form-label col-sm-3 text-start'>Nombre completo: </label>
                    <div className='col-sm-9'>
                        <input type='text' name='name' className='form-control'></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor='phone' className='col-form-label col-sm-3 text-start'>Teléfono: </label>
                    <div className='col-sm-9'>
                        <input type='number' name='phone' className='form-control'></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor='email' className='col-form-label col-sm-3 text-start'>Email: </label>
                    <div className='col-sm-9'>
                        <input type='email' name='email' className='form-control'></input>
                    </div>
                </div>
                </fieldset>
                <button className='btn btn-dark'>Comprar</button> 
                <button className='btn btn-danger'>Cancelar</button>
            </form>
        </div>
    )
}

export default CheckoutForm
