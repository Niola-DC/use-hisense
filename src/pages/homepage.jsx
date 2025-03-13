import React from 'react';
import HeroSection from '../components/blocks/HeroSection';
import EduPlanningSection from '../components/blocks/EduPlanningSection';
import BenefitsRow from '../components/blocks/BenefitsRow';
import PlatformSection from '../components/blocks/PlatformSection';
import FAQAccordion from '../components/blocks/FAQAccordion';
import NewsletterSection from '../components/blocks/NewsLetter';

const HomePage = () => {
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
