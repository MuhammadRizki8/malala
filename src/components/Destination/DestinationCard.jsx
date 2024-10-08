import PropTypes from 'prop-types';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DestinationCard = ({ image, location, name, rating, reviews }) => {
  // Fungsi untuk menghasilkan array bintang yang diisi dengan warna kuning sesuai rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => <FaStar key={i} className={`w-4 h-4 sm:w-3 sm:h-3 ${i + 1 <= rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-500'}`} />);
  };

  return (
    <Link to="/destinations/detail" className="bg-white dark:bg-slate-800 border dark:border-slate-500 shadow-lg overflow-hidden transition-colors duration-300">
      <div className="overflow-hidden">
        <img src={image} alt={name} className="w-full h-40 sm:h-48 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110" />
      </div>
      <div className="p-4 pt-2">
        <p className="mb-2 text-gray-600 dark:text-slate-300 font-poppins flex items-center">
          <FaMapMarkerAlt className="mr-1 text-green-600 dark:text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">{location}</span>
        </p>
        <h3 className="font-volkhov text-base truncate ... sm:text-lg font-medium font-poppins mb-2 dark:text-slate-100">{name}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            {renderStars()}
            <span className="ml-1 text-gray-800 dark:text-slate-300 font-poppins text-xs sm:text-sm">{rating}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 font-poppins">({reviews} ulasan)</p>
        </div>
      </div>
    </Link>
  );
};

// PropTypes validation
DestinationCard.propTypes = {
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default DestinationCard;
