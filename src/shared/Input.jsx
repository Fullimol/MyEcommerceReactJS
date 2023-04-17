import React from 'react'

const Input = (props) => {
    const { type, name, value, onChange, required, disabled } = props
    return (
        <div className="mb-3 text-center">
            <label className="form-label">{name}</label>
            <input className="form-control"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
            />
        </div>
    )
}

export default Input