import BlogCard from './BlogCard';
import padangImage from '../../assets/images/padang.jpg';

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
    <section className="my-14 mb-8 max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg sm:text-xl font-medium font-poppins ">Temukan inspirasi wisata dan cerita menarik dari para penulis kami.</h3>
        <button className="text-xs sm:text-base text-green-600 font-poppins transition duration-300 transform hover:scale-105 hidden sm:block">Lihat Semua</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
