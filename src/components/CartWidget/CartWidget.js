import React from 'react'
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div className='logo-carrito-navbar'>
            <img className='img-logo-carrito-navbar' src={'assets/carrito.png'} alt='Carrito' />
            <p className='contador'>2</p>
        </div>
    )
}

export default CartWidget