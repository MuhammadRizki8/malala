// src/components/BlogCard.jsx
import React from 'react';

const BlogCard = ({ image, title, highlight }) => {
  return (
    <div className="relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-end p-4">
        <h3 className="text-xl font-bold font-poppins text-white mb-2">{title}</h3>
        <p className="text-white text-sm font-poppins overflow-hidden overflow-ellipsis whitespace-nowrap">{highlight}</p>
      </div>
    </div>
  );
};

export default BlogCard;
