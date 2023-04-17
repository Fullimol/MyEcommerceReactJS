import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItems = (props) => {
    const {nombre_items, path} = props
  return (
    <li className="nav-item">
        <NavLink className={"nav-link"} to={path}>{nombre_items}</NavLink>
  </li>
  )
}

export default NavbarItems