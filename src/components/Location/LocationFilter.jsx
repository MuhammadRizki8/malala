import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import Modal from 'react-modal';

const LocationFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locations, setLocations] = useState([
    { name: 'Solok', checked: true },
    { name: 'Tanah Datar', checked: false },
    { name: 'Sawah Lunto', checked: false },
    { name: 'Padang', checked: false },
    { name: 'Bukittinggi', checked: false },
    { name: 'Payakumbuh', checked: false },
    { name: 'Dharmasraya', checked: false },
  ]);

  const toggleCheckbox = (index) => {
    setLocations((locations) => locations.map((location, i) => (i === index ? { ...location, checked: !location.checked } : location)));
  };

  return (
    <div className="mx-auto max-w-sm mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="lg:hidden">
        <button onClick={() => setIsModalOpen(true)} className="w-full p-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300">
          <FaFilter className="mr-2" />
          Filter
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Filter Lokasi"
        className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-xs mx-auto my-8"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Pilih Lokasi</h3>
        <div className="space-y-2">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={location.name} checked={location.checked} className="form-checkbox h-4 w-4 text-green-600" onChange={() => toggleCheckbox(index)} />
              <label htmlFor={location.name} className="ml-2 text-gray-700 dark:text-gray-200">
                {location.name}
              </label>
            </div>
          ))}
        </div>
        <button onClick={() => setIsModalOpen(false)} className="mt-4 p-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 w-full">
          Tutup
        </button>
      </Modal>
      <div className="hidden lg:block">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">Lokasi</h3>
        <div className="space-y-2">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={location.name} checked={location.checked} className="form-checkbox h-4 w-4 text-green-600" onChange={() => toggleCheckbox(index)} />
              <label htmlFor={location.name} className="ml-2 text-gray-700 dark:text-gray-200">
                {location.name}
              </label>
            </div>
          ))}
        </div>
        <a href="#" className="text-green-500 mt-4 inline-block text-sm">
          Lihat Semua Destinasi
        </a>
      </div>
    </div>
  );
};

export default LocationFilter;
