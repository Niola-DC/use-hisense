import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BenefitsRow from "../components/blocks/BenefitsRow";
import EduPlanningSection from "../components/blocks/EduPlanningSection";
import FAQAccordion from "../components/blocks/FAQAccordion";
import HeroSection from "../components/blocks/HeroSection";
import NewsletterSection from "../components/blocks/NewsLetter";
import PlatformSection from "../components/blocks/PlatformSection";
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
