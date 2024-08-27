import React from 'react';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

const PopularDestinationBanner = ({ backgroundImage, destinationImage, destinationName, location, description }) => {
  return (
    <div className="w-full h-[70vh] bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col md:flex-row items-center p-6 h-full max-w-7xl mx-auto">
        <div className="w-full lg:w-2/4 h-1/2 lg:h-full mb-6 lg:mb-0">
          <img src={destinationImage} alt={destinationName} className="h-full w-full object-cover " />
        </div>

        <div className="w-full lg:w-2/4 text-white lg:pl-8">
          <div className="mb-4">
            <span className="inline-block bg-green-800 text-white font-poppins font-bold px-4 py-1 rounded-full text-sm">Wisata Terpopuler</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-medium font-poppins mb-2">{destinationName}</h2>
          <p className="text-base lg:text-lg font-poppins mb-4">{location}</p>
          <p className="text-xs lg:text-sm font-light font-poppins mb-8">{description}</p>

          <div className="flex items-center space-x-4">
            <button className="bg-green-700 text-white font-poppins font-medium px-4 lg:px-6 py-2 rounded-full shadow-lg hover:bg-green-800">Lihat Selengkapnya</button>
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
