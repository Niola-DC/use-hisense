import React from 'react';

const icons = {
  flexible: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 mx-auto text-purple-300">
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  interest: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 mx-auto text-purple-300">
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v2m0 8v2m-6-6H4l2.845 2.7a1 1 0 010 1.4L4 16h6m6 0v-2m0-8v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  application: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 mx-auto text-purple-300">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  transparent: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 mx-auto text-purple-300">
      <path d="M14 10l-2 1m-4 3l-1 1m11-7a3 3 0 11-6 0 3 3 0 016 0zM3 17v-2a3 3 0 013-3h14a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const FeatureIcon = ({ name }) => {
  return icons[name] || null;
};

export default FeatureIcon;