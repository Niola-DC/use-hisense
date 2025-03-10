import React from 'react';
import Button from '../core/Button';
import { Typography } from '../core/Typography';
import photo from '../../assets/images/main.png';

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
          
          {/* Buttons Always Side by Side */}
          <div className="flex flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="small" 
              onClick={handleGetStarted}
              className="px-6 py-3"
            >
              Get Started Now
            </Button>

            <Button 
              variant="secondary" 
              size="small" 
              onClick={handleBecomePartner}
              className="px-4 py-2"
            >
              Become a Partner
            </Button>
          </div>
        </div>
        
        {/* Phone Display (Images Below) */}
        <div className="mt-12 flex justify-center">
            <img 
            className="w-full h-auto lg:w-full lg:h-full object-cover"
             src={photo} alt="PaySkul Mockup"  />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
