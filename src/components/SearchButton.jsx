const SearchButton = () => {
  return (
    <>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl flex flex-col sm:flex-row items-center p-2 space-y-2 sm:space-y-0 sm:space-x-2 bg-white rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
        <div className="flex bg-gray-100 p-2 w-full space-x-2 sm:space-x-4 rounded-sm items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input className="bg-gray-100 outline-none flex-1 min-w-0 text-sm sm:text-base" type="text" placeholder="Cari destinasi.." />
        </div>

        <div className="bg-green-700 hover:bg-green-800 py-2 px-4 sm:px-6 md:px-8 text-white font-semibold rounded-md hover:shadow-lg transition duration-300 cursor-pointer w-full sm:w-auto text-center">
          <span className="text-sm sm:text-base">Cari</span>
        </div>
      </div>
    </>
  );
};

export default SearchButton;
