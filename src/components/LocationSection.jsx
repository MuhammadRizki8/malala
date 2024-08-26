import React, { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import data from '../data/data.json';

const LocationSection = () => {
  const [activeLocation, setActiveLocation] = useState(data.locations[0]);
  const [locations, setLocations] = useState([]);
  const [relatedDestinations, setRelatedDestinations] = useState([]);

  useEffect(() => {
    setLocations(data.locations);
    setRelatedDestinations(data.relatedDestinations);
  }, []);

  return (
    <section className="py-16 w-full md:w-10/12 flex flex-col justify-center items-center mx-auto">
      <div className="text-center mb-8 max-w-2xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-poppins mb-4">Jelajahi Destinasi Wisata Menarik</h2>
        <p className="text-base md:text-lg font-light font-poppins">Rencanakan perjalanan wisata anda dengan panduan, kiat perjalanan, informasi destinasi, dan inspirasi dari kami.</p>
      </div>

      <div className="flex justify-center mb-8">
        {locations.map((location, index) => (
          <button
            key={index}
            className={`px-6 py-2 mx-2 rounded-full font-poppins font-medium ${activeLocation.name === location.name ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 transform hover:scale-105`}
            onClick={() => setActiveLocation(location)}
          >
            {location.name}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-screen-lg mx-auto mb-20">
        <img src={activeLocation.image} alt={activeLocation.name} className="w-full shadow-lg h-96 object-cover" />

        <div className="absolute -bottom-16 left-0 right-0 mx-auto bg-slate-500 bg-opacity-80 p-6 text-white w-11/12">
          <h3 className="text-2xl font-bold font-poppins mb-2">{activeLocation.name}</h3>
          <p className="mb-4">{activeLocation.description}</p>
          <div className="flex flex-wrap">
            {activeLocation.categories.map((category, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-poppins mr-2 mb-2">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold font-poppins">Destinasi Terkait</h3>
          <button className="text-blue-500 font-poppins transition duration-300 transform hover:scale-105">Lihat Semua</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedDestinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
