import Header from '../components/Header';
import WhyChooseUs from '../components/About/WhyChooseUs';
import ProfileSection from '../components/About/ProfileSection';
import FeaturesSection from '../components/About/FeatureSection';
import TestimonialCarousel from '../components/About/Testimonials';
import TeamSection from '../components/About/TeamSection';
const About = () => {
  return (
    <>
      <Header backgroundImage="https://kenasih.com/luhanoq/2023/03/PDIKM.jpg" title="Tentang Kami" />
      <WhyChooseUs />
      <ProfileSection />
      <FeaturesSection />
      <TestimonialCarousel />
      <TeamSection />
    </>
  );
};

export default About;
