// src/components/LocationSection.jsx
import React, { useState } from 'react';

// Gambar dummy untuk lokasi dan destinasi (gantikan dengan gambar yang sesuai)
import solokImage from '../assets/images/solok.jpg';
import padangImage from '../assets/images/padang.jpg';
import bukittinggiImage from '../assets/images/bukittinggi.jpeg';

import relatedImage from '../assets/images/solok.jpg'; // Dummy image for related destinations
import DestinationCard from './DestinationCard';
const locations = [
  {
    name: 'Solok',
    image: solokImage,
    description: 'Solok dikenal dengan keindahan alamnya yang menakjubkan, seperti Danau Singkarak dan perkebunan teh yang luas.',
    categories: ['Alam', 'Kuliner', 'Budaya'],
  },
  {
    name: 'Padang',
    image: padangImage,
    description: 'Padang, ibu kota Sumatera Barat, menawarkan pesona pantai yang memukau serta kekayaan kuliner yang tak tertandingi.',
    categories: ['Pantai', 'Kuliner', 'Sejarah'],
  },
  {
    name: 'Bukittinggi',
    image: bukittinggiImage,
    description: 'Bukittinggi terkenal dengan Jam Gadang, ikon sejarah yang dikelilingi oleh keindahan alam dan kebudayaan Minangkabau.',
    categories: ['Sejarah', 'Alam', 'Budaya'],
  },
];

const relatedDestinations = [
  {
    name: 'Danau Singkarak',
    location: 'Solok',
    image: relatedImage,
    rating: 4.7,
    reviews: 340,
  },
  // Duplicate the object for demonstration purposes
  {
    name: 'Danau Singkarak',
    location: 'Solok',
    image: relatedImage,
    rating: 4.7,
    reviews: 340,
  },
  {
    name: 'Danau Singkarak',
    location: 'Solok',
    image: relatedImage,
    rating: 4.7,
    reviews: 340,
  },
  {
    name: 'Danau Singkarak',
    location: 'Solok',
    image: relatedImage,
    rating: 4.7,
    reviews: 340,
  },
];

const LocationSection = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">Jelajahi Destinasi Wisata Menarik</h2>
        <p className="text-lg md:text-xl font-light font-poppins">Rencanakan perjalanan wisata anda dengan panduan, kiat perjalanan, informasi destinasi, dan inspirasi dari kami.</p>
      </div>

      <div className="flex justify-center mb-8">
        {locations.map((location, index) => (
          <button key={index} className={`px-6 py-2 mx-2 rounded-full font-poppins font-medium ${activeLocation.name === location.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => setActiveLocation(location)}>
            {location.name}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-4xl mx-auto mb-12">
        <img src={activeLocation.image} alt={activeLocation.name} className="w-full rounded-lg shadow-lg" />

        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 rounded-b-lg text-white">
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
          <button className="text-blue-500 font-poppins">Lihat Semua</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedDestinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
