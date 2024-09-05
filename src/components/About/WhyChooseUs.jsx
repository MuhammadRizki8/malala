import { FiCheckCircle, FiCalendar, FiHeadphones, FiMapPin, FiStar, FiUsers } from 'react-icons/fi';

const WhyChooseUs = () => {
  return (
    <section className="text-center py-12 max-w-7xl mx-4 md:mx-auto">
      <h2 className="text-2xl lg:text-3xl font-volkhov font-bold mb-4 dark:text-gray-100">Mengapa Memilih Malala?</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Nikmati perjalanan wisata yang tak terlupakan bersama kami</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Informasi Terlengkap */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4" data-aos="flip-right">
            <FiCheckCircle size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Informasi Terlengkap</h3>
          <p className="text-gray-600 dark:text-gray-300">Kami menyediakan informasi terperinci dan akurat tentang setiap destinasi wisata di Minangkabau.</p>
        </div>

        {/* Card 2 - Kemudahan Akses */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4" data-aos="flip-right">
            <FiCalendar size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Kemudahan Akses</h3>
          <p className="text-gray-600 dark:text-gray-300">Antarmuka platform kami memudahkan Anda dalam merencanakan perjalanan ke berbagai destinasi eksotis.</p>
        </div>

        {/* Card 3 - Layanan 24/7 */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4" data-aos="flip-right">
            <FiHeadphones size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Customer Service 24/7</h3>
          <p className="text-gray-600 dark:text-gray-300">Tim kami siap membantu Anda kapan saja, memberikan solusi terbaik untuk perjalanan wisata Anda.</p>
        </div>

        {/* Card 4 - Destinasi Autentik */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4" data-aos="flip-right">
            <FiMapPin size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Destinasi Autentik</h3>
          <p className="text-gray-600 dark:text-gray-300">Jelajahi keindahan tersembunyi Minangkabau yang jarang dijelajahi oleh wisatawan biasa.</p>
        </div>

        {/* Card 5 - Pengalaman Wisata Terbaik */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4" data-aos="flip-right">
            <FiStar size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Pengalaman Wisata Terbaik</h3>
          <p className="text-gray-600 dark:text-gray-300">Dengan penilaian bintang 5 dari pelanggan, kami berkomitmen memberikan pengalaman yang mengesankan.</p>
        </div>

        {/* Card 6 - Pemandu Profesional */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4" data-aos="flip-right">
            <FiUsers size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Pemandu Profesional</h3>
          <p className="text-gray-600 dark:text-gray-300">Ditemani oleh pemandu lokal yang berpengalaman, siap membantu Anda memahami lebih dalam budaya Minang.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
