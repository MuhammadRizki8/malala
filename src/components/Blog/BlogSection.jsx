import BlogCard from './BlogCard';

// Blog data
const blogs = [
  {
    title: 'Keunikan Pacu Jawi, Tradisi Balapan Sapi Minangkabau',
    highlight: 'Pacu Jawi adalah tradisi balapan sapi unik di Sumatra Barat yang memadukan kecepatan dengan seni mengendalikan sapi...',
    image: 'https://traverse.id/wp-content/uploads/2018/02/Pacu-Jawi-di-Sumatera-Barat-Berpacu-Kencang-Sambil-Menggigit-Ekor-Sapi-@himsaifanah.jpg',
  },
  {
    title: 'Silek, Seni Bela Diri Asli Minangkabau',
    highlight: 'Silek adalah seni bela diri tradisional yang berasal dari Minangkabau. Memiliki teknik-teknik unik yang diwariskan dari generasi ke generasi...',
    image: 'https://static.gatra.com/foldershared/images/2021/wyp/11-Nov/010e941775177d9e1f0c0eebd47c4162fb9457d70a78a020895d44759373b242.0.jpg',
  },
  {
    title: 'Nikmati Kelezatan Nasi Kapau, Kuliner Khas Minangkabau',
    highlight: 'Nasi Kapau adalah salah satu ikon kuliner Minangkabau yang menawarkan kelezatan dalam setiap sajiannya, penuh dengan rasa dan budaya...',
    image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2021/01/30/masakan-padang-1jpg-20210130084007.jpg',
  },
];

const BlogSection = () => {
  return (
    <section className="my-14 mb-8 max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base sm:text-xl font-medium font-poppins text-gray-900 dark:text-slate-300">Temukan inspirasi wisata dan cerita menarik dari para penulis kami.</h3>
        <button className="text-xs sm:text-base text-green-600 dark:text-green-400 font-poppins transition duration-300 transform hover:scale-105 hidden sm:block">Lihat Semua</button>
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
