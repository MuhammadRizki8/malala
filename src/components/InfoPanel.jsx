import PropTypes from 'prop-types';
import { FaTree, FaUtensils, FaLandmark, FaUmbrellaBeach, FaBook, FaUniversity } from 'react-icons/fa';

const InfoPanel = ({ name, description, categories }) => {
  // Mapping kategori ke warna dan ikon
  const categoryStyles = {
    Alam: { color: 'text-green-500', icon: <FaTree className="inline-block mr-1" /> },
    Kuliner: { color: 'text-red-500', icon: <FaUtensils className="inline-block mr-1" /> },
    Budaya: { color: 'text-purple-500', icon: <FaLandmark className="inline-block mr-1" /> },
    Pantai: { color: 'text-blue-500', icon: <FaUmbrellaBeach className="inline-block mr-1" /> },
    Sejarah: { color: 'text-yellow-500', icon: <FaBook className="inline-block mr-1" /> },
    Pendidikan: { color: 'text-indigo-500', icon: <FaUniversity className="inline-block mr-1" /> },
  };

  return (
    <div className="absolute -bottom-16 left-0 right-0 mx-auto bg-white p-4 sm:p-6 text-slate-700 w-11/12 max-w-3xl shadow-xl rounded-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Kolom Pertama: Nama Lokasi dan Deskripsi */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins mb-2 text-green-700">{name}</h3>
          <p className="mb-4 text-slate-600 text-xs sm:text-sm lg:text-base">{description}</p>
        </div>

        {/* Kolom Kedua: Badge */}
        <div className="flex flex-wrap justify-start sm:justify-end items-start gap-2">
          {categories.map((category, index) => {
            const style = categoryStyles[category] || { color: 'text-gray-500', icon: null };
            return (
              <span key={index} className={`bg-white ${style.color} px-3 py-1 rounded-sm shadow-lg text-xs sm:text-sm font-poppins flex items-center border`}>
                {style.icon} {category}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for the InfoPanel component
InfoPanel.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfoPanel;
