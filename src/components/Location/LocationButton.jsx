import PropTypes from 'prop-types';

const LocationButton = ({ location, activeLocation, setActiveLocation }) => {
  const isActive = activeLocation.name === location.name;

  return (
    <button
      className={`relative whitespace-nowrap px-2 py-1 sm:px-2 sm:py-2 rounded-full font-poppins font-medium transition duration-300 transform hover:scale-105 ml-1 sm:ml-2 sm:mb-4
        ${isActive ? 'bg-green-700 text-white ' : 'bg-white text-gray-700 border border-green-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600'}
        hover:bg-green-700 hover:text-white dark:hover:bg-green-700`}
      onClick={() => setActiveLocation(location)}
    >
      <span className="text-sm sm:text-base">{location.name}</span>
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
