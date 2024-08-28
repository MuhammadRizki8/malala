// src/pages/Home.jsx
// import React from 'react';
import HeroSection from '../components/HeroSection';
import LocationSection from '../components/LocationSection';
import BlogSection from '../components/BlogSection';
import PopularDestinationBanner from '../components/PopularDestinationBanner';
import ImageBanner from '../assets/images/imgbanner.png';
import bgBannerImage from '../assets/images/bg-banner.png';
import PromotionalBanner from '../components/PromotionalBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
      <Navbar />
      <HeroSection />
      <LocationSection />
      <PopularDestinationBanner {...bannerData} />
      <BlogSection />
      <PromotionalBanner />
      <Footer />
    </div>
  );
};

export default Home;
