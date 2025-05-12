import React, { useState } from 'react';

const CardForm = ({ onSubmit, initialBicicleta, onClose }) => {
  const [bicicleta, setBicicleta] = useState(initialBicicleta || { id: '', name: '', description: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBicicleta({ ...bicicleta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bicicleta);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="text-center font-serif bg-white p-4 rounded-lg shadow-lg border-1 border-gray-500">
        <p>Crie o cartão da bicicleta</p>
        <input
          type="text"
          name="name"
          value={bicicleta.name}
          onChange={handleChange}
          placeholder="Nome da bicicleta"
          className="border p-2 m-2 w-full rounded-lg"
        />
        <input
          type="text"
          name="description"
          value={bicicleta.description}
          onChange={handleChange}
          placeholder="Descrição da bicicleta"
          className="border p-2 m-2 w-full rounded-lg"
        />
        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="bg-gray-600 text-white p-2 rounded-lg border-1 border-gray-800 hover:bg-gray-800 hover:border-black transition duration-300 mr-2">Cancelar</button>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg border-1 border-gray-800 hover:bg-cyan-800 hover:border-black transition duration-300">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
