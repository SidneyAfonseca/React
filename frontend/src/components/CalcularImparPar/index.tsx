import React, { useState } from 'react';

const CaulcarParImpar: React.FC = () => {
  const [numero, setNumero] = useState(0);

  function CalculaParImpar() {
    alert(numero % 2 == 0 ? "PAR" : "IMPAR");
    return;
  }
  return (

    <fieldset>
      <legend>Verificar se numero é par ou impar</legend>
      <div>
        <label>Numero:</label>
        <input
          type='number'
          placeholder='Informe um numero'
          onChange={(e) => setNumero(parseInt(e.target.value))}
        ></input>
      </div>

      <button onClick={CalculaParImpar}>Verificar se numero é par ou impar</button>
    </fieldset>
  );
}
export default CaulcarParImpar;