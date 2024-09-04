import { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import data from '../../data/data.json';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setDestinations(data.Destinations);
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section className="w-full flex flex-col items-center mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.slice(0, visibleCount).map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
      {visibleCount < destinations.length && (
        <button
          onClick={loadMore}
          className="mt-6 w-full px-4 py-2 text-green-600 hover:text-white rounded-sm border border-green-600 hover:bg-green-700 dark:border-green-500 dark:text-green-400 dark:hover:text-white dark:hover:bg-green-600"
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default DestinationList;
