import PropTypes from 'prop-types'; // Import PropTypes
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

const PopularDestinationBanner = ({ backgroundImage, destinationImage, destinationName, location, description }) => {
  return (
    <div className="py-6 w-full lg:h-[70vh] bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col sm:flex-row items-center lg:p-6 h-full max-w-7xl mx-auto">
        <div className="h-1/3 lg:h-full px-10 py-2">
          <img src={destinationImage} alt={destinationName} className="h-full object-contain lg:object-cover" />
        </div>

        <div className="pr-10 py-0 sm:py-4 px-10 w-full lg:w-2/4 text-white">
          <div className="mb-1 sm:mb-4">
            <span className="inline-block text-xs font-normal sm:text-base bg-green-800 text-white font-poppins md:font-bold px-4 py-1 rounded-full">Wisata Terpopuler</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-medium font-poppins mb-1 md:mb-2">{destinationName}</h2>
          <div className="flex items-baseline">
            <FaMapMarkerAlt className="mr-1 text-green-600 w-3 h-3 sm:w-5 sm:h-5" />
            <p className="text-xs lg:text-lg font-poppins mb-4">{location}</p>
          </div>

          <p className="text-xs lg:text-sm font-light font-poppins mb-2 sm:mb-8">{description}</p>

          <div className="flex items-center space-x-1 md:space-x-4">
            <button className="text-xs md:text-base bg-green-700 text-white font-poppins font-medium px-4 lg:px-6 py-2 rounded-full shadow-lg hover:bg-green-800">Lihat Selengkapnya</button>
            <button className="text-white hover:text-red-500 transition">
              <AiOutlineHeart size={24} />
            </button>
            <button className="text-white hover:text-blue-500 transition">
              <AiOutlineShareAlt size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
PopularDestinationBanner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  destinationImage: PropTypes.string.isRequired,
  destinationName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PopularDestinationBanner;
