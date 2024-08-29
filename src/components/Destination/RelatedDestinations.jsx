import React from 'react';
import RelatedDestinationCard from './RelatedDestinationCard';

const RelatedDestinations = () => {
  const destinations = [
    {
      image: 'https://example.com/image1.jpg',
      title: 'Istano Basa Pagaruyung',
      location: 'Pagaruyung, Tanah Datar',
    },
    {
      image: 'https://example.com/image2.jpg',
      title: 'Jam Gadang',
      location: 'Bukittinggi',
    },
  ];

  return (
    <div className="max-w-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Destinasi Lainnya</h2>
        <Link to="/" className="text-green-700 hover:text-green-800">
          Lihat Semua
        </Link>
      </div>
      <div className="space-y-4">
        {destinations.map((destination, index) => (
          <RelatedDestinationCard key={index} image={destination.image} title={destination.title} location={destination.location} />
        ))}
      </div>
    </div>
  );
};

export default RelatedDestinations;
