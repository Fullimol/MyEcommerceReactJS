import React from 'react'
import Button from '../../shared/Button'

const CardProduct = (props) => {
    const { imagen, marca, modelo, precio, id, button_text, button_className, onClick, isInCarrito, handleEditProduct, quitarboton } = props
    return (
        <div className='m-4'>
            <div key={id} className="card" style={{ width: "18rem" }}>
                <img src={imagen} className="h-50" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{marca}</h6>
                    <h4 className="card-title">{modelo}</h4>
                    <h5 className="card-text">u$s{precio}</h5>
                    {<Button button_text={button_text} button_className={button_className} onClick={onClick} />}
                    {quitarboton ? (<>
                        {isInCarrito && <Button button_text={"editar"} button_className={"btn btn-warning ms-1"} onClick={() => handleEditProduct({ id, imagen, marca, modelo, precio })} />}
                    </>) : (<>{isInCarrito ? <Button button_text={"editar"} button_className={"btn btn-secondary disabled ms-1 btn-sm"} /> : null}</>)
                    }

                </div>
            </div>
        </div>

    )
}

export default CardProduct