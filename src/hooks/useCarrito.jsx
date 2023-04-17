import { useEffect, useState } from "react"
import { axiosClient } from "../axios"

const useCarrito = () => {
    const [carrito, setCarrito] = useState([])

    const getAllCarrito = async () => {
        try {
            const res = await axiosClient.get('/carrito')
            setCarrito(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addProductCarrito = async (objeto) => {
        try {
            const res = await axiosClient.post('/carrito', objeto)
            getAllCarrito()
            alert("Producto agregado a Carrito")
        } catch (error) {
            console.log(error)
        }
    }

    const removeProductCarrito = async (id) => {
        try {
            const res = await axiosClient.delete(`/carrito/${id}`)
            getAllCarrito()
            alert("Quitado del carrito")
        } catch (error) {
            console.log(error)
        }
    }

    const isInCarrito = (id) => carrito.some((producto) => producto.id == id)

    useEffect(() => {
        getAllCarrito()
    }, [])

  return {
    carrito,
    getAllCarrito,
    addProductCarrito,
    removeProductCarrito,
    isInCarrito
  }
}

export default useCarrito