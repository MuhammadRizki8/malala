import PropTypes from 'prop-types';

const InfoPanel = ({ name, description, categories }) => {
  return (
    <div className="absolute -bottom-16 left-0 right-0 mx-auto bg-white p-6 text-slate-700 w-11/12 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Kolom Pertama: Nama Lokasi dan Deskripsi */}
        <div>
          <h3 className="text-4xl font-bold font-poppins mb-2">{name}</h3>
          <p className="mb-4 text-slate-600 text-sm">{description}</p>
        </div>

        {/* Kolom Kedua: Badge */}
        <div className="flex flex-wrap md:justify-end items-start gap-2">
          {categories.map((category, index) => (
            <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-poppins">
              {category}
            </span>
          ))}
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
