import { useRef } from 'react';
import PropTypes from 'prop-types';

const LocationButton = ({ location, activeLocation, setActiveLocation }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    setActiveLocation(location);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative whitespace-nowrap px-2 py-1 sm:px-2 sm:py-2 rounded-full font-poppins font-medium overflow-hidden ${
        activeLocation.name === location.name ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border border-green-600'
      } transition duration-300 transform hover:scale-105 ml-1 sm:ml-2 sm:mb-4
    before:absolute before:inset-0 before:bg-green-700 before:rounded-full before:scale-0 before:transition before:duration-500 before:origin-center before:content-[''] hover:before:scale-100
    hover:text-white`}
      onClick={handleClick}
    >
      <span className="relative z-10 text-sm sm:text-base">
        <span className="block sm:hidden">•</span> {/* Tampilkan titik pada layar kecil */}
        <span className="hidden sm:block">{location.name}</span> {/* Tampilkan nama lokasi pada layar besar */}
      </span>
    </button>
  );
};

// PropTypes validation
LocationButton.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  activeLocation: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  setActiveLocation: PropTypes.func.isRequired,
};

export default LocationButton;
