import React from 'react'
import carrito from '../../assets/carrito.png'
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div className='logo-carrito-navbar'>
            <img className='img-logo-carrito-navbar' src={carrito} alt='Carrito' />
        </div>
    )
}

export default CartWidget