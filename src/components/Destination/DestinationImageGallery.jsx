import dummyImage from '../../assets/images/pagaruyung3.jpg';
import { FaStar, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

const DestinationImageGallery = () => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className={`w-4 h-4 sm:w-3 sm:h-3 ${i <= 4 ? 'text-yellow-500' : 'text-gray-300'}`} />);
    }
    return stars;
  };

  return (
    <>
      <div className="relative border-b mt-6 py-6 bg-white max-w-7xl mx-auto">
        {/* Tombol Kembali */}
        <a href="/destinations" className="mb-2 flex items-center text-green-700 hover:text-green-900">
          <FaArrowLeft className="mr-1 w-3 md:w-4" />
          <span className="text-xs md:text-sm lg:text-base">Kembali</span>
        </a>

        {/* Informasi Tujuan */}
        <h1 className="text-xl md:text-2xl font-semibold md:font-bold text-green-700 mb-4">Nagari Saribu Rumah Gadang</h1>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaMapMarkerAlt className="mr-1 text-green-600 w-4 sm:w-3 sm:h-4" />
          <p>Solok</p>
          <span className="mx-2">|</span>
          {renderStars()}
          <span className="ml-2">(348 ulasan)</span>
        </div>

        {/* Grid untuk gambar utama dan thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Gambar utama - 3 kolom pada layar besar */}
          <div className="lg:col-span-3 lg:max-h-[530px]">
            <img className="h-full object-cover w-full rounded-lg shadow-lg" src={dummyImage} alt="Nagari Saribu Rumah Gadang" />
          </div>

          {/* Thumbnails - 1 kolom pada layar besar */}
          <div className="grid grid-cols-5 lg:grid-cols-1 gap-4 lg:max-h-[530px] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-transparent scrollbar-corner-transparent ">
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src={dummyImage} alt="Thumbnail 1" />
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src={dummyImage} alt="Thumbnail 2" />
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src={dummyImage} alt="Thumbnail 3" />
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src={dummyImage} alt="Thumbnail 4" />
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src={dummyImage} alt="Thumbnail 5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationImageGallery;
