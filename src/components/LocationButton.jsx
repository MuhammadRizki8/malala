import { useRef } from 'react';
import PropTypes from 'prop-types';

const LocationButton = ({ location, activeLocation, setActiveLocation }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    setActiveLocation(location);

    // Scroll button to center
    buttonRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest', // Makes sure the button stays visible but centers it
      inline: 'center', // Centers horizontally
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`whitespace-nowrap px-6 py-2 rounded-full font-poppins font-medium ${
        activeLocation.name === location.name ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border border-green-600'
      } transition duration-300 transform hover:scale-105 ml-2 sm:mb-4`}
      onClick={handleClick}
    >
      {location.name}
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
