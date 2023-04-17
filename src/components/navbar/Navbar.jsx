import React, { useContext } from 'react'
import NavbarItems from './NavbarItems'
import Dropdown from './Dropdown'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ProductContext } from '../../context/ProductsProvider'


const navbar = (props) => {
  const { nombre_nav, navbar_items, show_dropdown, dropdown_items,dropdown_name } = props
  const {carrito} = useContext(ProductContext)

  console.log("El carrito llega", carrito.lenght) // ESTE VALOR ME LLEGA UNDEFINED
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{nombre_nav || "titulo"}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {navbar_items?.map(({ nombre, path }) => (
              <NavbarItems key={nombre} nombre_items={nombre} path={path} />
            )) || "sin nav"}

            {!show_dropdown || <Dropdown dropdown_items={dropdown_items} dropdown_name={dropdown_name}/>}
          </ul>

          <NavLink className={"nav-link"} to="/carrito">
            <div className='me-2'>
              <AiOutlineShoppingCart style={{fontSize: "2rem"}}/>
              <sup className='text-danger' style={{fontSize:"1.5rem"}}>2{carrito.lenght}</sup>  {/* No me muestra el valor  */}
            </div>
          
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default navbar