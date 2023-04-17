import { useState } from "react"
import { axiosClient } from "../axios"

const useProducts = () => {
    const [productos, setProducts] = useState([])
    const [edit, setEdit] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const getAllProducts = async () => {
        try {
            const res = await axiosClient.get('/productos')
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addNewProduct = async (objeto) => {
        try {
            const res = await axiosClient.post('/productos', objeto)
            getAllProducts()
            alert("Producto agregado")
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditProduct = (objeto) => {
        setEdit(true)
        setSelectedProduct(objeto)
    }

    const handleCloseEditProduct = () => {
        setEdit(false)
        setSelectedProduct(null)
    }

    const editProduct = async (objeto) => {
        try {
            await axiosClient.put(`/productos/${objeto?.id}`, objeto)
            await getAllProducts()
            alert("producto modificado")
            handleCloseEditProduct()
        } catch (error) {
            console.log(error)
        }

    }

    const deleteProduct = async (id) => {
        try {
            const res = await axiosClient.delete(`/productos/${id}`)
            getAllProducts()
            alert("Producto eliminado")
        } catch (error) {
            console.log(error)
        }
    }


    return {
        getAllProducts,
        productos,
        addNewProduct,
        edit,
        selectedProduct,

        handleEditProduct,
        handleCloseEditProduct,
        editProduct,
        deleteProduct
    }
}

export default useProducts