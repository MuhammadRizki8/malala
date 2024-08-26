import React from 'react';

const PromotionalBanner = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-blue-500 text-white py-12 px-6 lg:px-16 rounded-lg shadow-lg my-8">
      {/* Text and Button Section */}
      <div className="lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-4">Pesan perjalanan wisata yang sempurna dengan pemandu, kiat perjalanan, informasi destinasi, dan inspirasi dari kami.</h2>
        <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg transition transform hover:bg-gray-200 hover:-translate-y-1">Pesan Sekarang</button>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/3">
        <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dn8-9l6WauQ?si=SUSmcf3jRxNgFh9b"
            title="Promotional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dn8-9l6WauQ?si=SUSmcf3jRxNgFh9b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
