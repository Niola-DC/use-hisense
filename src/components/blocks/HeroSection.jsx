import React, { useState } from 'react';
import Button from '../core/Button';
import { Typography } from '../core/Typography';
import photo from '../../assets/images/main.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleGetStarted = () => {
 
     const apkUrl = "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk";
     
     const link = document.createElement('a');
     link.href = apkUrl;
     link.download = 's3://payskul-apk/production/payskul.apk';
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
 
     localStorage.setItem('hasDownloadedApp', 'true');
     setHasDownloaded(true);
   };


   const handleBecomePartner = () => {
       navigate('/contact');
   };

  return (
    <section id='home' className="relative bg-primary text-white pt-20 flex flex-col items-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Text Content */}
        <div className="max-w-2xl space-y-2">
          <Typography variant="h1" className="text-4xl md:text-4xl font-bold">
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
        <div className="flex justify-center">
            <img 
            className="w-full h-auto lg:w-full lg:h-5/6 object-cover"
             src={photo} alt="PaySkul Mockup"  />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
