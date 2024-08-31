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
          <FaArrowLeft className="mr-1" />
          <span>Kembali</span>
        </a>

        {/* Informasi Tujuan */}
        <h1 className="text-2xl font-bold text-green-700 mb-4">Nagari Saribu Rumah Gadang</h1>
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
            <img className="h-full object-cover rounded-lg shadow-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="Nagari Saribu Rumah Gadang" />
          </div>

          {/* Thumbnails - 1 kolom pada layar besar */}
          <div className="grid grid-cols-5 lg:grid-cols-1 gap-4 lg:max-h-[530px] lg:overflow-y-auto">
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Thumbnail 1" />
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="Thumbnail 2" />
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="Thumbnail 3" />
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="Thumbnail 4" />
            <img className="h-auto w-full rounded-lg shadow-md object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="Thumbnail 5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationImageGallery;
