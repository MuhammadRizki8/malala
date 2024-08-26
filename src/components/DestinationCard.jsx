// src/components/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ image, location, name, rating, reviews }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold font-poppins mb-2">{name}</h3>
        <p className="text-gray-600 font-poppins">{location}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.259 3.877a1 1 0 00.95.69h4.11c.969 0 1.371 1.24.588 1.81l-3.32 2.42a1 1 0 00-.364 1.118l1.26 3.878c.3.92-.755 1.688-1.54 1.118l-3.32-2.42a1 1 0 00-1.175 0l-3.32 2.42c-.784.57-1.84-.198-1.54-1.118l1.259-3.878a1 1 0 00-.364-1.118l-3.32-2.42c-.783-.57-.381-1.81.588-1.81h4.11a1 1 0 00.95-.69l1.259-3.877z" />
            </svg>
            <span className="ml-2 text-gray-800 font-poppins">{rating}</span>
          </div>
          <p className="ml-2 text-sm text-gray-600 font-poppins">({reviews} reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
