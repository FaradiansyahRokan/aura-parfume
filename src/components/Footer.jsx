import React from 'react';

const Footer = () => (
  <footer className="bg-white text-gray-500 py-12 border-t border-gray-200">
    <div className="container mx-auto text-center">
      <p className="text-3xl font-semibold font-serif mb-4 text-black tracking-[0.3em]">AETHERA</p>
      <div className="flex justify-center space-x-8 mb-6 text-base font-sans">
        <a href="#" className="hover:text-black">Tentang Kami</a>
        <a href="#" className="hover:text-black">Kontak</a>
        <a href="#" className="hover:text-black">FAQ</a>
        <a href="#" className="hover:text-black">Kebijakan Privasi</a>
      </div>
      <p className="text-sm tracking-widest font-sans">&copy; {new Date().getFullYear()} AETHERA FRAGRANCES. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);

export default Footer;