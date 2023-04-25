import React from 'react';
import Button from '../../shared/Button';
import useCounter from '../../hooks/useCounter';

function Counter(props) {
    const { disable_buttons, counter_text } = props
    const { count, handleSumar, handleRestar } = useCounter()

    return (
        <div className='d-flex justify-content-around p-1'>
            {!disable_buttons ? <Button onClick={handleRestar} button_text="-" button_className="btn btn-danger btn-sm" /> : null}

            {counter_text ? <p className='text-success'> {count} en el carrito </p> : <p>Cantidad: {count}</p>}

            {!disable_buttons ? <Button onClick={handleSumar} button_text="+" button_className="btn btn-success btn-sm" /> : null}

        </div>
    );
}

export default Counter;

//  hacer que el valor de la cantidad de productos quede en el CARRITO y en el STORE (se borran al navegar por la web)