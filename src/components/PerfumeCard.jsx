import React from 'react';

const PerfumeCard = ({ perfume }) => (
  <div className="bg-white overflow-hidden group relative">
    <div className="overflow-hidden">
      <img src={perfume.imageUrl} alt={perfume.name} className="w-full h-[70vh] object-cover" />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex flex-col justify-end p-8 text-white">
      <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-4xl font-semibold font-serif">{perfume.name}</h3>
        <p className="font-sans mt-2">{perfume.description}</p>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wider font-sans">{perfume.price}</span>
          <button className="border border-white text-white font-semibold py-2 px-6 text-base hover:bg-white hover:text-black transition-colors font-sans">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PerfumeCard;