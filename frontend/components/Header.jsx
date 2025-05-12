import React from 'react';
import logo from '/src/assets/logo.png';

const Header = () => {
  return (
    <header className="bg-gray-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-center gap-10">
        <a href="/contato" className="text-outline text-2xl font-serif hover:text-black transition duration-300">Contato</a>

        <div className="w-[7vh]">
          <img src={logo} alt="Logo" className="mx-auto" />
        </div>

        <a href="/" className="text-outline text-2xl font-serif hover:text-black transition duration-300">Home</a>
      </div>
    </header>
  );
};

export default Header;
