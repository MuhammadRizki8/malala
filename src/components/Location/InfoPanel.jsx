import PropTypes from 'prop-types';
import { FaTree, FaUtensils, FaLandmark, FaUmbrellaBeach, FaBook, FaUniversity } from 'react-icons/fa';

const categoryStyles = {
  Alam: { color: 'text-green-500 dark:text-green-300', icon: FaTree },
  Kuliner: { color: 'text-red-500 dark:text-red-300', icon: FaUtensils },
  Budaya: { color: 'text-purple-500 dark:text-purple-300', icon: FaLandmark },
  Pantai: { color: 'text-blue-500 dark:text-blue-300', icon: FaUmbrellaBeach },
  Sejarah: { color: 'text-yellow-500 dark:text-yellow-300', icon: FaBook },
  Pendidikan: { color: 'text-indigo-500 dark:text-indigo-300', icon: FaUniversity },
};

const InfoPanel = ({ name, description, categories }) => {
  return (
    <div className="absolute -bottom-16 left-0 right-0 mx-auto bg-white dark:bg-slate-800 p-4 sm:p-6 text-slate-700 dark:text-slate-300 w-11/12 max-w-3xl shadow-xl rounded-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-6">
        {/* Kolom Pertama: Nama Lokasi dan Deskripsi */}
        <div className="col-span-4 border-b sm:border-r border-slate-300 dark:border-slate-600 sm:pr-6 pr-0 sm:border-b-0 pb-4 sm:pb-0">
          <h3 className="font-volkhov text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins mb-2 text-green-700 dark:text-green-500">{name}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base">{description}</p>
        </div>

        {/* Kolom Kedua: Badge */}
        <div className="col-span-1 flex flex-wrap justify-start sm:justify-start gap-y-3 items-start sm:items-end sm:flex-col gap-x-2">
          {categories.map((category, index) => {
            const { color, icon: Icon } = categoryStyles[category] || { color: 'text-gray-500 dark:text-gray-400', icon: null };
            return (
              <span key={index} className={`bg-white dark:bg-slate-700 ${color} px-3 py-1 rounded-sm shadow-lg text-xs sm:text-sm font-poppins flex items-center border dark:border-slate-600`}>
                {Icon && <Icon className="inline-block mr-1" />} {category}
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
