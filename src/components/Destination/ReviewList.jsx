import { FaFlag } from 'react-icons/fa';
import reviews from '../../data/reviews.json';
const ReviewList = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold ">Ulasan</h2>
      <div className="flex items-center flex-wrap mb-6">
        <div className="text-4xl font-bold text-green-600">4.9</div>
        <div className="ml-4">
          <div className="text-xl font-bold">Sangat Bagus</div>
          <div className="text-gray-500">371 ulasan terverifikasi</div>
        </div>
        <button className=" sm:ml-auto bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Berikan ulasanmu</button>
      </div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="flex flex-col sm:flex-row items-start border-b py-4">
            <img className="w-12 h-12 rounded-full mr-4 mb-2 sm:mb-0" src={review.imageUrl} alt={`${review.author}'s profile`} />
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-lg font-bold text-green-600">
                  {review.rating}.0 {review.title}
                </span>
                <span className="ml-2 text-gray-500">| {review.author}</span>
              </div>
              <p className="text-gray-700 mt-2">{review.content}</p>
            </div>
            <FaFlag className="ml-4 text-gray-500 cursor-pointer hover:text-gray-700" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
