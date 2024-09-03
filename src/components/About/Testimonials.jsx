import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Udin',
    text: 'This platform gave me the best experience exploring Minang and West Sumatra!',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg', // Replace with real image URLs
  },
  {
    name: 'Maling Jambu',
    text: 'I had an amazing time using this service. Everything was smooth and hassle-free.',
    imgSrc: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="py-8 px-4 md:py-12 md:px-8 bg-gray-50 dark:bg-gray-900 transition duration-300">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800 dark:text-gray-200">What Our Customers Say</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <button onClick={handlePrev} className="mb-4 sm:mb-0 sm:mr-6 p-2 text-gray-500 hover:text-green-500 transition duration-300" aria-label="Previous Testimonial">
          <FaChevronLeft size={30} />
        </button>
        <div className="mx-4 sm:mx-8 text-center max-w-md sm:max-w-lg bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <div className="mb-4 sm:mb-6">
            <img className="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto shadow-xl transform hover:scale-110 transition duration-300" src={testimonials[current].imgSrc} alt={testimonials[current].name} />
          </div>
          <p className="text-gray-600 dark:text-gray-300 italic mb-4 sm:mb-6">
            <FaQuoteLeft className="inline-block text-green-500" size={20} /> {testimonials[current].text} <FaQuoteRight className="inline-block text-green-500" size={20} />
          </p>
          <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonials[current].name}</p>
        </div>
        <button onClick={handleNext} className="mt-4 sm:mt-0 sm:ml-6 p-2 text-gray-500 hover:text-green-500 transition duration-300" aria-label="Next Testimonial">
          <FaChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
