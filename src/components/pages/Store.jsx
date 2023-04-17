import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductsProvider'
import CardProduct from '../store/CardProduct'
import Formulario from '../formulario/Formulario'
import Button from '../shared/Button'

const Store = () => {

  const { productos, addProductCarrito, isInCarrito, removeProductCarrito, selectedProduct, handleCloseEditProduct, edit, handleEditProduct } = useContext(ProductContext)

  return (
    <div className='container d-flex flex-column align-items-center'>

      {edit ?
        (<div className='container'>
          <span className='d-flex justify-content-center'>
            <h1 className='text-center'>Editar producto</h1>
            <Button button_text={"X"} button_className={"btn btn-danger ms-2"} onClick={handleCloseEditProduct} />
          </span>

          <Formulario edit={edit} initialState={selectedProduct} />
        </div>) : (<>
          <h1>Productos en Stock</h1>
          <div className='d-flex'>
            {productos?.map((producto) => (
              <CardProduct key={producto.id}
                {...producto}
                button_text={!isInCarrito(producto.id) ? "Añadir al carrito" : "Quitar del carrito"}
                button_className={!isInCarrito(producto.id) ? "btn btn-primary" : "btn btn-danger"}
                onClick={!isInCarrito(producto.id) ? () => addProductCarrito(producto) : () => removeProductCarrito(producto.id)}
                isInCarrito
                handleEditProduct={handleEditProduct}
                quitarboton={!isInCarrito(producto.id) ? true : false}
              />
            ))}
          </div>
        </>)}
    </div>
  )
}

export default Store