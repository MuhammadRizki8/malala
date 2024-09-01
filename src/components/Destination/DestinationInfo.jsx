import { FaTag, FaStar, FaMapMarkerAlt, FaClock, FaMoneyBillAlt, FaPhoneAlt } from 'react-icons/fa';

const DestinationInfo = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg ">
      {/* Card with information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-200 p-4 md:p-6 rounded-lg shadow-lg">
        <div className="flex items-start">
          <FaTag className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-normal text-gray-500">Kategori</p>
            <p className="text-base font-medium">Kultural</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaStar className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Rating</p>
            <p className="text-base font-medium">4,9</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaMapMarkerAlt className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Lokasi</p>
            <p className="text-base font-medium">Solok Selatan</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaMoneyBillAlt className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Harga Tiket</p>
            <p className="text-base font-medium">Rp 20,000</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaClock className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Jam Buka</p>
            <p className="text-base font-medium">10:00 - 17:00 (Senin-Kamis)</p>
            <p className="text-base font-medium">08:00 - 17:00 (Jumat-Minggu)</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaPhoneAlt className="text-green-700 w-5 h-5 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-500">Kontak</p>
            <p className="text-base font-medium">Telepon: +62 751 456789</p>
            {/* <p className="text-base font-medium ">Website: www.seriburumahgadang.com</p> */}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">Deskripsi</h2>
        <p className="text-xs md:text-base mt-4 text-gray-600 leading-relaxed">
          Nagari 1000 Rumah Gadang, terletak di Solok Selatan, Sumatra Barat, adalah sebuah kawasan wisata yang menawarkan pengalaman mendalam ke dalam kebudayaan Minangkabau yang otentik. Kawasan ini terkenal dengan deretan Rumah Gadang,
          rumah adat tradisional Minangkabau yang megah dan berornamen khas.
        </p>
        <p className="text-xs md:text-base mt-4 text-gray-600 leading-relaxed">
          Setiap Rumah Gadang di sini memiliki ciri arsitektur yang unik, dengan atap berbentuk gonjong menyerupai tanduk kerbau yang melambangkan kekuatan dan kebijaksanaan. Berjalan di antara deretan rumah-rumah ini, pengunjung akan
          merasakan atmosfer masa lalu yang masih terjaga dengan baik, seolah-olah waktu berhenti dan membawa mereka kembali ke zaman kerajaan Minangkabau yang penuh kemegahan.
        </p>
        <p className="text-xs md:text-base mt-4 text-gray-600 leading-relaxed">
          Selain menikmati keindahan arsitektur, pengunjung juga dapat menyaksikan berbagai kegiatan budaya yang masih dilestarikan oleh penduduk setempat. Mulai dari upacara adat hingga pertunjukan seni tradisional, setiap sudut Nagari
          1000 Rumah Gadang memancarkan kekayaan budaya yang mendalam. Dengan latar belakang pegunungan dan alam yang hijau, desa ini juga menawarkan pemandangan alam yang menakjubkan, menjadikannya tempat yang sempurna untuk merasakan
          harmoni antara manusia dan alam. Nagari 1000 Rumah Gadang bukan hanya sekedar destinasi wisata, tetapi juga jendela yang membuka wawasan tentang bagaimana budaya dan tradisi masih dihormati dan dijaga di tengah arus modernisasi.
        </p>
      </div>
    </div>
  );
};

export default DestinationInfo;
