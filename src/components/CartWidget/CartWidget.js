import React, { useContext, useState, useEffect } from 'react'
import './CartWidget.css'
import {cartContext} from '../../context/CartProvider'

const CartWidget = () => {
    const {cart} = useContext(cartContext)
    const [totalProducts, setTotalProducts] = useState(0)
    const getTotalProducts = () =>{
        setTotalProducts(
            cart.reduce((acc, product) => acc + product.quantity, 0))
    }

    useEffect (() => {
        getTotalProducts();
    }, [cart])

    console.log(totalProducts);
    return (
        <div className='logo-carrito-navbar'>
            <img className='img-logo-carrito-navbar' src={'assets/carrito.png'} alt='Carrito' />
            <p className='contador'>{totalProducts}</p>
        </div>
    )
}

export default CartWidget