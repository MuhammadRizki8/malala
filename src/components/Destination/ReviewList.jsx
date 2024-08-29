import { FaFlag } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    rating: 5.0,
    title: 'Amazing',
    author: 'Omar Siphron',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    id: 2,
    rating: 5.0,
    title: 'Amazing',
    author: 'Cristofer Ekstrom Bothman',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    id: 3,
    rating: 5.0,
    title: 'Amazing',
    author: 'Kaiya Lubin',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    id: 4,
    rating: 5.0,
    title: 'Amazing',
    author: 'Erin Septimus',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
  {
    id: 5,
    rating: 5.0,
    title: 'Amazing',
    author: 'Terry George',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://ih1.redbubble.net/image.2998421987.7898/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
  },
];

const ReviewList = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Ulasan</h2>
      <div className="flex items-center mb-6">
        <div className="text-6xl font-extrabold text-green-600">4.9</div>
        <div className="ml-4">
          <div className="text-xl font-bold">Sangat Bagus</div>
          <div className="text-gray-500">371 ulasan terverifikasi</div>
        </div>
        <button className="ml-auto bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Berikan ulasanmu</button>
      </div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="flex items-start border-b py-4">
            <img className="w-12 h-12 rounded-full mr-4" src={review.imageUrl} alt={`${review.author}'s profile`} />
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
