import React, { useEffect } from 'react'
import Formulario from '../formulario/Formulario'

const Agregar = () => {
  const initialState = {
    marca: '',
    modelo: '',
    imagen: '',
    precio: ''
  }

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h1>Agregar Producto</h1>
      <Formulario initialState={initialState} />
    </div>
  )
}

export default Agregar