import { NavLink } from 'react-router-dom';
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import Login from "../pages/login"

function Nav(){
    return (
        <div>
        <div className='flex flex-row justify-center items-center mt-5 mb-5 ml-10 mr-10 gap-8'>
            <NavLink to='/' className='link flex font-bold items-center text-xl'>Celuphone</NavLink>

            <nav id='topnav' className='flex gap-4'>
                <NavLink to='/' className='text-sm  hover:text-stone-400'>Inicio</NavLink>
                <NavLink to='/nosotros' className='text-sm  hover:text-stone-400'>Nosotros</NavLink>
                <NavLink to='/productos' className='text-sm  hover:text-stone-400'>Productos</NavLink>
                <NavLink to='/contactanos' className='text-sm  hover:text-stone-400'>Contactanos</NavLink>
            </nav>

            <div className='w-full'></div>
            
            <div className="flex justify-start pl-4 pr-5 relative h-10 w-230 bg-stone-300 border border-gray-100 rounded">
                <input type="text" placeholder="¿Que estas buscando hoy? " className="no-estilo"/>
                <MdOutlineSearch size={24} color="gray" className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"/>
            </div>
            <div className='flex flex-row gap-3'>
                <NavLink to='/whislist' className='text-2xl hover:text-red-400'>
                    <IoMdHeartEmpty/>
                </NavLink>
                <NavLink to='/cart' className='text-2xl hover:text-[var(--color-secundario-500)]'>
                    <MdOutlineShoppingCart/>
                </NavLink>
                <NavLink to='/login' className='text-2xl hover:text-[var(--color-principal-500)]'>
                    <FiUser/>
                </NavLink>
            </div>
        </div>
        <div className="w-screen h-[2px] bg-gray-200"></div>
        </div>
    )
}

export default Nav
