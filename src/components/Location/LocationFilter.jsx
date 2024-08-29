const LocationFilter = () => {
  const locations = [
    { name: 'Solok', checked: true },
    { name: 'Tanah Datar', checked: false },
    { name: 'Sawah Lunto', checked: false },
    { name: 'Padang', checked: false },
    { name: 'Bukittinggi', checked: false },
    { name: 'Payakumbuh', checked: false },
    { name: 'Dharmasraya', checked: false },
  ];

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Lokasi</h3>
      <div className="space-y-2">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center">
            <input type="checkbox" id={location.name} checked={location.checked} className="form-checkbox h-4 w-4 text-green-600" onChange={() => {}} />
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
  );
};

export default LocationFilter;
