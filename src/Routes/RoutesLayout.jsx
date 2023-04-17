import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RoutesLayout = (props) => {
    const { nombre_nav, show_dropdown, navbar_items, dropdown_name, dropdown_items } = props
    return (
        <>
            <Navbar
                nombre_nav={nombre_nav}

                navbar_items={navbar_items || [
                    { nombre: 'Home', path: '/' },
                    { nombre: 'Store', path: '/store' },
                    { nombre: 'Carrito', path: '/carrito' },
                    { nombre: 'Agregar', path: '/agregar'}
                ]}
                show_dropdown={show_dropdown}
                dropdown_name={dropdown_name}
                dropdown_items={dropdown_items}
            />
            <Outlet />

        </>
    )
}

export default RoutesLayout