import React from 'react';

const Header = ({ setCurrentPage }) => (
  <header className="bg-white/80 text-black p-6 fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-200">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl tracking-[0.3em] cursor-pointer font-semibold font-serif" onClick={() => setCurrentPage('home')}>AETHERA</h1>
      <nav className="hidden md:flex space-x-12 text-sm tracking-widest font-sans">
        <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="hover:text-gray-500 transition-colors">Home</a>
        <a href="#catalog" onClick={(e) => { e.preventDefault(); setCurrentPage('catalog'); }} className="hover:text-gray-500 transition-colors">Katalog</a>
        <a href="#consultation" onClick={(e) => { e.preventDefault(); setCurrentPage('consultation'); }} className="hover:text-gray-500 transition-colors">Konsultasi AI</a>
        <a href="#custom" onClick={(e) => { e.preventDefault(); setCurrentPage('custom'); }} className="hover:text-gray-500 transition-colors">Custom Blend</a>
      </nav>
      <button className="md:hidden text-2xl">☰</button>
    </div>
  </header>
);

export default Header;