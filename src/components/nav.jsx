import { NavLink } from 'react-router-dom'
import './nav.css'

import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";


function Nav(){
    return (
        <div className='flex flex-row items-center'>
            <nav id='topnav'>
                <NavLink to='/' className='link font-bold text-2xl'>Celuphone</NavLink>
                <NavLink to='/' className='link'>Inicio</NavLink>
                <NavLink to='/nosotros' className='link'>Nosotros</NavLink>
                <NavLink to='/productos' className='link'>Productos</NavLink>
                <NavLink to='/contactanos' className='link'>Contactanos</NavLink>
                <NavLink to='/login' className='link'>login</NavLink>
            </nav>
            <div className="flex justify-end relative w-64">
                <input type="text" placeholder="¿Que estas buscando hoy?" className="w-full py-2 pl-3 pr-10 text-gray-700 outline-none"/>

                <MdOutlineSearch size={24} color="gray" className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"/>
            </div>

            
            <IoMdHeartEmpty size={24} color="black" />
            <MdOutlineShoppingCart size={24} />
            <FiUser size={24} />

        </div>
    )
}

export default Nav
