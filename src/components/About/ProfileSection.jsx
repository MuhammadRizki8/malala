const ProfileSection = () => {
  return (
    <section className="mt-12 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Image */}
        <div className="flex items-center justify-center">
          <img
            src="https://asset.kompas.com/crops/Z8hXwE-DKzO902r9PP89esSDYZo=/0x0:750x500/750x500/data/photo/2022/01/30/61f642eb1956b.jpg"
            alt="Malala"
            className="shadow-lg w-full object-cover h-64 sm:h-80 md:h-96"
            data-aos="fade-up-right"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center md:pr-10" data-aos="fade-up">
          <h2 className="text-lg text-green-500 dark:text-green-400 font-semibold">Selamat Datang di Website Kami</h2>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 font-volkhov">Tentang Malala</h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
            <span className="font-volkhov text-green-700 dark:text-green-600 font-bold">Malala </span> adalah platform terbaik untuk menjelajahi keindahan Minang dan Sumatra Barat. Kami berdedikasi untuk menyediakan pengalaman wisata yang
            tak terlupakan dengan berbagai pilihan paket yang dirancang khusus untuk memenuhi kebutuhan liburan Anda.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center md:text-right md:pl-10" data-aos="fade-up-right">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Menyajikan Keindahan Minang yang Autentik untuk Anda</h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
            Kami berada tepat di jantung Minang, siap menyuguhkan pengalaman nyata kehidupan kota! Dengan bertahun-tahun pengalaman di hampir setiap sektor pariwisata, kami menawarkan paket lengkap dengan harga terendah untuk berwisata,
            belajar, dan bersenang-senang tanpa khawatir dan tanpa stres.
          </p>

          {/* Stats Section */}
          <div className="flex justify-start md:justify-end space-x-0 md:space-x-5 text-center text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="700">
            <div className="flex flex-col">
              <h3 className="text-base sm:text-2xl font-bold text-green-500 dark:text-green-400">5+</h3>
              <p className="text-[10px] sm:text-base">Tahun Pengalaman</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-2xl font-bold text-green-500 dark:text-green-400">10+</h3>
              <p className="text-[10px] sm:text-base">Pemandu Profesional</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-2xl font-bold text-green-500 dark:text-green-400">10K+</h3>
              <p className="text-[10px] sm:text-base">Ulasan Pengguna</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-2xl font-bold text-green-500 dark:text-green-400">50+</h3>
              <p className="text-[10px] sm:text-base">Event Budaya</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center" data-aos="fade-up">
          <img src="https://akcdn.detik.net.id/visual/2020/09/18/potensi-wisata-pedesaan-lembah-harau-2_169.jpeg?w=650" alt="Keindahan Minang" className="shadow-lg w-full object-cover h-64 sm:h-80 md:h-96" />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
