import { FaTag, FaStar, FaMapMarkerAlt, FaClock, FaMoneyBillAlt, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const DestinationInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
          <FaTag className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Kategori</p>
            <p className="text-lg font-semibold">Kultural</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaStar className="text-yellow-500 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Rating</p>
            <p className="text-lg font-semibold">4,9</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Location</p>
            <p className="text-lg font-semibold">Solok Selatan</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaMoneyBillAlt className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Harga Tiket</p>
            <p className="text-lg font-semibold">Rp 20,000</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaClock className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Jam Buka</p>
            <p className="text-lg font-semibold">10:00 - 17:00 (Senin-Kamis)</p>
            <p className="text-lg font-semibold">08:00 - 17:00 (Jumat-Minggu)</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Kontak</p>
            <p className="text-lg font-semibold">Telepon: +62 751 456789</p>
            <div className="flex items-center">
              <FaGlobe className="text-green-700 w-4 h-4 mr-2" />
              <p className="text-lg font-semibold">Website: nagari1000rumahgadang.go.id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">Description</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Nagari 1000 Rumah Gadang, terletak di Solok Selatan, Sumatra Barat, adalah sebuah kawasan wisata yang menawarkan pengalaman mendalam ke dalam kebudayaan Minangkabau yang otentik. Kawasan ini terkenal dengan deretan Rumah Gadang,
          rumah adat tradisional Minangkabau yang megah dan berornamen khas.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Setiap Rumah Gadang di sini memiliki ciri arsitektur yang unik, dengan atap berbentuk gonjong menyerupai tanduk kerbau yang melambangkan kekuatan dan kebijaksanaan. Berjalan di antara deretan rumah-rumah ini, pengunjung akan
          merasakan atmosfer masa lalu yang masih terjaga dengan baik, seolah-olah waktu berhenti dan membawa mereka kembali ke zaman kerajaan Minangkabau yang penuh kemegahan.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Selain menikmati keindahan arsitektur, pengunjung juga dapat menyaksikan berbagai kegiatan budaya yang masih dilestarikan oleh penduduk setempat. Mulai dari upacara adat hingga pertunjukan seni tradisional, setiap sudut Nagari
          1000 Rumah Gadang memancarkan kekayaan budaya yang mendalam. Dengan latar belakang pegunungan dan alam yang hijau, desa ini juga menawarkan pemandangan alam yang menakjubkan, menjadikannya tempat yang sempurna untuk merasakan
          harmoni antara manusia dan alam. Nagari 1000 Rumah Gadang bukan hanya sekedar destinasi wisata, tetapi juga jendela yang membuka wawasan tentang bagaimana budaya dan tradisi masih dihormati dan dijaga di tengah arus modernisasi.
        </p>
      </div>
    </div>
  );
};

export default DestinationInfo;
