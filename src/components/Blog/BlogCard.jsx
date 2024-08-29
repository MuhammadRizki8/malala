import PropTypes from 'prop-types'; // Import PropTypes

const BlogCard = ({ image, title, highlight }) => {
  return (
    <div className=" relative w-full h-36 sm:h-44 lg:h-64 bg-cover bg-center rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-sm flex flex-col justify-end p-4">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold md:font-bold font-poppins text-white mb-2">{title}</h3>
        <p className="text-white text-xs sm:text-sm font-poppins line-clamp-3 overflow-hidden">{highlight}</p>
      </div>
    </div>
  );
};

// PropTypes validation
BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};

export default BlogCard;
