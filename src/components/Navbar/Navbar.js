import React from 'react'

const Navbar = () => {
    return (
        <div className='conteiner-navbar'>
            <nav className='navbar'>
                <ul>
                    <li className='list-navbar' >
                        <a href='#'>foto</a>
                    </li>
                    <li className='list-navbar'>
                        <a href='#'>Herramientas</a>
                    </li>
                    <li className='list-navbar'>
                        <a href='#'>Electrodomésticos</a>
                    </li>
                    <li className='list-navbar'>
                        <a href='#'>Jardín</a>
                    </li>
                    <li className='list-navbar'>
                        <a href='#'>Hogar</a>
                    </li>
                    <li className='list-navbar'>
                        <a href='#'>Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar