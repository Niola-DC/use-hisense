import React from 'react';
import Button from '../core/Button';
import { Typography } from '../core/Typography';
import PhoneDisplay from '../composite/PhoneDisplay';

const HeroSection = () => {
  const handleGetStarted = () => {
    // window.location.href = '/signup';
  };

  const handleBecomePartner = () => {
    // window.location.href = '/partner-signup';
  };

  return (
    <section className="relative bg-primary text-white pt-24 pb-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold">
            School Now Pay Later with PaySkul
          </Typography>
          
          <Typography variant="body" className="text-lg text-purple-100 mb-6">
            We provide affordable education loans with flexible repayment options. 
            Plan your education without financial stress and focus on your future.
          </Typography>
          
          <div className="flex space-x-4">
            <Button 
              variant="primary" 
              size="large" 
              onClick={handleGetStarted}
            >
              Get Started Now
            </Button>
            <Button 
              variant="secondary" 
              size="large" 
              onClick={handleBecomePartner}
            >
              Become a Partner
            </Button>
          </div>
        </div>
        
        {/* Phone Display */}
        <div className="hidden md:flex justify-center relative">
          <PhoneDisplay 
            images={[
              '/assets/images/phone-screen-1.png',
              '/assets/images/phone-screen-2.png',
              '/assets/images/phone-screen-3.png'
            ]} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;