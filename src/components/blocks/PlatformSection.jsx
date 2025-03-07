import React from 'react';
import { Typography } from '../core/Typography';
import Button from '../core/Button';
import SocialLinks from '../composite/SocialLinks';

const PlatformSection = () => {
  return (
    <section className="bg-purple-50 py-16">
      <div className="container max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Typography variant="heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Finance your future today 
              <br />
              <span className="text-purple-600">with </span> the PaySkul Platform
            </Typography>
            
            <Typography variant="body" className="text-lg text-gray-600">
              Seamless, fast and secure education financing that helps you 
              achieve your educational goals with minimal hassle.
            </Typography>
            
            {/* Buttons */}
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Button 
                variant="black" 
                size="large"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.payskul', '_blank')}
                className="flex items-center space-x-2"
              >
                <img 
                  src="/assets/images/google-play-logo.png" 
                  alt="Google Play Store"
                  className="w-5 h-5"
                />
                <span>Get on Google Play</span>
              </Button>
              
              <Button 
                variant="primary" 
                size="large"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.payskul', '_blank')}
              >
                Get Started Now
              </Button>
            </div>

            {/* <SocialLinks /> */}
            <div className="flex items-center space-x-4">
              <Typography variant="body">Follow us on social media</Typography>
              <SocialLinks />
            </div>

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
