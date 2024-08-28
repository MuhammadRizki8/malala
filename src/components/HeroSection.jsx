// src/components/HeroSection.jsx
// import React from 'react';
import heroImage from '../assets/images/pagaruyung3.jpg';

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-[80vh] sm:h-screen w-full" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className=" flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4">
        <h1 className="max-w-screen-lg text-white text-2xl md:text-4xl lg:text-5xl font-normal font-poppins text-center mb-4 md:w-11/12 lg:w-3/4">Jelajahi Budaya dan Alam Minangkabau bersama Malala</h1>
        <p className="max-w-screen-lg text-white text-xs md:text- lg:text-2xl font-light font-poppins text-center mb-8">Mulai petualanganmu di tanah penuh budaya dan keindahan alam yang memukau. Temukan destinasi terbaik di Minangkabau.</p>

        <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl flex flex-col sm:flex-row items-center p-2 space-y-2 sm:space-y-0 sm:space-x-2 bg-white rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div className="flex bg-gray-100 p-2 w-full space-x-2 sm:space-x-4 rounded-sm items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input className="bg-gray-100 outline-none flex-1 min-w-0 text-sm sm:text-base" type="text" placeholder="Cari destinasi.." />
          </div>

          <div className="bg-green-700 hover:bg-green-800 py-2 px-4 sm:px-6 md:px-8 text-white font-semibold rounded-md hover:shadow-lg transition duration-300 cursor-pointer w-full sm:w-auto text-center">
            <span className="text-sm sm:text-base">Cari</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
