import React, { useContext } from 'react'
import Input from '../../shared/Input'
import useForm from '../../hooks/useForm'
import Button from '../../shared/Button'
import { ProductContext } from '../../context/ProductsProvider'
import { inputType, inputDisabled } from '../../helper'

const Formulario = (props) => {
    const { initialState, edit } = props
    const { form, handleChange } = useForm(initialState)
    const { addNewProduct, editProduct, deleteProduct } = useContext(ProductContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit) {
            editProduct(form)
            return
        } else {
            addNewProduct(form)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-50 mx-auto  m-3 p-3'>
            {// "Object.entries()"" toma un objeto y lo convierte en un array de pares clave-valor.
                Object.entries(form).map(([key, value]) => ( //hago destructuración de la key y value para no poner "initial[0]"
                    <Input
                        required
                        type={inputType(key)}
                        key={key}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        disabled={inputDisabled(key)}
                    />

                ))
            }
            <div className='d-flex justify-content-center'>
            <Button type="submit" button_text={edit ? "Confirmar cambios" : "Agregar producto"} button_className={edit && "btn btn-success"} />
            {edit ? <Button button_text={"Eliminar producto"} button_className={"btn btn-danger ms-1"} onClick={() => deleteProduct(form.id)} /> : null}
            </div>
           

        </form>
    )
}

export default Formulario