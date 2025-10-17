import { NavLink } from 'react-router-dom'

function Nav(){
    return (
        <div>
            <h3>Celuphone</h3>
            <nav>
                <NavLink to='/'>Celuphone</NavLink>
                <NavLink to='/'>Inicio</NavLink>
                <NavLink to='/login'>login</NavLink>
                <NavLink to='/nosotros'>Nosotros</NavLink>
                <NavLink to='/productos'>Productos</NavLink>
                <NavLink to='/contactanos'>Contactanos</NavLink>
            </nav>
        </div>
    )
}

export default Nav
