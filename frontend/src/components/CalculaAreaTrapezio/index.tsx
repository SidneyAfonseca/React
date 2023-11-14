import React, { useState } from 'react';

const CalculaAreaTrapezio: React.FC = () => {
    const [maior, setMaior] = useState(0);
    const [menor, SetMenor] = useState(0);
    const [altura, SetAltura] = useState(0);

    function calculaArea() {
        const area = ((maior * menor) * altura) / 2;
        alert(`area do Trapezio ${area}`);

    }
    return (

        <fieldset>
            <legend>Area do Trapezio</legend>
            <div>
                <label>Info Base Maior:</label>
                <input
                    type='number'
                    placeholder='Informe a base MAior'
                    onChange={(e) => setMaior(parseFloat(e.target.value))}
                ></input>
            </div>
            <div>
                <label>Info Base Menor:</label>
                <input
                    type='number'
                    placeholder='Informe a base menor'
                    onChange={(e) => SetMenor(parseFloat(e.target.value))}
                ></input>
            </div>
            <div>
                <label>Info Altura:</label>
                <input
                    type='number'
                    placeholder='Informe a Altura'
                    onChange={(e) => SetAltura(parseFloat(e.target.value))}
                ></input>
            </div>
            <button onClick={calculaArea}>Calcule a Area</button>
        </fieldset>
    );
};

export default CalculaAreaTrapezio;