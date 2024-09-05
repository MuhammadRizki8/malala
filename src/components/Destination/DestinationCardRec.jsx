import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DestinationCardRec = ({ title, location, imageUrl, buttonText = 'Lihat Selengkapnya' }) => {
  return (
    <div className="relative w-full rounded-sm overflow-hidden shadow-lg">
      {/* Image Section */}
      <img src={imageUrl} alt={title} className="w-full h-40 sm:h-56 object-cover" />

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex flex-col justify-center px-4">
        <h2 className="font-volkhov text-white text-xl font-bold">{title}</h2>
        <p className="text-gray-300 dark:text-gray-400">{location}</p>
      </div>

      {/* Button */}
      <Link to="/onprogress" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="text-xs md:text-base bg-green-500 dark:bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-md hover:bg-green-600 dark:hover:bg-green-700 transition duration-300">{buttonText}</button>
      </Link>
    </div>
  );
};

// PropTypes validation
DestinationCardRec.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string, // Optional prop with a default value
};

export default DestinationCardRec;
