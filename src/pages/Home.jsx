// src/pages/Home.jsx
// import React from 'react';
import HeroSection from '../components/HeroSection';
import LocationSection from '../components/LocationSection';
import BlogSection from '../components/BlogSection';
import PopularDestinationBanner from '../components/PopularDestinationBanner';
import ImageBanner from '../assets/images/imgbanner.png';
import bgBannerImage from '../assets/images/bg-banner.png';
import PromotionalBanner from '../components/PromotionalBanner';
const Home = () => {
  const bannerData = {
    backgroundImage: bgBannerImage, // Replace with your background image URL
    destinationImage: ImageBanner, // Replace with your destination image URL
    destinationName: 'Bukik Soriak',
    location: 'Lima Puluh Kota, Sumatra Barat',
    description: 'Bukik Soriak Land resor terbesar dan termewah di Lembah Harau, Sumatera Barat. Miliki properti idamanmu di sini: hotel, villa, glamping.',
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
