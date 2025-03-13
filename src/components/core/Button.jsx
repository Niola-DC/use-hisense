import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Button({
  className,
  variant = "primary",
  size = "large",
  animate = false,
  href,
  children,
  onClick,
  type = "button",
  disabled = false,
  ...rest
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    // Add click animation
    setIsClicked(true);
    
    // Remove animation after a short delay
    setTimeout(() => {
      setIsClicked(false);
    }, 300);

    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  const buttonClasses = clsx(
    "cursor-pointer text-center rounded-lg transition-all duration-300 ease-in-out",
    className,
    {
      // Primary variant styles
      "bg-white text-black hover:bg-grey-4 focus:ring-2 focus:ring-white-500 focus:ring-offset-2": 
        variant === "primary",
      
      // Secondary variant styles
      "bg-color-primary text-white-600 border border-yellow-200 hover:bg-white-100": 
        variant === "secondary",

       // Secondary variant styles
       "bg-black text-white-600 border border-yellow-200 hover:bg-white-100 px-3 py-1": 
       variant === "black",
      
      // Animation
      "lg:animate-bounce": animate,
      
      // Size variants
      "px-8 py-3 text-lg": size === "large",
      "px-6 py-2 text-sm": size === "medium",
      "px-4 py-2 text-sm": size === "small",
      "px-20 py-3 text-lg w-full": size === "custom",
      
      // Disabled state
      "opacity-50 cursor-not-allowed": disabled,
      
      // Click animation
      "transform scale-95": isClicked
    }
  );

  // Common props for both link and button
  const commonProps = {
    className: buttonClasses,
    ...rest
  };

  // If href is provided, render as a Link
  if (href) {
    return (
      <Link 
        to={href} 
        {...commonProps}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }

  // Render as a button
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      {...commonProps}
    >
      {children}
    </button>
  );
}

// PropTypes for type checking and documentation
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  animate: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool
};