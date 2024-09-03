import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Udin',
    text: 'This platform gave me the best experience exploring Minang and West Sumatra!',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Maling Jambu',
    text: 'I had an amazing time using this service. Everything was smooth and hassle-free.',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Siti',
    text: 'I loved exploring the culture and nature of West Sumatra through this platform!',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Asep',
    text: 'This service made it easy for me to plan my vacation. Highly recommended!',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Budi',
    text: 'Booking through this platform was fast and simple. The customer service was excellent!',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    name: 'Dewi',
    text: 'I will definitely use this platform again for my next adventure!',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
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

  const total = testimonials.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + (isLargeScreen ? 2 : 1)) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - (isLargeScreen ? 2 : 1) + total) % total);
  };

  return (
    <section className="py-8 px-4 md:py-12 md:px-8 bg-gray-50 dark:bg-gray-900 transition duration-300">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800 dark:text-gray-200 font-volkhov">What Our Customers Say</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <button onClick={handlePrev} className="hidden sm:block p-2 text-gray-500 hover:text-green-500 transition duration-300" aria-label="Previous Testimonial">
          <FaChevronLeft size={30} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-4">
          {[testimonials[current], testimonials[(current + 1) % total]].slice(0, isLargeScreen ? 2 : 1).map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="mb-4 sm:mb-6">
                <img className="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto shadow-xl transform hover:scale-110 transition duration-300" src={testimonial.imgSrc} alt={testimonial.name} />
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4 sm:mb-6">
                <FaQuoteLeft className="inline-block text-green-500" size={20} /> {testimonial.text} <FaQuoteRight className="inline-block text-green-500" size={20} />
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="flex space-x-2 sm:hidden">
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
