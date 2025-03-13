import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button  from '../core/Button';
import NavigationLink from '../composite/NavigationLink';
import logo from '../images/payskul-logo.png'
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About Us', path: '/about' },
    { label: 'Help', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-color-primary shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="PaySkul Logo" 
            className="h-8"
          />
          
        </Link> */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center text-white">
          {navLinks.map((link) => (
            <NavigationLink
              key={link.path} 
              label={link.label} 
              path={link.path} 
            />
          ))}
          <Button 
            variant="primary" 
            size="medium"
            onClick={handleDownload}
          >
            Download Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4 text-white">
            {navLinks.map((link) => (
              <NavigationLink 
                key={link.path} 
                label={link.label} 
                path={link.path} 
                mobile 
              />
            ))}
            <Button 
              variant="primary" 
              size="medium"
              onClick={handleDownload}
            >
              Download Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;