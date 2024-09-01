import PropTypes from 'prop-types';

const DestinationCardRec = ({ title, location, imageUrl }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <img src={imageUrl} alt={title} className="w-full h-40 sm:h-60 object-cover" />

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-gray-300">{location}</p>
      </div>

      {/* Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
        <button className="text-xs md:text-base bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300">Lihat Selengkapnya</button>
      </div>
    </div>
  );
};

// PropTypes validation
DestinationCardRec.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default DestinationCardRec;
