import HeroSection from '../components/HeroSection';
import LocationSection from '../components/Location/LocationSection';
import BlogSection from '../components/Blog/BlogSection';
import PopularDestinationBanner from '../components/Banner/PopularDestinationBanner';
import PromotionalBanner from '../components/Banner/PromotionalBanner';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LocationSection />
      <PopularDestinationBanner />
      <BlogSection />
      <PromotionalBanner />
    </div>
  );
};

export default Home;
