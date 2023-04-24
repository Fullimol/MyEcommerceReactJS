import React from 'react'

const Home = () => {
  return (
    <div className='text-center container'>
      <h1>¡Bienvenido!</h1><br/>
      <h3>Esta sencilla aplicación me perimtió introducirme en el uso de Context, React Router Dom, Custom Hooks, Axios y 
        trabajar en el CRUD de una base de datos en el backend mediante un servidor local.</h3><br />
      <h4>
        Mostrar en pantalla los productos cargados en la base de datos de un servidor.<br/>
        Añadir productos al carrito.<br/>
        Indicación númerica de cantidad de productos sobre el ícono.<br/>
        Agregar productos nuevos a la base de datos mediante un formulario.<br/>
        Posibilidad de editar la info de un producto ya cargado. <br/>
        El boton "editar" se deshabilita si el producto se encuentra en el carrito.
      </h4>
      <a href="https://brunofreijomil.com/" target='blank'>brunofreijomil.com</a>
    </div>
    

  )
}

export default Home