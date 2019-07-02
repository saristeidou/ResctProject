import React from 'react'
import { NavLink } from 'react-router-dom'

const SingOut = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to='/'>SingUp</NavLink>
            </li>
            <li>
                <NavLink to='/'>LogIn</NavLink>
            </li>
        </ul>
    )
}

export default SingOut