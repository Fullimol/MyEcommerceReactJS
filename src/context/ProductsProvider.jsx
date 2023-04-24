import React, { createContext, useEffect } from 'react'
import useProducts from '../hooks/useProducts'
import useCarrito from '../hooks/useCarrito'
import useForm from '../hooks/useForm'

export const ProductContext = createContext("")

const ProductsProvider = ({ children }) => {
  const { productos, getAllProducts, addNewProduct, edit, selectedProduct, handleEditProduct, handleCloseEditProduct, editProduct, deleteProduct } = useProducts()
  const { carrito, getAllCarrito, addProductCarrito, removeProductCarrito, isInCarrito, getTotal } = useCarrito()
  const { form, handleChange } = useForm()

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <ProductContext.Provider value={{
      productos,
      getAllProducts,
      carrito,
      getAllCarrito,
      addProductCarrito,
      removeProductCarrito,
      isInCarrito,
      form,
      handleChange,
      addNewProduct,
      edit,
      selectedProduct,

      handleEditProduct,
      handleCloseEditProduct,
      editProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider