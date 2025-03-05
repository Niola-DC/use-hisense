import React, { useState, useEffect } from 'react';

const PhoneDisplay = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-64 h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div 
        className="absolute inset-0 transition-transform duration-500"
        style={{ 
          transform: 'translateY(-${currentImageIndex * 100}%)',
        }}
      >
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Phone screen ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneDisplay;