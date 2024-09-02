import HeroSection from '../components/HeroSection';
import LocationSection from '../components/Location/LocationSection';
import BlogSection from '../components/Blog/BlogSection';
import PopularDestinationBanner from '../components/Banner/PopularDestinationBanner';
import PromotionalBanner from '../components/Banner/PromotionalBanner';

const Home = () => {
  return (
    <div className="bg-white dark:bg-black  dark:text-white pb-8">
      <HeroSection />
      <LocationSection />
      <PopularDestinationBanner />
      <BlogSection />
      <PromotionalBanner />
    </div>
  );
};

export default Home;
