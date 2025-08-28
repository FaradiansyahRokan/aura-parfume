// src/components/pages/CatalogPage.jsx
import React, { useState, useEffect } from 'react';
import { aetheraPerfumes } from '../../data/mockData';
import PerfumeCard from '../PerfumeCard';

const CatalogPage = () => {
  const [perfumes, setPerfumes] = useState([]);
  useEffect(() => { setPerfumes(aetheraPerfumes); }, []);

  return (
    <div className="bg-white min-h-screen pt-40 px-4 sm:px-6 lg:px-8 fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-semibold font-serif text-black tracking-wider">Koleksi Kami</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto font-sans">Setiap botol menyimpan sebuah cerita. Temukan cerita yang beresonansi dengan Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {perfumes.map(perfume => <PerfumeCard key={perfume.id} perfume={perfume} />)}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;