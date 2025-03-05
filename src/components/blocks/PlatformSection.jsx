import React from 'react';
import { Typography } from '../core/Typography';
import { Button } from '../core/Button';
import SocialLinks from '../composite/SocialLinks';

const PlatformSection = () => {
  return (
    <section className="bg-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900">
              Finance your future today 
              <br />
              <span className="text-purple-600">with the PaySkul Platform</span>
            </Typography>
            
            <Typography variant="body" className="text-lg text-gray-600">
              Seamless, fast and secure education financing that helps you 
              achieve your educational goals with minimal hassle.
            </Typography>
            
            <div className="flex space-x-4">
              <Button 
                variant="primary" 
                size="large"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.payskul', '_blank')}
              >
                Get Started Now
              </Button>
              
              <img 
                src="/assets/images/google-play-badge.png" 
                alt="Google Play Store" 
                className="h-12"
              />
            </div>

            <SocialLinks />
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/assets/images/phone-mockup.png" 
                alt="PaySkul Mobile App" 
                className="w-64 md:w-80 z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-purple-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;