import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductsProvider'
import CardProduct from './CardProduct'

const ProductsContainer = () => {
  const { products, getAllProductos } = useContext(ProductContext)
  console.log(products)

  useEffect(() => {
    getAllProductos()
  }, [])
  
  return (
    <div >
      {products.map(({ title, description, image, price, id }) => (
        <CardProduct key={id} product_img={image} product_title={title} product_description={description} product_price={price} />
      ))}

    </div>
  )
}

export default ProductsContainer
