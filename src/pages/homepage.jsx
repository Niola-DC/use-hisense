import React from 'react';
import Navbar from '../components/blocks/Navbar';
import HeroSection from '../components/blocks/HeroSection';
// import Footer from '../components/blocks/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;