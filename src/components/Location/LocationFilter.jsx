import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import Modal from 'react-modal';

const LocationFilter = () => {
  // State untuk mengontrol modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk mengontrol status checkbox
  const [locations, setLocations] = useState([
    { name: 'Solok', checked: true },
    { name: 'Tanah Datar', checked: false },
    { name: 'Sawah Lunto', checked: false },
    { name: 'Padang', checked: false },
    { name: 'Bukittinggi', checked: false },
    { name: 'Payakumbuh', checked: false },
    { name: 'Dharmasraya', checked: false },
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fungsi untuk mengubah status checkbox
  const toggleCheckbox = (index) => {
    setLocations(locations.map((location, i) => (i === index ? { ...location, checked: !location.checked } : location)));
  };

  return (
    <div className="mx-auto max-w-sm mt-2 p-2 bg-white rounded-lg shadow-md">
      {/* Tombol untuk membuka filter di layar kecil */}
      <div className="lg:hidden">
        <button onClick={openModal} className="w-full p-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center">
          <FaFilter className="mr-2" />
          Filter
        </button>
      </div>

      {/* Modal untuk layar kecil */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Filter Lokasi"
        className="p-4 bg-white rounded-lg shadow-lg max-w-xs mx-auto my-8"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h3 className="text-lg font-semibold mb-4">Pilih Lokasi</h3>
        <div className="space-y-2">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={location.name} checked={location.checked} className="form-checkbox h-4 w-4 text-green-600" onChange={() => toggleCheckbox(index)} />
              <label htmlFor={location.name} className="ml-2 text-gray-700">
                {location.name}
              </label>
            </div>
          ))}
        </div>
        <button onClick={closeModal} className="mt-4 p-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 w-full">
          Tutup
        </button>
      </Modal>

      {/* Daftar lokasi hanya terbuka di layar besar */}
      <div className="hidden lg:block">
        <h3 className="text-lg font-semibold mb-2">Lokasi</h3>
        <div className="space-y-2">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={location.name} checked={location.checked} className="form-checkbox h-4 w-4 text-green-600" onChange={() => toggleCheckbox(index)} />
              <label htmlFor={location.name} className="ml-2 text-gray-700">
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
