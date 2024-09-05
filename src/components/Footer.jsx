import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';
import LogoLight from '../assets/images/LogoLight.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={LogoLight} className="h-8 me-3" alt="Malala Logo" />
              <span className="font-volkhov self-center text-2xl font-semibold whitespace-nowrap text-white">Malala</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Tautan</h2>
              <ul className="text-white font-medium">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Beranda
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/destinations" className="hover:underline">
                    Destinasi
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="hover:underline">
                    Tentang Kami
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="hover:underline">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow Kami</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="https://github.com/MuhammadRizki8/malala" target="_blank" className="hover:underline">
                    <FaGithub className="inline me-2" />
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    <FaDiscord className="inline me-2" />
                    Discord
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.instagram.com/krng_kng/" target="_blank" className="hover:underline">
                    <FaInstagram className="inline me-2" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/onprogress" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/onprogress" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2024{' '}
            <Link to="/" className="hover:underline">
              Malala™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-white hover:text-gray-300 me-5">
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300 me-5">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
