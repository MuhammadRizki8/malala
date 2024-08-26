// src/pages/Home.jsx
// import React from 'react';
import HeroSection from '../components/HeroSection';
import LocationSection from '../components/LocationSection';
import BlogSection from '../components/BlogSection';
import PopularDestinationBanner from '../components/PopularDestinationBanner';
import padangImage from '../assets/images/padang.jpg';
import PromotionalBanner from '../components/PromotionalBanner';
const Home = () => {
  const bannerData = {
    backgroundImage: padangImage, // Replace with your background image URL
    destinationImage: padangImage, // Replace with your destination image URL
    destinationName: 'Pantai Air Manis',
    location: 'Padang, Sumatra Barat',
    description: 'Pantai Air Manis adalah destinasi wisata terkenal di Padang yang dikenal dengan cerita legendaris Malin Kundang dan pemandangan pantai yang memukau.',
  };
  return (
    <div>
      <HeroSection />
      <LocationSection />
      <PopularDestinationBanner {...bannerData} />
      <BlogSection />
      <PromotionalBanner />
    </div>
  );
};

export default Home;
