import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Udin',
    text: 'Platform ini memberikan pengalaman terbaik saat menjelajahi keindahan Minang dan Sumatra Barat!',
  },
  {
    name: 'Maling Jambu',
    text: 'Saya menikmati setiap momen menggunakan layanan ini. Semua berjalan lancar dan tanpa kendala.',
  },
  {
    name: 'Siti',
    text: 'Saya senang bisa mengeksplorasi budaya dan alam Sumatra Barat melalui platform ini!',
  },
  {
    name: 'Asep',
    text: 'Layanan ini memudahkan saya merencanakan liburan saya. Sangat direkomendasikan!',
  },
  {
    name: 'Budi',
    text: 'Proses pemesanan cepat dan sederhana. Pelayanan pelanggan sangat memuaskan!',
  },
  {
    name: 'Dewi',
    text: 'Saya pasti akan menggunakan platform ini lagi untuk petualangan berikutnya!',
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // otomatis pindah setiap 5 detik
    return () => clearInterval(interval); // hentikan interval jika komponen tidak digunakan
  }, [current]);

  const total = testimonials.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + (isLargeScreen ? 2 : 1)) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - (isLargeScreen ? 2 : 1) + total) % total);
  };

  return (
    <section className="py-8 px-4 md:py-12 md:px-8 bg-gray-50 dark:bg-gray-900 transition duration-300">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800 dark:text-gray-200 font-volkhov">Apa Kata Pelanggan Kami?</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <button onClick={handlePrev} className="hidden sm:block p-2 text-gray-500 hover:text-green-500 transition duration-300" aria-label="Previous Testimonial">
          <FaChevronLeft size={30} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-4" data-aos="fade-up">
          {[testimonials[current], testimonials[(current + 1) % total]].slice(0, isLargeScreen ? 2 : 1).map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-sm shadow-lg transform transition duration-300 hover:scale-105">
              <div className="mb-4 sm:mb-6">
                <img
                  className="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto shadow-xl transform hover:scale-110 transition duration-300"
                  src={`https://robohash.org/${testimonial.name}.png`} // Menggunakan nama sebagai input RoboHash
                  alt={testimonial.name}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4 sm:mb-6">
                <FaQuoteLeft className="inline-block text-green-500" size={20} /> {testimonial.text} <FaQuoteRight className="inline-block text-green-500" size={20} />
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="flex space-x-2 mt-2 sm:hidden">
          <button onClick={handlePrev} className="sm:hidden p-2 text-gray-500 hover:text-green-500 transition duration-300" aria-label="Previous Testimonial">
            <FaChevronLeft size={30} />
          </button>
          <button onClick={handleNext} className="p-2 text-gray-500 hover:text-green-500 transition duration-300" aria-label="Next Testimonial">
            <FaChevronRight size={30} />
          </button>
        </div>
        <button onClick={handleNext} className="hidden sm:block p-2 text-gray-500 hover:text-green-500 transition duration-300" aria-label="Next Testimonial">
          <FaChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
