import Header from '../components/Header';
import LocationFilter from '../components/Location/LocationFilter';
import DestinationList from '../components/Destination/DestinationList';
import SearchDestinationBar from '../components/Destination/SearchDestinationBar';

const Destinations = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Header backgroundImage="https://kenasih.com/luhanoq/2023/03/PDIKM.jpg" title="Destinasi Wisata" />
      <div className="container max-w-7xl mx-auto py-8">
        <div className="px-2 flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-6">
          <div className="mx-2 lg:w-1/4 flex-shrink-0">
            <SearchDestinationBar />
            <LocationFilter />
          </div>
          <DestinationList />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
