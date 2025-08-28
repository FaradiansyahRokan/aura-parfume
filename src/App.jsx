// src/App.jsx
import React, { useState } from 'react';

// Import komponen umum
import Header from './components/Header';
import Footer from './components/Footer';

// Import komponen halaman
import HomePage from './components/pages/HomePage';
import CatalogPage from './components/pages/CataloguePage';
import ConsultationPage from './components/pages/ConsultationPage';
import CustomBlendPage from './components/pages/CustomBlendPage';

// CATATAN: Pindahkan kode manipulasi DOM (font dan style) dari file asli
// ke file CSS terpisah (misal: index.css) dan import di sini, atau
// langsung ke file public/index.html. Ini adalah cara yang lebih baik.

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog': return <CatalogPage />;
      case 'consultation': return <ConsultationPage />;
      case 'custom': return <CustomBlendPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <Header setCurrentPage={setCurrentPage} />
      <main>
        {/* key={currentPage} membantu React me-reset state & animasi saat halaman berganti */}
        <div key={currentPage}> 
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;