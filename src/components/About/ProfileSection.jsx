const ProfileSection = () => {
  return (
    <section className="mb-12 w-full mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Image */}
        <div className="flex items-center justify-center">
          <img src="https://asset.kompas.com/crops/Z8hXwE-DKzO902r9PP89esSDYZo=/0x0:750x500/750x500/data/photo/2022/01/30/61f642eb1956b.jpg" alt="Malala" className="shadow-lg w-full object-cover h-96" />
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center pr-10">
          <h2 className="pr-24 text-lg text-green-500 font-semibold">Selamat Datang di Website Kami</h2>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Tentang Malala</h1>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-green-500 font-bold">Malala</span> adalah platform terbaik untuk menjelajahi keindahan Minang dan Sumatra Barat. Kami berdedikasi untuk menyediakan pengalaman wisata yang tak terlupakan dengan berbagai
            pilihan paket yang dirancang khusus untuk memenuhi kebutuhan liburan Anda.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center text-end pl-10">
          <h1 className="pl-24 text-2xl font-bold mb-4 text-green-600">Menyajikan Keindahan Minang yang Autentik untuk Anda</h1>
          <p className="text-lg text-gray-700 mb-4">
            Kami berada tepat di jantung Minang, siap menyuguhkan pengalaman nyata kehidupan kota! Dengan bertahun-tahun pengalaman di hampir setiap sektor pariwisata, kami menawarkan paket lengkap dengan harga terendah untuk berwisata,
            belajar, dan bersenang-senang tanpa khawatir dan tanpa stres.
          </p>

          {/* Stats Section */}
          <div className=" flex justify-end space-x-5 text-center text-gray-700">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-green-500">5+</h3>
              <p>Tahun Pengalaman</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-green-500">10+</h3>
              <p>Pemandu Profesional</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-green-500">10K+</h3>
              <p>Ulasan Pengguna</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-green-500">50+</h3>
              <p>Event Budaya</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center">
          <img src="https://akcdn.detik.net.id/visual/2020/09/18/potensi-wisata-pedesaan-lembah-harau-2_169.jpeg?w=650" alt="Keindahan Minang" className=" shadow-lg w-full object-cover h-96" />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
