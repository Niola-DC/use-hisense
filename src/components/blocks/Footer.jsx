import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialLinks from '../composite/SocialLinks';
import DownloadButton from '../core/DownloadButton';

const Footer = () => {

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
    <div className="bg-primary px-6 py-16 mt-2 lg:py-12 md:px-10">
      <div className="py-4 max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-6 lg:space-y-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-12">
          <ul className="space-y-2 lg:space-y-6">
            <li className="font-semibold text-white text-left">Explore</li>
            <li className='text-left'>
              <Link to="/communities" className="text-gray-300 hover:text-white transition">
                Communities
              </Link>
            </li>
            <li className='text-left'>
              <Link to="/resources" className="text-gray-300 hover:text-white transition">
                Resources
              </Link>
            </li>
          </ul>

          <ul className="space-y-2 lg:space-y-6">
            <li className="font-semibold text-white text-left">Legal</li>
            <li className='text-left'>
              <Link to="/terms" className="text-gray-300 hover:text-white transition">
                Terms
              </Link>
            </li>
            <li className='text-left'>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>

          <ul className="space-y-2 lg:space-y-6">
            <li className="font-semibold text-white text-left">Contact Us</li>
            <li className="text-gray-300">Email: info@payskul.com</li>
          <SocialLinks />

          </ul>
        </div>

        {/* Social Links (Now in a row) */}
        <div className="flex space-x-4">
          {/* <SocialLinks /> */}
          <DownloadButton size='small' onClick={handleDownload}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
