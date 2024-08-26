// src/components/BlogSection.jsx
import React from 'react';
import BlogCard from './BlogCard';
import padangImage from '../assets/images/padang.jpg';
// Dummy blog data
const blogs = [
  {
    title: 'Keindahan Alam Solok yang Tersembunyi',
    highlight: 'Solok menyimpan sejuta pesona alam yang belum banyak dikenal orang. Dari Danau Singkarak hingga puncak-puncak pegunungan yang menawarkan pemandangan spektakuler...',
    image: padangImage,
  },
  {
    title: 'Kuliner Padang yang Wajib Dicoba',
    highlight: 'Padang tidak hanya terkenal dengan rendangnya, tetapi juga dengan berbagai kuliner lezat lainnya yang akan menggoyang lidah Anda...',
    image: padangImage,
  },
  {
    title: 'Sejarah dan Pesona Jam Gadang di Bukittinggi',
    highlight: 'Jam Gadang merupakan ikon dari Bukittinggi yang sarat akan sejarah. Simbol ini tidak hanya menawarkan keindahan arsitektur, tetapi juga berbagai kisah menarik di baliknya...',
    image: padangImage,
  },
];

const BlogSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">Artikel dan Blog</h2>
        <p className="text-lg md:text-xl font-light font-poppins">Temukan inspirasi wisata dan cerita menarik dari para penulis kami.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
