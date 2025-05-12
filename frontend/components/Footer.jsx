import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 shadow-inner mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-base">
        <p className="font-serif mb-2 md:mb-0">&copy; BIKE Shop.</p>
        <nav className="flex space-x-6">
          <a href="#" className="font-serif hover:text-black transition duration-300">Instagram</a>
          <a href="#" className="font-serif hover:text-black transition duration-300">Facebook</a>
          <a href="#" className="font-serif hover:text-black transition duration-300">Sobre</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
