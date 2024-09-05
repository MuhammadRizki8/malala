import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import ImageBanner from '../../assets/images/imgbanner.png';
import bgBannerImage from '../../assets/images/bg-banner.png';
import { Link } from 'react-router-dom';
const PopularDestinationBanner = ({
  backgroundImage = bgBannerImage,
  destinationImage = ImageBanner,
  destinationName = 'Bukik Soriak',
  location = 'Lima Puluh Kota, Sumatra Barat',
  description = 'Bukik Soriak Land resor terbesar dan termewah di Lembah Harau, Sumatera Barat. Miliki properti idamanmu di sini: hotel, villa, glamping.',
}) => {
  return (
    <div
      className="relative py-6 w-full lg:h-[70vh] bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }} // Parallax effect added here
    >
      <div className="absolute inset-0 dark:bg-black dark:opacity-50"></div> {/* Dark overlay for better text visibility */}
      <div className="relative flex flex-col sm:flex-row items-center lg:p-6 h-full max-w-7xl mx-auto text-white">
        <div className="h-1/3 lg:h-full px-10 py-2">
          <img src={destinationImage} alt={destinationName} className="h-full object-contain lg:object-cover" data-aos="flip-right" data-aos-delay="1000" />
        </div>

        <div className="pr-10 py-0 sm:py-4 px-10 w-full lg:w-2/4">
          <div className="mb-1 sm:mb-4">
            <span className="inline-block text-xs font-normal sm:text-base bg-green-800 dark:bg-green-600 text-white font-poppins md:font-bold px-4 py-1 rounded-full">Wisata Terpopuler</span>
          </div>

          <h2 className="font-volkhov text-3xl lg:text-5xl font-medium font-poppins mb-1 md:mb-3">{destinationName}</h2>
          <div className="flex items-baseline">
            <FaMapMarkerAlt className="mr-1 text-white w-3 h-3 sm:w-5 sm:h-5" />
            <p className="text-xs lg:text-lg font-poppins mb-4">{location}</p>
          </div>

          <p className="text-xs lg:text-sm font-light font-poppins mb-2 sm:mb-8">{description}</p>

          <div className="flex items-center space-x-1 md:space-x-4">
            <Link to="/destinations/detail" className="text-xs md:text-base bg-green-700 dark:bg-green-600 text-white font-poppins font-medium px-4 lg:px-6 py-2 rounded-full shadow-lg hover:bg-green-800 dark:hover:bg-green-700 transition">
              Lihat Selengkapnya
            </Link>
            <button className="text-white hover:text-red-500 dark:hover:text-red-400 transition">
              <AiOutlineHeart size={24} />
            </button>
            <button className="text-white hover:text-blue-500 dark:hover:text-blue-400 transition">
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
  backgroundImage: PropTypes.string,
  destinationImage: PropTypes.string,
  destinationName: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
};

export default PopularDestinationBanner;
