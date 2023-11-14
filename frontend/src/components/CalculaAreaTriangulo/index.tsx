import React, { useState } from 'react';

const CalculaAreaTriangulo: React.FC = () => {
  const [base, setBase] = useState(0);
  const [altura, SetAltura] = useState(0);

  function calculaArea() {
    const area = (base * altura) / 2;
    alert(`area do triangulo ${area}`);

  }
  return (

    <fieldset>
      <legend>Area do triangulo</legend>
      <div>
        <label>Info Base:</label>
        <input
          type='number'
          placeholder='Informe a base'
          onChange={(e) => setBase(parseFloat(e.target.value))}
        ></input>
      </div>
      <div>
        <label>Info Altura:</label>
        <input
          type='number'
          placeholder='Informe a Altura'
          onChange={(e) => setBase(parseFloat(e.target.value))}
        ></input>
      </div>
      <button onClick={calculaArea}>Calcule a Area</button>
    </fieldset>
  );
};

export default CalculaAreaTriangulo;