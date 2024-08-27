import PropTypes from 'prop-types';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const DestinationCard = ({ image, location, name, rating, reviews }) => {
  // Fungsi untuk menghasilkan array bintang yang diisi dengan warna kuning sesuai rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className={`w-4 h-4 sm:w-3 sm:h-3 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} />);
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-md shadow-lg overflow-hidden">
      <div className="overflow-hidden">
        <img src={image} alt={name} className="w-full h-40 sm:h-48 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110" />
      </div>
      <div className="p-4">
        <p className="mb-2 text-gray-600 font-poppins flex items-center">
          <FaMapMarkerAlt className="mr-1 text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">{location}</span>
        </p>
        <h3 className="text-base truncate ... sm:text-lg font-medium font-poppins mb-2">{name}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            {renderStars()}
            <span className="ml-2 text-gray-800 font-poppins text-xs sm:text-sm">{rating}</span>
          </div>
          <p className=" text-xs sm:text-sm text-gray-600 font-poppins">({reviews} reviews)</p>
        </div>
      </div>
    </div>
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
