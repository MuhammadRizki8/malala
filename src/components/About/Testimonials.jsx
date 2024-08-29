import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Udin',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCamOBNeSsLTVlyAQrf8WKJr3QIJ0UX0j3hmJxvbMFLaqa9LebfjmJGkJhdhZCE4oQCCk&usqp=CAU', // Replace with the actual image URL
  },
  {
    name: 'Maling Jambu',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCamOBNeSsLTVlyAQrf8WKJr3QIJ0UX0j3hmJxvbMFLaqa9LebfjmJGkJhdhZCE4oQCCk&usqp=CAU', // Replace with the actual image URL
  },
  {
    name: 'Lyod Gomez 1',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCamOBNeSsLTVlyAQrf8WKJr3QIJ0UX0j3hmJxvbMFLaqa9LebfjmJGkJhdhZCE4oQCCk&usqp=CAU', // Replace with the actual image URL
  },
  {
    name: 'Lyod Gomez 3',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCamOBNeSsLTVlyAQrf8WKJr3QIJ0UX0j3hmJxvbMFLaqa9LebfjmJGkJhdhZCE4oQCCk&usqp=CAU', // Replace with the actual image URL
  },
  {
    name: 'Lyod Gomez 4',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCamOBNeSsLTVlyAQrf8WKJr3QIJ0UX0j3hmJxvbMFLaqa9LebfjmJGkJhdhZCE4oQCCk&usqp=CAU', // Replace with the actual image URL
  },
  {
    name: 'Lyod Gomez Junior',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCamOBNeSsLTVlyAQrf8WKJr3QIJ0UX0j3hmJxvbMFLaqa9LebfjmJGkJhdhZCE4oQCCk&usqp=CAU', // Replace with the actual image URL
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-8">
      <h2 className="text-center text-2xl font-semibold mb-6">Apa Kata Para Customer</h2>
      <div className="flex justify-center items-center">
        <button onClick={prevSlide} className="text-2xl p-2">
          &#8249; {/* Left arrow */}
        </button>

        <div className="flex space-x-6">
          {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
              <img src={testimonial.imgSrc} alt={testimonial.name} className="rounded-full mx-auto mb-4 w-16 h-16" />
              <p className="font-semibold">{testimonial.name}</p>
              <div className="mt-4 mb-2 text-gray-400">
                <FaQuoteLeft className="inline mr-2" />
                <p className="inline">{testimonial.text}</p>
                <FaQuoteRight className="inline ml-2" />
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="text-2xl p-2">
          &#8250; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
