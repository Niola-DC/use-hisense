import React from 'react';
import Navbar from '../components/blocks/Navbar';
import HeroSection from '../components/blocks/HeroSection';
import Header from '../components/blocks/Header';
import EduPlanningSection from '../components/blocks/EduPlanningSection';
import BenefitsRow from '../components/blocks/BenefitsRow';
import PlatformSection from '../components/blocks/PlatformSection';
import KnowUs from '../components/blocks/KnowUs';
import FAQAccordion from '../components/blocks/FAQAccordion';
import NewsletterSection from '../components/blocks/NewsLetter';
import Footer from '../components/blocks/Footer';
import Platform from '../components/blocks/Platform';
// import Footer from '../components/blocks/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-color-primary">
      <Header />
      <HeroSection /> 
      <EduPlanningSection />
      <BenefitsRow />
      <PlatformSection />
      {/* <Platform /> */}
      <FAQAccordion />
      <NewsletterSection />
      <Footer />
      {/* <KnowUs /> */}
      {/* <Navbar />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;