import { FiSearch } from 'react-icons/fi';
import { BiSliderAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const SearchDestinationBar = () => {
  return (
    <form className="flex items-center max-w-sm mx-auto">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <BiSliderAlt className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          placeholder="Cari destinasi..."
          required
        />
      </div>
      <Link
        to="/destinations"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-green-700 rounded-full border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        aria-label="Search"
      >
        <FiSearch className="w-4 h-4" />
      </Link>
    </form>
  );
};

export default SearchDestinationBar;
