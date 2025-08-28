import React, { useEffect } from 'react';
import { aetheraPerfumes, brandStories } from '../../data/mockData';
import PerfumeCard from '../PerfumeCard';

const HomePage = ({ setCurrentPage }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.2 });
    const elements = document.querySelectorAll('.feature-card-animate');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="text-gray-800 fade-in">
      <section className="h-screen relative flex items-center justify-center text-center text-white">
        <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover">
          <source src="https://placehold.co/1920x1080.mp4?text=+" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="z-10 p-10">
          <h2 className="text-5xl md:text-7xl font-semibold font-serif hero-title">
            <span><span>Temukan</span></span> <span><span>Aroma</span></span> <span><span>Khas</span></span> <span><span>Anda</span></span>
          </h2>
          <p className="text-xl md:text-2xl mt-6 max-w-2xl mx-auto font-sans">Lebih dari sekadar parfum, kami menciptakan identitas.</p>
          <button onClick={() => setCurrentPage('catalog')} className="mt-10 bg-transparent text-white font-semibold py-4 px-12 border border-white hover:bg-white hover:text-black transition-all text-lg font-sans">
            Jelajahi Koleksi
          </button>
        </div>
      </section>

      <section className="py-24 bg-[#fdfdfd]">
        <div className="container mx-auto">
          <div className="horizontal-scroll">
            {brandStories.map((story, index) => (
              <div key={index} className="flex-shrink-0 w-80 md:w-96 mr-8">
                <h3 className="text-2xl font-semibold font-serif tracking-widest border-b border-black pb-2 mb-4">{story.title}</h3>
                <p className="text-base text-gray-600 font-sans">{story.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold font-serif mb-20 tracking-wider">Koleksi Unggulan</h3>
          <div className="grid md:grid-cols-3 gap-8 px-10">
            {aetheraPerfumes.slice(0, 3).map((perfume, index) => (
              <div className="feature-card-animate" style={{transitionDelay: `${index * 150}ms`}} key={perfume.id}>
                <PerfumeCard perfume={perfume} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;