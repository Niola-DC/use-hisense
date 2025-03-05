import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button  from '../core/Button';
import NavigationLink from '../composite/NavigationLink';
import logo from '../images/payskul-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    window.open('https://yourappstore.com/payskul', '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About Us', path: '/about' },
    { label: 'Help', path: '/help' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-color-primary shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="PaySkul Logo" 
            className="h-8"
          />
          
        </Link>

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
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
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