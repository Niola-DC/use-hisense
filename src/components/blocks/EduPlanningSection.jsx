import React, { useRef, useEffect } from 'react';
import { Typography } from '../core/Typography';

const EduPlanningSection = () => {
  const videoRef = useRef(null);
  const videoUrl = null; // Set this to null instead of empty string
  // When video is ready, change to: "/assets/videos/payskul-education-overview.mp4"
  
  useEffect(() => {
    if (videoRef.current && videoUrl) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video playback error:", error);
        });
      }
      
      videoRef.current.loop = true;
    }
  }, [videoUrl]);
  
  return (
    <section className="py-16 bg-white flex flex-col items-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
       
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
        
       
        <div className="mt-12 w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
          {videoUrl ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              playsInline
              autoPlay
              loop
            >
              <source
                src={videoUrl}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-4">
                <svg 
                  className="mx-auto h-12 w-12 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                  />
                </svg>
                <Typography variant="body" className="mt-2 text-gray-500">
                  Video coming soon
                </Typography>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EduPlanningSection;