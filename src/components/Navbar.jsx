import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import LogoLight from '../assets/images/LogoLight.png';
import LogoDark from '../assets/images/LogoDark.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

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

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    document.documentElement.classList.toggle('dark', checked);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 border-b ${
        isHomePage ? (isScrolled ? 'bg-white dark:bg-gray-900' : 'bg-transparent dark:bg-transparent') : 'bg-white dark:bg-gray-900'
      } transition-colors duration-300 border-gray-200 dark:border-gray-700`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-2">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={isHomePage ? (isScrolled ? LogoDark : LogoLight) : LogoDark} className="h-10" alt="Logo" />
          <span
            className={`font-volkhov hidden sm:block self-center text-2xl font-semibold whitespace-nowrap ${
              isHomePage ? (isScrolled ? 'text-green-700 hover:text-green-800' : 'text-white dark:text-white') : 'text-green-700 dark:text-white hover:text-green-800'
            }`}
          >
            Malala
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={24} moonColor="#f39c12" sunColor="#f1c40f" />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-400 rounded-sm md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
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
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-sm md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${
              isHomePage ? 'bg-gray-50 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent' : 'bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent'
            } dark:border-gray-700`}
          >
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 ${isHomePage ? (isScrolled ? 'text-green-700 hover:text-green-800 dark:text-white' : 'text-green-600 md:text-white dark:text-white') : 'text-green-700 dark:text-white hover:text-green-800'}`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/destinations"
                className={`block py-2 px-3 ${isHomePage ? (isScrolled ? 'text-green-700 hover:text-green-800 dark:text-white' : 'text-green-600 md:text-white dark:text-white') : 'text-green-700 dark:text-white hover:text-green-800'}`}
              >
                Destinasi
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 ${isHomePage ? (isScrolled ? 'text-green-700 hover:text-green-800 dark:text-white' : ' text-green-600 md:text-white dark:text-white') : 'text-green-700 dark:text-white hover:text-green-800'}`}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 ${isHomePage ? (isScrolled ? 'text-green-700 hover:text-green-800 dark:text-white' : 'text-green-600 md:text-white dark:text-white') : 'text-green-700 dark:text-white hover:text-green-800'}`}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
