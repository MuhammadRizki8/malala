// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoLight from '../assets/images/LogoLight.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-20 top-0 left-0 border-b ${isScrolled ? 'bg-green-800' : 'bg-transparent'} transition-colors duration-300 border-gray-200 dark:border-gray-600`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LogoLight} className="h-10" alt="Logo" />
          <span className="hidden sm:block self-center text-2xl font-semibold whitespace-nowrap text-white">Malala</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Get started
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white md:text-white hover:text-green-500 md:hover:text-green-500">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/destinations" className="block py-2 px-3 text-white md:text-white hover:text-green-500 md:hover:text-green-500">
                Destinasi
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-white md:text-white hover:text-green-500 md:hover:text-green-500">
                Tentang Kami
              </Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white md:text-white hover:text-green-500 md:hover:text-green-500">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
