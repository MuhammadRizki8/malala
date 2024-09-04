import { FaTag, FaStar, FaMapMarkerAlt, FaClock, FaMoneyBillAlt, FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InfoCard = ({ icon, title, content }) => (
  <div className="flex items-start">
    {icon}
    <div>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-base font-medium text-gray-800 dark:text-gray-100">{content}</p>
    </div>
  </div>
);

InfoCard.propTypes = {
  icon: PropTypes.node.isRequired, // The icon is expected to be a React node
  title: PropTypes.string.isRequired, // The title is expected to be a string
  content: PropTypes.oneOfType([
    PropTypes.string, // The content can be a string
    PropTypes.node, // The content can also be a React node, which allows for multiple elements
  ]).isRequired,
};

const DestinationInfo = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      {/* Card with information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 bg-slate-200 dark:bg-gray-700 p-4 md:p-6 rounded-sm shadow-md">
        <InfoCard icon={<FaTag className="text-green-700 dark:text-green-400 w-5 h-5 mr-3" />} title="Kategori" content="Kultural" />
        <InfoCard icon={<FaStar className="text-green-700 dark:text-green-400 w-5 h-5 mr-3" />} title="Rating" content="4,9" />
        <InfoCard icon={<FaMapMarkerAlt className="text-green-700 dark:text-green-400 w-5 h-5 mr-3" />} title="Lokasi" content="Koto Baru, Kec. Sungai Pagu, Kabupaten Solok Selatan, Sumatera Barat" />
        <InfoCard icon={<FaMoneyBillAlt className="text-green-700 dark:text-green-400 w-5 h-5 mr-3" />} title="Harga Tiket" content="Rp 20,000" />
        <InfoCard
          icon={<FaClock className="text-green-700 dark:text-green-400 w-5 h-5 mr-3" />}
          title="Jam Buka"
          content={
            <>
              <p>10:00 - 17:00 (Senin-Kamis)</p>
              <p>08:00 - 17:00 (Jumat-Minggu)</p>
            </>
          }
        />
        <InfoCard icon={<FaPhoneAlt className="text-green-700 dark:text-green-400 w-5 h-5 mr-3" />} title="Kontak" content="Telepon: +62 751 456789" />
      </div>

      {/* Description Section */}
      <div className="mt-6 lg:mt-2 md:py-6  rounded-sm">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 font-volkhov">Deskripsi</h2>
        <p className="text-xs md:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Nagari 1000 Rumah Gadang, terletak di Solok Selatan, Sumatra Barat, adalah sebuah kawasan wisata yang menawarkan pengalaman mendalam ke dalam kebudayaan Minangkabau yang otentik. Kawasan ini terkenal dengan deretan Rumah Gadang,
          rumah adat tradisional Minangkabau yang megah dan berornamen khas.
        </p>
        <p className="text-xs md:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Setiap Rumah Gadang di sini memiliki ciri arsitektur yang unik, dengan atap berbentuk gonjong menyerupai tanduk kerbau yang melambangkan kekuatan dan kebijaksanaan. Berjalan di antara deretan rumah-rumah ini, pengunjung akan
          merasakan atmosfer masa lalu yang masih terjaga dengan baik, seolah-olah waktu berhenti dan membawa mereka kembali ke zaman kerajaan Minangkabau yang penuh kemegahan.
        </p>
        <p className="text-xs md:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Selain menikmati keindahan arsitektur, pengunjung juga dapat menyaksikan berbagai kegiatan budaya yang masih dilestarikan oleh penduduk setempat. Mulai dari upacara adat hingga pertunjukan seni tradisional, setiap sudut Nagari
          1000 Rumah Gadang memancarkan kekayaan budaya yang mendalam. Dengan latar belakang pegunungan dan alam yang hijau, desa ini juga menawarkan pemandangan alam yang menakjubkan, menjadikannya tempat yang sempurna untuk merasakan
          harmoni antara manusia dan alam.
        </p>
        <p className="text-xs md:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Nagari 1000 Rumah Gadang bukan hanya sekedar destinasi wisata, tetapi juga jendela yang membuka wawasan tentang bagaimana budaya dan tradisi masih dihormati dan dijaga di tengah arus modernisasi. Di sini, pengunjung dapat
          benar-benar memahami dan merasakan bagaimana nilai-nilai leluhur masih dijunjung tinggi, memberikan kesan yang mendalam tentang kehidupan yang berakar kuat pada identitas budaya.
        </p>
        <p className="text-xs md:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Dalam era globalisasi yang cepat, Nagari 1000 Rumah Gadang berdiri sebagai simbol ketahanan budaya, sebuah tempat di mana sejarah dan modernitas berpadu dalam harmoni yang indah. Kawasan ini tidak hanya menarik wisatawan yang
          ingin belajar tentang budaya Minangkabau, tetapi juga para peneliti dan sejarawan yang tertarik dengan studi mendalam tentang arsitektur dan kehidupan sosial masyarakat setempat.
        </p>
        <p className="text-xs md:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Bagi pengunjung yang mencari lebih dari sekadar keindahan visual, Nagari 1000 Rumah Gadang menawarkan pelajaran berharga tentang nilai-nilai kebersamaan, kearifan lokal, dan bagaimana masyarakat dapat hidup selaras dengan alam
          sekitar. Ini adalah tempat yang mengajak kita untuk merenung tentang pentingnya menjaga warisan budaya, sekaligus menginspirasi generasi mendatang untuk terus melestarikan identitas mereka di tengah perubahan zaman.
        </p>
      </div>
    </div>
  );
};

export default DestinationInfo;
