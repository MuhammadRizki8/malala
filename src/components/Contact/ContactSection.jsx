import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="px-4 py-8 md:py-12 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-xs sm:text-base mb-6 text-gray-600">
              Kami selalu senang mendengar dari Anda! Apakah Anda memiliki pertanyaan, saran, atau ingin berbagi pengalaman wisata Anda? Jangan ragu untuk menghubungi kami melalui salah satu cara berikut:
            </p>

            <form className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold">Nama :</label>
                <input type="text" placeholder="input nama kamu" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email :</label>
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Pesan :</label>
                <textarea placeholder="Pesan" className="w-full px-4 py-2 border rounded-md h-28 focus:outline-none focus:border-green-500"></textarea>
              </div>

              <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Kirim</button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="space-y-6">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.716861227449!2d110.3670614746055!3d-7.801194677297966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579f20203db7%3A0x3faef5f06e7b6454!2sYogyakarta!5e0!3m2!1sen!2sid!4v1693411510232!5m2!1sen!2sid"
              width="100%"
              height="250"
              className="border rounded-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <p className="text-xs sm:text-base text-gray-600">Isi formulir dan Tim kami akan menghubungi Anda dalam waktu 24 jam.</p>

            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-green-500" size={20} />
              <p>Batusangkar, Tanah Datar, Sumatra Barat</p>
            </div>

            <div className="flex items-start space-x-3">
              <FaPhoneAlt className="text-green-500" size={20} />
              <p>+6281235445346575</p>
            </div>

            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-green-500" size={20} />
              <p>malalatravel@gmail.com</p>
            </div>

            <div className="flex items-start space-x-3">
              <FaInstagram className="text-green-500" size={20} />
              <p>@malala_travel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
