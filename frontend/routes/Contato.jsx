import React from 'react';

const Contato = () => {
  return (
    <div className="flex justify-center items-center mt-6 px-4">
      <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg border border-gray-800 space-y-4">
        <div>
        <p className='text-lg text-center font-serif mb-4 text-gray-900 text-shadow-lg border-gray-500'>Envie uma mensagem para nós!</p>
          <label htmlFor="nomeCliente" className="block text-gray-700 font-serif">Nome:</label>
          <input
            type="text"
            id="nomeCliente"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
            placeholder="Digite seu nome aqui:"
            required
          />
        </div>

        <div>
          <label htmlFor="emailCliente" className="block text-gray-700 font-serif">Email:</label>
          <input
            type="email"
            id="emailCliente"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
            placeholder="Digite seu email aqui: email@exemplo.com"
            required
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-gray-700 font-serif">Mensagem:</label>
          <textarea
            id="mensagem"
            rows="6"
            maxLength="800"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
            placeholder="Digite sua mensagem para nós aqui:"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="font-serif bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-800 transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
