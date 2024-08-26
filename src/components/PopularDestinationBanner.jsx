// src/components/PopularDestinationBanner.jsx
import React from 'react';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

const PopularDestinationBanner = ({ backgroundImage, destinationImage, destinationName, location, description }) => {
  return (
    <div className="relative w-full h-96 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-50 rounded-lg flex items-center p-6">
        <div className="w-1/3 h-full">
          <img src={destinationImage} alt={destinationName} className="h-full w-full object-cover rounded-lg shadow-lg" />
        </div>

        <div className="w-2/3 text-white pl-8">
          <div className="mb-4">
            <span className="inline-block bg-yellow-500 text-black font-poppins font-bold px-4 py-1 rounded-full text-sm">Wisata Terpopuler</span>
          </div>

          <h2 className="text-4xl font-bold font-poppins mb-2">{destinationName}</h2>
          <p className="text-lg font-poppins mb-4">{location}</p>
          <p className="text-sm font-light font-poppins mb-8">{description}</p>

          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white font-poppins font-medium px-6 py-2 rounded-full shadow-lg hover:bg-blue-600">Lihat Selengkapnya</button>
            <button className="text-white hover:text-red-500 transition">
              <AiOutlineHeart size={24} />
            </button>
            <button className="text-white hover:text-blue-500 transition">
              <AiOutlineShareAlt size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationBanner;
