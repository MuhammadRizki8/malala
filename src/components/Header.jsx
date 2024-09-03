import PropTypes from 'prop-types';

const Header = ({ backgroundImage, title }) => {
  return (
    <div
      className="w-full h-[22vh] sm:h-[25vh] md:h-[32vh] bg-cover bg-center relative flex items-end"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay to darken the image */}
      <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60"></div>

      <div className="relative mx-auto w-full max-w-screen-xl text-white p-6 rounded-md">
        <h1 className="text-center md:text-start text-2xl sm:text-3xl font-bold font-poppins">{title}</h1>
      </div>
    </div>
  );
};

Header.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
