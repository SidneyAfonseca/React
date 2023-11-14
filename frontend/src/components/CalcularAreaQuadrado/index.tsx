import React, { useState } from 'react';

const CalcularAreaQuadrado: React.FC = () => {
  const [lado, SetLado] = useState(0);

  function calculaAreaQ() {
    const area = lado * lado;
    alert(`Area quadrado: ${area}`);
  }
  return (

    <fieldset>
      <legend>Calcular ara do Quadrado</legend>
      <div>
        <label>Lado:</label>
        <input
          type='number'
          placeholder='Informe tamanho do lado'
          onChange={(e) => SetLado(parseInt(e.target.value))}
        ></input>
      </div>

      <button onClick={calculaAreaQ}>Calcula area do Quadrado</button>
    </fieldset>
  );
}

export default CalcularAreaQuadrado;   