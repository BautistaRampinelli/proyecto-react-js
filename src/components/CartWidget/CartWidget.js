import React from 'react'
import './CartWidget.css'
const CartWidget = () => {

    // const totalProdcuts = () =>{
    //     return cartContext.reduce((acc, product) => acc + product.quantity, 0)
    // }

    return (
        <div className='logo-carrito-navbar'>
            <img className='img-logo-carrito-navbar' src={'assets/carrito.png'} alt='Carrito' />
            <p className='contador'>2</p>
        </div>
    )
}

export default CartWidget