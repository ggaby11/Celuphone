import { NavLink } from 'react-router-dom';
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";


function Nav(){
    return (
        <div>
        <div className='flex flex-row justify-center items-center mt-5 mb-5 ml-10 mr-10 gap-8'>
            <NavLink to='/' className='link flex font-bold items-center text-xl'>Celuphone</NavLink>

            <nav id='topnav' className='flex gap-4'>
                <NavLink to='/' className='link text-sm  hover:text-stone-400'>Inicio</NavLink>
                <NavLink to='/nosotros' className='link text-sm  hover:text-stone-400'>Nosotros</NavLink>
                <NavLink to='/productos' className='link text-sm  hover:text-stone-400'>Productos</NavLink>
                <NavLink to='/contactanos' className='link text-sm  hover:text-stone-400'>Contactanos</NavLink>
            </nav>

            <div className='w-full'></div>
            
            <div className="flex justify-end relative w-230 bg-stone-300 border border-gray-100 rounded">
                <input type="text" placeholder="¿Que estas buscando hoy?" className="w-full py-2 pl-3 pr-10 text-gray-700 outline-none"/>
                <MdOutlineSearch size={24} color="gray" className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"/>
            </div>
            <div className='flex flex-row gap-3'>
                <IoMdHeartEmpty size={24} color="black" src="" className=''/>
                <MdOutlineShoppingCart size={24} />
                <FiUser size={24} />
            </div>
        </div>
        <div className="w-screen h-[2px] bg-gray-200"></div>
        </div>
    )
}

export default Nav
