import { FaStar, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';

const DestinationImageGallery = () => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className={`w-4 h-4 sm:w-3 sm:h-3 ${i <= 4 ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`} />);
    }
    return stars;
  };

  const images = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Seribu_Rumah_Gadang.jpg',
      alt: 'Pagaruyung Palace View 1',
    },
    {
      src: 'https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2021/05/RUMAH-GADANG-2.jpg',
      alt: 'Pagaruyung Palace View 3',
    },
    {
      src: 'https://indonesiaexpat.id/wp-content/uploads/2014/07/King-Balun-Palace.jpg',
      alt: 'Pagaruyung Palace View 4',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Saribu_Rumah_Gadang_1.jpg/220px-Saribu_Rumah_Gadang_1.jpg',
      alt: 'Pagaruyung Palace View 5',
    },
  ];

  const ThumbnailImage = ({ src, alt }) => <img className="h-auto w-full rounded-lg shadow-md object-cover" src={src} alt={alt} />;

  return (
    <div className="relative border-b mt-6 py-6 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
      {/* Tombol Kembali */}
      <a href="/destinations" className="mb-2 flex items-center text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-600">
        <FaArrowLeft className="mr-1 w-3 md:w-4" />
        <span className="text-xs md:text-sm lg:text-base">Kembali</span>
      </a>

      {/* Informasi Tujuan */}
      <h1 className="text-xl md:text-2xl font-semibold md:font-bold text-green-700 dark:text-green-400 mb-4">Nagari Saribu Rumah Gadang</h1>
      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
        <FaMapMarkerAlt className="mr-1 text-green-600 dark:text-green-400 w-4 sm:w-3 sm:h-4" />
        <p>Solok</p>
        <span className="mx-2">|</span>
        {renderStars()}
        <span className="ml-2">(348 ulasan)</span>
      </div>

      {/* Grid untuk gambar utama dan thumbnails */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Gambar utama - 3 kolom pada layar besar */}
        <div className="lg:col-span-3 lg:max-h-[530px]">
          <img className="h-full object-cover w-full rounded-lg shadow-lg" src={images[0].src} alt={images[0].alt} />
        </div>

        {/* Thumbnails - 1 kolom pada layar besar */}
        <div className="grid grid-cols-5 lg:grid-cols-1 gap-4 lg:max-h-[530px] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 dark:scrollbar-thumb-green-400 scrollbar-track-transparent scrollbar-corner-transparent">
          {images.map((image, index) => (
            <ThumbnailImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

DestinationImageGallery.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default DestinationImageGallery;
