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
    <section className="relative bg-primary text-white pt-24 pb-16 flex flex-col items-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Text Content */}
        <div className="max-w-2xl space-y-6">
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold">
            School Now Pay Later <span className='text-4xl md:text-4xl text-amber-300'> with </span> PaySkul
          </Typography>
          
          <Typography variant="body" className="text-lg text-purple-100 mb-6">
            We provide affordable education loans with flexible repayment options. 
            Plan your education without financial stress and focus on your future.
          </Typography>
          
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full md:w-auto justify-center">
            <Button 
              variant="primary" 
              size="large" 
              onClick={handleGetStarted}
              className="w-full md:w-auto"
            >
              Get Started Now
            </Button>
            <Button 
              variant="secondary" 
              size="large" 
              onClick={handleBecomePartner}
              className="w-full md:w-auto"
            >
              Become a Partner
            </Button>
          </div>
        </div>
        
        {/* Phone Display (Images Below) */}
        <div className="mt-12 flex justify-center">
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
