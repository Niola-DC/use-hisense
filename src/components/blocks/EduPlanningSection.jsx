import React, { useRef, useEffect } from 'react';
import { Typography } from '../core/Typography';

const EduPlanningSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, []);

  return (
    <section className="py-16 bg-white flex flex-col items-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Text Content */}
        <div className="max-w-2xl space-y-6">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900">
            Plan your education <span className="text-span">with</span> us
          </Typography>

          <Typography variant="body" className="text-lg text-gray-600">
            At PaySkul, we are in the business of empowering your education. 
            We provide affordable education loans to help you focus on your future 
            and ease your financial stress.
          </Typography>
        </div>

        {/* Video Content (Below Text) */}
        <div className="mt-12 w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <video 
            ref={videoRef}
            src="/assets/videos/payskul-education-overview.mp4"
            className="w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            loop
          >
            <source 
              src="/assets/videos/payskul-education-overview.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default EduPlanningSection;




{/* <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <Typography variant="bodySmall" className="text-gray-700">
                Flexible repayment options
              </Typography>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <Typography variant="bodySmall" className="text-gray-700">
                Quick and easy application process
              </Typography>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <Typography variant="bodySmall" className="text-gray-700">
                Personalized loan solutions
              </Typography>
            </div> */}