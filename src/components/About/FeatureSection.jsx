import { FaListAlt, FaAward, FaUserTie, FaHandHoldingUsd } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="bg-green-800 dark:bg-gray-700 py-12 px-4 transition duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center" data-aos="zoom-in">
        {/* Feature 1 */}
        <div className="bg-green-600 dark:bg-gray-800 p-6 rounded-sm flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
          <div className="text-white dark:text-green-400 mb-4">
            <FaListAlt className="text-5xl" />
          </div>
          <p className="text-white dark:text-gray-200 text-center text-sm md:text-base">Paket Lengkap Untuk Semua Keinginan Anda</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-green-600 dark:bg-gray-800 p-6 rounded-sm flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
          <div className="text-white dark:text-green-400 mb-4">
            <FaAward className="text-5xl" />
          </div>
          <p className="text-white dark:text-gray-200 text-center text-sm md:text-base">Pengalaman Lebih Dari 5 Tahun</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-green-600 dark:bg-gray-800 p-6 rounded-sm flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
          <div className="text-white dark:text-green-400 mb-4">
            <FaUserTie className="text-5xl" />
          </div>
          <p className="text-white dark:text-gray-200 text-center text-sm md:text-base">Panduan Pakar Untuk Anda</p>
        </div>

        {/* Feature 4 */}
        <div className="bg-green-600 dark:bg-gray-800 p-6 rounded-sm flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
          <div className="text-white dark:text-green-400 mb-4">
            <FaHandHoldingUsd className="text-5xl" />
          </div>
          <p className="text-white dark:text-gray-200 text-center text-sm md:text-base">Dijamin Menyenangkan dengan Harga Terbaik!</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
