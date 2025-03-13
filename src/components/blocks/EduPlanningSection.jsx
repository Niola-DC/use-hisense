import React, { useRef, useEffect } from 'react';
import { Typography } from '../core/Typography';
import photo from '../../assets/images/plan.png';
import VideoBox from '../composite/VieBox';
import slider from '../../assets/videos/slider.mp4';

const EduPlanningSection = () => {
  const videoRef = useRef(null);
  const videoUrl = null; 
  
  // useEffect(() => {
  //   if (videoRef.current && videoUrl) {
  //     const playPromise = videoRef.current.play();
      
  //     if (playPromise !== undefined) {
  //       playPromise.catch(error => {
  //         console.error("Video playback error:", error);
  //       });
  //     }
      
  //     videoRef.current.loop = true;
  //   }
  // }, [videoUrl]);
  
  return (
    <section className="py-6 pb-0 bg-white flex flex-col items-center text-center">
      <div className="container mx-auto px-2 flex flex-col items-center">
       
        <div className="max-w-2xl space-y-6">
          <Typography variant="heading" className="text-3xl md:text-4xl font-bold text-gray-900">
            Plan your education <span className="text-span">with</span> us
          </Typography>
          <Typography variant="body" className="text-lg text-gray-600">
            At PaySkul, we are in the business of empowering your education.
            We provide affordable education loans to help you focus on your future
            and ease your financial stress.
          </Typography>
        </div>
        <div>
          <img
          src={photo}
          alt='image'
          className='w-full h-auto lg:w-full lg:h-fit object-cover md:w-120 md:h-90 md:items-center z-10 '/>

        </div>
      </div>
      <div className='w-full'>
      <VideoBox src={slider} poster="Motion" />
      </div>
    </section>
  );
};

export default EduPlanningSection;




 {/* <div className="mt-12 w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
        //  className='max-w-5xl h-100 md:w-100 md:h-50' />

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
        </div> */}