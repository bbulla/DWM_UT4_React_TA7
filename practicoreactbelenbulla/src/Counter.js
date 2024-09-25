import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

function Counter() {
    const [count, setCount] = useState(0);

    // useEffect para actualizar el título del documento
    useEffect(() => {
        document.title = `Contador: ${count}`;
    }, [count]);  

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="container mt-6">
            <h1 className="title">Contador: {count}</h1>
            <div className="buttons">
                <button className="button is-primary" onClick={handleIncrement}>
                    Incrementar
                </button>
                <button className="button is-warning" onClick={handleDecrement}>
                    Decrementar
                </button>
                <button className="button is-danger" onClick={handleReset}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
}

export default Counter;
