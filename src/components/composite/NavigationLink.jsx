import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = ({ label, path, mobile = false }) => {
  const baseClasses = 'text-gray-700 hover:text-purple-600 transition-colors';
  const mobileClasses = mobile 
    ? 'block w-full text-center py-2 border-b' 
    : '';

  return (
    <Link 
      to={path} 
      className={`${baseClasses} ${mobileClasses}`}
    >
      {label}
    </Link>
  );
};

export default NavigationLink;