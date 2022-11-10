import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <div className='conteiner-navbar'>
            <h1 className='titulo-principal-header' >TIENDA BADRUKA</h1>
            <nav className='navbar'>
                <ul className='list-navbar'>
                    <li>
                        <a className='secciones-navbar' href='#'>Inicio</a>
                    </li>
                    <li>
                        <a className='secciones-navbar' href='#'>Herramientas</a>
                    </li>
                    <li>
                        <a className='secciones-navbar' href='#'>Electrodomésticos</a>
                    </li>
                    <li>
                        <a className='secciones-navbar' href='#'>Jardín</a>
                    </li>
                    <li>
                        <a className='secciones-navbar' href='#'>Hogar</a>
                    </li>
                    <li>
                        <a className='secciones-navbar' href='#'>Contacto</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}


export default Navbar