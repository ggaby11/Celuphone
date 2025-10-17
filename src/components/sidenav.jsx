import { NavLink } from 'react-router-dom'

function Sidenav(){
    return (
        <div>
            <h3>Celuphone</h3>
            <li>
                <NavLink to='/'></NavLink>
            </li>
        </div>
    )
}

export default Sidenav