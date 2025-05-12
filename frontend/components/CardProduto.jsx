import React from 'react';

const CardProduto = ({ bicicleta, onEdit, onDelete }) => {
  const listaImagens = [
    '../src/assets/bicicleta1.png',
    '../src/assets/bicicleta2.png',
    '../src/assets/bicicleta3.png',
    '../src/assets/bicicleta4.png',
  ];

  const getImagemAleatoria = () => {
    const indexRandom = Math.floor(Math.random() * listaImagens.length);
    return listaImagens[indexRandom];
  };

  const imagemAleatoria = getImagemAleatoria();

  return (
    <div className="bg-white w-full max-w-sm border border-black-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imagemAleatoria}/>
      <div className="p-5">
        <h5 className="text-xl bg-gray font-semibold text-gray-900">{bicicleta.name}</h5>
        <p className="text-sm text-gray-600 mb-3">{bicicleta.description}</p>
        <div className="flex justify-between">
          <button
            onClick={() => onEdit(bicicleta)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(bicicleta.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
