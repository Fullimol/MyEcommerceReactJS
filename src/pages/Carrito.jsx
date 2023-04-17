import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductsProvider'
import CardProduct from '../components/store/CardProduct'

const Carrito = () => {
  const { carrito, removeProductCarrito } = useContext(ProductContext)

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h1>Carrito</h1>
      <h6>{carrito.length} productos</h6>

      <div className='d-flex'>
        {carrito.length < 1 ? (<h1 className='text-danger' style={{ marginTop: "60%" }}>(Carrito vacío)</h1>) : (carrito?.map((productoCarrito) => (
          <CardProduct
            key={productoCarrito.id}
            {...productoCarrito}
            button_text={"Quitar de carrito"}
            button_className={"btn btn-danger"}
            onClick={() => removeProductCarrito(productoCarrito.id)}
          />
        )))}
      </div>
    </div>
  )
}

export default Carrito