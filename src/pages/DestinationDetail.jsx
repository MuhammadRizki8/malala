import DestinationImageGallery from '../components/Destination/DestinationImageGallery';
import DestinationInfo from '../components/Destination/DestinationInfo';
import ReviewList from '../components/Destination/ReviewList';
import DestinationCardRec from '../components/Destination/DestinationCardRec';

const DestinationDetail = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Galeri Gambar Destinasi */}
        <DestinationImageGallery />

        {/* Informasi Destinasi dan Peta */}
        <div className="max-w-7xl mx-auto my-8 flex flex-col lg:flex-row gap-8 border-b">
          {/* Kolom Informasi Destinasi */}
          <div className="w-full lg:w-2/3 h-full">
            <DestinationInfo />
          </div>

          {/* Kolom Peta dan Card */}
          <div className="w-full  lg:w-1/3 space-y-4">
            {/* Map Embed */}
            <div className="relative  w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2678795645444!2d110.35222717623874!3d-7.822526178892594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58dd7e687d03%3A0x4d90e8ad9f5d8f3e!2sNagari%201000%20Rumah%20Gadang!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
                allowFullScreen=""
                loading="lazy"
                title="Map"
                className="w-full h-40 lg:h-96"
              ></iframe>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 font-volkhov border-t pt-4">Destinasi Lainnya</h2>
            {/* Recommended Destination Cards */}
            <DestinationCardRec
              title="Istano Basa Pagaruyuang"
              location="Pagaruyung, Tanah Datar"
              imageUrl="https://pict.sindonews.net/dyn/620/pena/news/2020/12/31/29/286616/sejarah-jam-gadang-di-bukittinggi-dan-berkibarnya-bendera--merah-putih-trf.jpg"
            />
            <DestinationCardRec
              title="Jam Gadang"
              location="Bukittinggi, Sumatra Barat"
              imageUrl="https://pict.sindonews.net/dyn/620/pena/news/2020/12/31/29/286616/sejarah-jam-gadang-di-bukittinggi-dan-berkibarnya-bendera--merah-putih-trf.jpg"
            />
          </div>
        </div>

        {/* Review List */}
        <ReviewList />
      </div>
    </div>
  );
};

export default DestinationDetail;
