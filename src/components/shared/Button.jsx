import React from 'react'

const Button = (props) => {
    const { button_text = "boton", button_className = "btn btn-primary", onClick, type = "button" } = props
    return (
        <button onClick={onClick} type={type} className={button_className}>{button_text}</button>
    )
}

export default Button