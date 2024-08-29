import { FiCheckCircle, FiCalendar, FiHeadphones } from 'react-icons/fi';

const WhyChooseUs = () => {
  return (
    <section className="text-center py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mengapa Memilih Kami?</h2>
      <p className="text-gray-600 mb-8">Destinasi populer ini memiliki banyak hal untuk ditawarkan</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4">
            <FiCheckCircle size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Informasi Terlengkap</h3>
          <p className="text-gray-600">Informasi yang akurat dan terupdate tentang setiap destinasi wisata</p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4">
            <FiCalendar size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Kemudahan Akses</h3>
          <p className="text-gray-600">Antarmuka yang user-friendly dan mudah digunakan</p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="text-green-500 mb-4">
            <FiHeadphones size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Service 24/7</h3>
          <p className="text-gray-600">Kami siap siaga melayani kebutuhan informasi Anda</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
