import React, { useState } from 'react';

const CaulcarNumeroPrimo: React.FC = () => {
  const [numero, setNumero] = useState(0);

  function CalculaNumeroPrimo() {
    if (numero < 1)
      alert("numero não e primo");
    return;

    let primo = true;
    for (let i = 2; i < Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        primo = false;
        break;
      }
    }
    alert(primo ? "primo" : "não e primo");
  }

  return (

    <fieldset>
      <legend>Verificar se numero é primo</legend>
      <div>
        <label>Numero:</label>
        <input
          type='number'
          placeholder='Informe um numero'
          onChange={(e) => setNumero(parseInt(e.target.value))}
        ></input>
      </div>

      <button onClick={CalculaNumeroPrimo}>Verificar se numero é primo</button>
    </fieldset>
  );
}

export default CaulcarNumeroPrimo;