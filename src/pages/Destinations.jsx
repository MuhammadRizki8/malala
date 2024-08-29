import Header from '../components/Header';
import LocationFilter from '../components/Location/LocationFilter';
import DestinationList from '../components/Destination/DestinationList';
const Destinations = () => {
  return (
    <div>
      <Header backgroundImage="https://kenasih.com/luhanoq/2023/03/PDIKM.jpg" title="Destinasi Wisata" />
      <div className="container max-w-7xl mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Location Filter */}
          <div className="lg:w-1/4 mb-6 lg:mb-0">
            <LocationFilter />
          </div>
          <DestinationList />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
