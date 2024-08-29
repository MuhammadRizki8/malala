const PromotionalBanner = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className=" mx-auto min-h-48 flex flex-col lg:flex-row space-x-4 items-center justify-between  px-4 sm:px-6 lg:px-8 text-white ">
        {/* Text and Button Section */}
        <div className="h-48 lg:h-64 lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0 relative bg-cover bg-center rounded-md" style={{ backgroundImage: `url('https://freerangestock.com/sample/143221/beach-from-above.jpg')` }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 p-6">
            <h2 className="text-xs sm:text-lg md:text-xl lg:text-2xl font-medium font-poppins mb-4">Pesan perjalanan wisata yang sempurna dengan pemandu, kiat perjalanan, informasi destinasi, dan inspirasi dari kami.</h2>
            <button className="text-xs sm:text-base bg-white text-green-600 font-semibold py-2 px-6 rounded-full shadow-lg transition transform hover:bg-gray-200 hover:-translate-y-1">Pesan Sekarang</button>
          </div>
        </div>

        {/* Video Section */}
        <div className="hidden lg:block lg:w-1/3">
          <div className="w-full h-40 md:h-48 lg:h-64 rounded-md overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dn8-9l6WauQ?si=SUSmcf3jRxNgFh9b"
              title="Promotional Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="width-full text-center mt-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold font-poppins text-slate-700">Jelajahi Keindahan Budaya Alam Minang</h3>
        <p className="text-green-600">Temukan destinasi wisata dan pengalaman baru</p>
      </div>
    </section>
  );
};

export default PromotionalBanner;
