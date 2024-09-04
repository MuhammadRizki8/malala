import { FaFlag } from 'react-icons/fa';
import reviews from '../../data/reviews.json';

const ReviewList = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 bg-white dark:bg-gray-800 rounded-sm shadow-md">
      <h2 className="text-base md:text-lg lg:text-2xl font-volkhov font-bold mb-4 text-gray-800 dark:text-gray-100">Ulasan</h2>
      <div className="flex items-center flex-wrap mb-6">
        <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-500">4.9</div>
        <div className="ml-4">
          <div className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100">Sangat Bagus</div>
          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">371 ulasan terverifikasi</div>
        </div>
        <button className="mt-4 sm:mt-0 sm:ml-auto bg-green-500 dark:bg-green-600 text-white py-2 px-3 md:px-4 rounded-sm hover:bg-green-600 dark:hover:bg-green-700 text-sm md:text-base transition duration-300">Berikan ulasanmu</button>
      </div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="flex flex-col sm:flex-row items-start border-b py-4 dark:border-gray-700">
            <img className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4 mb-2 sm:mb-0" src={review.imageUrl} alt={`${review.author}'s profile`} />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="text-sm md:text-lg font-bold text-green-600 dark:text-green-500">
                  {review.rating} {review.title}
                </span>
                <span className="text-xs md:text-sm mt-1 sm:mt-0 sm:ml-2 text-gray-500 dark:text-gray-400">| {review.author}</span>
              </div>
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-2">{review.content}</p>
            </div>
            <FaFlag className="ml-0 sm:ml-4 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 mt-2 sm:mt-0 transition duration-300" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
