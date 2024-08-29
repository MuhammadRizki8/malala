import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
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
      <div className="border-b mt-14 py-6 bg-white max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Nagari Saribu Rumah Gadang</h1>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaMapMarkerAlt className="mr-1 text-green-600 w-4  sm:w-3 sm:h-4" />
          <p>Solok</p>
          <span className="mx-2">|</span>
          {renderStars()}
          <span className="ml-2">(348 ulasan)</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-10/12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Seribu_Rumah_Gadang.jpg" alt="Nagari Saribu Rumah Gadang" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Seribu_Rumah_Gadang.jpg" alt="Thumbnail 1" className="w-full h-24 md:h-32 rounded-lg shadow-md object-cover" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Seribu_Rumah_Gadang.jpg" alt="Thumbnail 2" className="w-full h-24 md:h-32 rounded-lg shadow-md object-cover" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Seribu_Rumah_Gadang.jpg" alt="Thumbnail 3" className="w-full h-24 md:h-32 rounded-lg shadow-md object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationImageGallery;
