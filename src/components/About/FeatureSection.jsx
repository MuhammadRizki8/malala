import { FaListAlt, FaAward, FaUserTie, FaHandHoldingUsd } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="bg-green-800 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        {/* Feature 1 */}
        <div className="bg-green-600 p-6 rounded-lg flex flex-col items-center justify-center">
          <div className="text-white mb-2">
            {/* Icon for Feature 1 */}
            <FaListAlt className="text-4xl" />
          </div>
          <p className="text-white text-center">Paket Lengkap Untuk Semua Keinginan Anda</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-green-600 p-6 rounded-lg flex flex-col items-center justify-center">
          <div className="text-white mb-2">
            {/* Icon for Feature 2 */}
            <FaAward className="text-4xl" />
          </div>
          <p className="text-white text-center">Pengalaman Lebih Dari 5 Tahun</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-green-600 p-6 rounded-lg flex flex-col items-center justify-center">
          <div className="text-white mb-2">
            {/* Icon for Feature 3 */}
            <FaUserTie className="text-4xl" />
          </div>
          <p className="text-white text-center">Panduan Pakar Untuk Anda</p>
        </div>

        {/* Feature 4 */}
        <div className="bg-green-600 p-6 rounded-lg flex flex-col items-center justify-center">
          <div className="text-white mb-2">
            {/* Icon for Feature 4 */}
            <FaHandHoldingUsd className="text-4xl" />
          </div>
          <p className="text-white text-center">Dijamin Menyenangkan dengan Harga Terbaik!</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
