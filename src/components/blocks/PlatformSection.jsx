import React, { useState } from 'react';
import { Typography } from '../core/Typography';
import Button from '../core/Button';
import SocialLinks from '../composite/SocialLinks';
import google from '../../assets/images/Logo.png';
import photo from '../../assets/images/platform.png';
import VideoBox from '../composite/VieBox';
import about from '../../assets/videos/whyPayskul.mp4';

const PlatformSection = () => {

    const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleDownload = () => {
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

  return (
    <div id='about-us' className="bg-purple-200 rounded-lg  w-full max-w-screen mx-auto  h-full">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center py-18 pt-20 px-3 lg:pt-28 md:px-10 lg:px-18">
        
        <div className="order-1 lg:order-2 flex justify-center lg:h-full">
          <img
            src={photo}
            alt="Payskul Mockup"
            className="w-full h-auto lg:w-full lg:h-fit object-cover mb-8 lg:mr-10"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "";
            }}
          />
        </div>

        <div className="order-2 lg:order-1">
          <h2 className="lg:max-w-5/6 text-3xl md:text-4xl font-semibold text-gray-900 text-center lg:text-left">
            Finance your future today<span className="text-purple-600 font-cafe"> with </span> the PaySkul Platform
          </h2>
          <div className="space-y-3">
            <p className="lg:max-w-5/6 text-xs text-black font-medium text-center lg:text-left py-4">
              Seamless, fast, and secure education financing that helps you achieve your educational goals with minimal hassle.
            </p>

            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="black"
                size="medium"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=ng.payskul.portal&hl=en-US', '_blank')}
                className="flex items-center px-3 py-2"
              >
                <img src={google} alt="Google Play Store" className="w-20 h-6" />
              </Button>

              <Button
                variant="primary"
                size="medium"
                // onClick={() => window.open('https://play.google.com/store/apps/details?id=com.payskul', '_blank')}
                onClick={handleDownload}
                className="px-6 py-3"
              >
                Get Started Now
              </Button>
            </div>

            <div className="lg:mt-20 lg:pt-18 pt-8 flex flex-col items-center space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0 justify-center lg:justify-start">
              <Typography variant="caption" className="text-center lg:text-left text-base">
                Learn more about our community on socials
              </Typography>
              <SocialLinks />
            </div>
          </div>
        </div>

      </div>
      <VideoBox src={about} poster="About Payskul" />
    </div>
  );
};

export default PlatformSection;
