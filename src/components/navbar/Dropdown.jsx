import React from 'react'
import { Link } from 'react-router-dom'
import NavbarItems from './NavbarItems'

const Dropdown = (props) => {
    const { dropdown_items, dropdown_name } = props
    return (
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {dropdown_name}
            </Link>
            <ul className="dropdown-menu">
                {dropdown_items?.map(({ nombre, path }) => (
                    <NavbarItems key={nombre} nombre_items={nombre} path={path} />
                )) || "(vacío)"}
            </ul>
        </li>
    )
}

export default Dropdown