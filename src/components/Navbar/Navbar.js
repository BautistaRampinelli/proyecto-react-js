import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <div className='conteiner-navbar'>
            <h1 className='titulo-principal-header' >TIENDA BADRUKA</h1>
            <nav className='navbar'>
                <ul className='list-navbar'>
                    <li>
                        <NavLink className="secciones-navbar" to="/">
                            INICIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="secciones-navbar" to="/categoria/electrodomesticos">
                            ELECTRODOMÉSTICOS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="secciones-navbar" to="/categoria/herramientas">
                            HERRAMIENTAS
                        </NavLink></li>
                    <li>
                        <NavLink className="secciones-navbar" to="/categoria/hogar">
                            HOGAR
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="secciones-navbar" to="/categoria/construccon">
                            CONSTRUCCIÓN
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="secciones-navbar" to="/categoria/contacto">
                            CONTACTO
                        </NavLink>
                    </li>
                    <div>
                        <Link to="/cart"><CartWidget/></Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar