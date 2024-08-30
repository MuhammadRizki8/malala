import { useState, useEffect } from 'react';
import DestinationCard from '../Destination/DestinationCard';
import data from '../../data/data.json';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Jumlah destinasi awal yang ditampilkan

  useEffect(() => {
    setDestinations(data.Destinations);
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Tambah jumlah destinasi yang ditampilkan
  };

  return (
    <section className="w-full flex flex-col items-center mx-auto">
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.slice(0, visibleCount).map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
      {visibleCount < destinations.length && (
        <button onClick={loadMore} className="mt-6  w-full px-4 py-2  text-green-600 hover:text-white rounded-lg border border-green-600 hover:bg-green-700">
          Load More
        </button>
      )}
    </section>
  );
};

export default DestinationList;
