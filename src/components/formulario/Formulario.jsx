import React, { useContext } from 'react'
import Input from '../../shared/Input'
import useForm from '../../hooks/useForm'
import Button from '../../shared/Button'
import { ProductContext } from '../../context/ProductsProvider'
import { inputType, inputDisabled, inputrequired } from '../../helper'

const Formulario = (props) => {
    const { initialState, edit } = props
    const { form, handleChange } = useForm(initialState)
    const { addNewProduct, editProduct, deleteProduct } = useContext(ProductContext)

    const NotImage = "https://removal.ai/wp-content/uploads/2021/02/no-img.png"

    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit) {
            editProduct(form)
            return
        } else {
            addNewProduct(form)
        }
    }

    console.log("ESTO", form)

    return (
        <form onSubmit={handleSubmit} className='w-50 mx-auto  m-3 p-3'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {// "Object.entries()"" toma un objeto y lo convierte en un array de pares clave-valor.
                            Object.entries(form).map(([key, value]) => ( //hago destructuración de la key y value para no poner "initial[0]"
                                <Input
                                    required={inputrequired(key)}
                                    type={inputType(key)}
                                    key={key}
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    disabled={inputDisabled(key)}
                                />
                            ))
                        }
                    </div>
                    <div className="col-md-4"  >
                        <img src={form.imagen || NotImage}  style={{width:"21rem"}}/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <Button type="submit" button_text={edit ? "Guardar cambios" : "Agregar producto"} button_className={edit && "btn btn-success"} />
                {edit ? <Button button_text={"Eliminar producto"} button_className={"btn btn-danger ms-1"} onClick={() => deleteProduct(form.id)} /> : null}
            </div>


        </form>
    )
}

export default Formulario

