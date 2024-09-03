import { useState, useEffect, useMemo } from 'react';
import DestinationCard from '../Destination/DestinationCard';
import data from '../../data/data.json';
import LocationButton from './LocationButton';
import InfoPanel from './InfoPanel';

const LocationSection = () => {
  const [activeLocation, setActiveLocation] = useState(data.locations[2]);
  const [Destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations(data.Destinations.slice(0, 4));
  }, []);

  // Memoize activeLocation to avoid recalculation on every render
  const filteredDestinations = useMemo(() => Destinations.filter((dest) => dest.locationId === activeLocation.id), [Destinations, activeLocation]);

  return (
    <section className="py-16 w-full sm:w-10/12 flex flex-col justify-center items-center mx-auto">
      <div className="text-center mb-4 max-w-2xl">
        <h2 className="font-volkhov text-xl md:text-3xl lg:text-4xl font-medium font-poppins mb-4 text-green-600">Jelajahi Destinasi Wisata Menarik</h2>
        <p className="text-sm px-6 md:text-base font-light font-poppins">Rencanakan perjalanan wisata anda dengan panduan, kiat perjalanan, informasi destinasi, dan inspirasi dari kami.</p>
      </div>

      {/* Dropdown or Buttons for Locations */}
      <div className="mb-2 w-full max-w-3xl">
        {/* Dropdown for small screens */}
        <div className="sm:hidden mx-2">
          <select
            className="w-2/3  py-2 border rounded-md text-gray-700 bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
            value={activeLocation.name}
            onChange={(e) => {
              const selectedLocation = data.locations.find((location) => location.name === e.target.value);
              setActiveLocation(selectedLocation);
            }}
          >
            {data.locations.map((location, index) => (
              <option key={index} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons for larger screens */}
        <div className="hidden sm:flex pt-1 flex-wrap space-x-4 justify-center" data-aos="fade-up" data-aos-delay="200">
          {data.locations.map((location, index) => (
            <LocationButton key={index} location={location} activeLocation={activeLocation} setActiveLocation={setActiveLocation} />
          ))}
        </div>
      </div>

      {/* Image and InfoPanel */}
      <div className="relative w-full max-w-screen-lg mx-auto mb-24" data-aos="fade-up" data-aos-delay="400">
        <img src={activeLocation.image} alt={activeLocation.name} className="w-full shadow-lg h-96 object-cover" />
        <InfoPanel name={activeLocation.name} description={activeLocation.description} categories={activeLocation.categories} />
      </div>

      {/* Related Destinations */}
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="flex flex-col items-start sm:flex-row justify-between sm:items-center mb-4">
          <h3 className="dark:text-slate-400 text-xl sm:text-2xl font-medium font-poppins">Destinasi Terkait</h3>
          <button className="text-xs sm:text-base text-green-600 font-poppins transition duration-300 transform hover:scale-105">Lihat Semua</button>
        </div>

        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
