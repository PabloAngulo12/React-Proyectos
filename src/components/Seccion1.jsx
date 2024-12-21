import React, { useState } from 'react';

function Seccion1() {
  console.log('Seccion1 is rendering');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value:', inputValue);
  };

  return (
    <section className="App-seccion p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-purple-800 text-2xl mb-4">Formulario</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="block text-purple-800 mb-2">
            Nombre:
            <input type="text" value={inputValue} onChange={handleChange} className="block mt-1 p-2 rounded border" />
          </label>
          <button type="submit" className="mt-4 p-2 bg-purple-800 text-white rounded">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Seccion1;
