import { Link } from 'react-router-dom';

const RelatedDestinationCard = ({ image, title, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <Link to="/" className="mt-3 inline-block bg-green-700 text-white px-4 py-2 rounded-lg">
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default RelatedDestinationCard;
