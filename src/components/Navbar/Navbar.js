import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <div className='conteiner-navbar'>
            <h1 className='titulo-principal-header' >TIENDA BADRUKA</h1>
            <nav className='navbar'>
                <ul>
                    <li className='list-navbar' >
                        <a className='secciones-navbar' href='#'>Inicio</a>
                    </li>
                    <li className='list-navbar'>
                        <a className='secciones-navbar' href='#'>Herramientas</a>
                    </li>
                    <li className='list-navbar'>
                        <a className='secciones-navbar' href='#'>Electrodomésticos</a>
                    </li>
                    <li className='list-navbar'>
                        <a className='secciones-navbar' href='#'>Jardín</a>
                    </li>
                    <li className='list-navbar'>
                        <a className='secciones-navbar' href='#'>Hogar</a>
                    </li>
                    <li className='list-navbar'>
                        <a className='secciones-navbar' href='#'>Contacto</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
            <h2 className='subtitulo-bienvenida'>Bienvenido/a al lugar donde encontras todo lo que necesitas para tu hogar</h2>
        </div>
    )
}


export default Navbar