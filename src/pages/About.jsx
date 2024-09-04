import Header from '../components/Header';
import WhyChooseUs from '../components/About/WhyChooseUs';
import ProfileSection from '../components/About/ProfileSection';
import FeaturesSection from '../components/About/FeatureSection';
import TestimonialCarousel from '../components/About/Testimonials';
import TeamSection from '../components/About/TeamSection';
const About = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-gray-100">
      <Header backgroundImage="https://kenasih.com/luhanoq/2023/03/PDIKM.jpg" title="Tentang Kami" />
      <ProfileSection />
      <WhyChooseUs />
      <FeaturesSection />
      <TestimonialCarousel />
      <TeamSection />
    </div>
  );
};

export default About;
