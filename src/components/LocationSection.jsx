import { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import data from '../data/data.json';
import LocationButton from './LocationButton';
import InfoPanel from './InfoPanel';

const LocationSection = () => {
  const [activeLocation, setActiveLocation] = useState(data.locations[3]);
  const [locations, setLocations] = useState([]);
  const [relatedDestinations, setRelatedDestinations] = useState([]);

  useEffect(() => {
    setLocations(data.locations);
    setRelatedDestinations(data.relatedDestinations);
  }, []);

  return (
    <section className="py-16 w-full sm:w-10/12 flex flex-col justify-center items-center mx-auto">
      <div className="text-center mb-4 max-w-2xl">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-medium font-poppins mb-4 text-green-600">Jelajahi Destinasi Wisata Menarik</h2>
        <p className="text-sm px-6 md:text-base font-light font-poppins">Rencanakan perjalanan wisata anda dengan panduan, kiat perjalanan, informasi destinasi, dan inspirasi dari kami.</p>
      </div>

      {/* Tombol Lokasi */}
      <div className="mb-2 w-full max-w-3xl">
        <div className="pt-1 flex flex-nowrap space-x-4 overflow-x-scroll scrollbar-hide w-full sm:flex-wrap justify-center">
          {locations.map((location, index) => (
            <LocationButton key={index} location={location} activeLocation={activeLocation} setActiveLocation={setActiveLocation} />
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-screen-lg mx-auto mb-24">
        <img src={activeLocation.image} alt={activeLocation.name} className="w-full shadow-lg h-96 object-cover" />

        {/* Menggunakan InfoPanel */}
        <InfoPanel name={activeLocation.name} description={activeLocation.description} categories={activeLocation.categories} />
      </div>

      {/*destinasi terkait  */}
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl sm:text-2xl font-medium font-poppins">Destinasi Terkait</h3>
          <button className="text-xs sm:text-base text-green-600 font-poppins transition duration-300 transform hover:scale-105">Lihat Semua</button>
        </div>

        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedDestinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
