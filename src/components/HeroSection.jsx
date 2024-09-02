import heroImage from '../assets/images/pagaruyung3.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] sm:h-screen w-full bg-center bg-cover bg-fixed" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4">
        <p className="max-w-screen-lg text-white text-xs md:text-lg lg:text-2xl font-light font-poppins text-center mb-8">Jelajahi Budaya dan Alam Minangkabau bersama</p>
        <h1 className="max-w-screen-lg text-white text-5xl md:text-7xl lg:text-8xl font-normal font-poppins text-center mb-4 md:w-11/12 lg:w-3/4">MALALA</h1>

        <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl flex flex-row items-center p-2 space-y-2 sm:space-y-0 sm:space-x-2 bg-transparent rounded-sm">
          <div className="flex p-2 w-full space-x-2 sm:space-x-4 rounded-sm items-center transition-all duration-300 hover:bg-gray-800 hover:rounded-md">
            <input
              className="bg-transparent border-b border-gray-300 outline-none flex-1 min-w-0 text-sm sm:text-base placeholder-gray-200 text-gray-300 focus:text-white transition-colors duration-300"
              type="text"
              placeholder="Cari destinasi.."
            />
          </div>

          <div className="bg-green-800 hover:bg-green-700 p-2 sm:px-4 text-white font-semibold rounded-full hover:shadow-lg transition duration-300 cursor-pointer sm:w-auto text-center transform hover:scale-105">
            <span className="text-sm sm:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
