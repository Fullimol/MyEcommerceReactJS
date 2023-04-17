import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesLayout from './RoutesLayout'
import Home from '../pages/Home'
import Store from '../pages/Store'
import Carrito from '../pages/Carrito'
import ProductsProvider from '../context/ProductsProvider'
import Agregar from '../pages/Agregar'

const Rutas = () => {
    return (
        <BrowserRouter>
            <ProductsProvider>
                <Routes>
                    <Route path='/' element={<RoutesLayout
                        nombre_nav="eCommerce"
                        show_dropdown
                        dropdown_name="Más+"

                        dropdown_items={[
                            { nombre: 'Opcion1', path: '/opcion1' },
                            { nombre: 'Opcion2', path: '/opcion2' }
                        ]}
                    />}>
                        <Route index element={<Home />} />
                        <Route path='store' element={<Store />} />
                        <Route path='carrito' element={<Carrito />} />
                        <Route path='agregar' element={<Agregar />} />
                        <Route path='opcion1' element={<h1>opcion 1</h1>} />
                        <Route path='opcion2' element={<h1>opcion 2</h1>} />
                    </Route>
                </Routes>
            </ProductsProvider>
        </BrowserRouter>
    )
}

export default Rutas