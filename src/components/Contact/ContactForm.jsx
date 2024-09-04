const ContactForm = () => {
  return (
    <div data-aos="fade-right">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 font-volkhov">Get in touch</h2>
      <p className="text-xs sm:text-base mb-6 text-gray-600 dark:text-gray-400">
        Kami selalu senang mendengar dari Anda! Apakah Anda memiliki pertanyaan, saran, atau ingin berbagi pengalaman wisata Anda? Jangan ragu untuk menghubungi kami melalui salah satu cara berikut:
      </p>

      <form className="space-y-4 mb-4">
        <div>
          <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Nama :</label>
          <input
            type="text"
            placeholder="Input nama kamu"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:focus:border-green-400"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Email :</label>
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:focus:border-green-400" required />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Pesan :</label>
          <textarea placeholder="Pesan" className="w-full px-4 py-2 border rounded-md h-28 focus:outline-none focus:border-green-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:focus:border-green-400" required></textarea>
        </div>

        <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
          Kirim
        </button>
      </form>
      <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400">Isi formulir dan Tim kami akan menghubungi Anda dalam waktu 24 jam.</p>
    </div>
  );
};

export default ContactForm;
