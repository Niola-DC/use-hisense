import React, { useEffect } from 'react';
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
import { useLocation } from 'react-router-dom';
// import Footer from '../components/blocks/Footer';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [location]);
  return (
    // <div className="w-full min-h-screen bg-color-primary">
    <div>
      <HeroSection />
      <EduPlanningSection />
      <BenefitsRow />
      <PlatformSection />
      <FAQAccordion />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
