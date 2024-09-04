import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="space-y-6 col-span-full w-full" data-aos="flip-right">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.716861227449!2d110.3670614746055!3d-7.801194677297966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579f20203db7%3A0x3faef5f06e7b6454!2sYogyakarta!5e0!3m2!1sen!2sid!4v1693411510232!5m2!1sen!2sid"
        width="100%"
        height="250"
        className="border rounded-md dark:border-gray-700"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <div className="flex items-start space-x-3">
        <FaMapMarkerAlt className="text-green-500" size={20} aria-label="Location" />
        <p className="text-gray-800 dark:text-gray-200">Batusangkar, Tanah Datar, Sumatra Barat</p>
      </div>

      <div className="flex items-start space-x-3">
        <FaPhoneAlt className="text-green-500" size={20} aria-label="Phone" />
        <p className="text-gray-800 dark:text-gray-200">+6281235445346575</p>
      </div>

      <div className="flex items-start space-x-3">
        <FaEnvelope className="text-green-500" size={20} aria-label="Email" />
        <p className="text-gray-800 dark:text-gray-200">malalatravel@gmail.com</p>
      </div>

      <div className="flex items-start space-x-3">
        <FaInstagram className="text-green-500" size={20} aria-label="Instagram" />
        <p className="text-gray-800 dark:text-gray-200">@malala_travel</p>
      </div>
    </div>
  );
};

export default ContactInfo;
