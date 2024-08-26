// src/components/HeroSection.jsx
// import React from 'react';
import heroImage from '../assets/images/pagaruyung2.jpg';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className=" flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-center mb-4">Jelajahi Budaya dan Alam Minangkabau bersama Malala</h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl font-light font-poppins text-center mb-8">Mulai petualanganmu di tanah penuh budaya dan keindahan alam yang memukau. Temukan destinasi terbaik di Minangkabau.</p>
        <div className="w-full max-w-md flex items-center">
          <input type="text" placeholder="Cari destinasi..." className="w-full p-3 rounded-l-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins" />
          <button className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
