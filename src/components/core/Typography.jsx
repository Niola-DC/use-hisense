import React from 'react';
import PropTypes from "prop-types";

const variantStyles = {
  h1: 'text-4xl md:text-5xl font-medium text-white',
  h2: 'text-3xl md:text-4xl font-medium text-white',
  heading: 'text-3xl md:text-3xl font-medium text-black',
  h3: 'text-2xl md:text-3xl font-semibold text-gray-800',
  h4: 'text-xl md:text-2xl font-medium text-gray-800',
  h5: 'text-lg md:text-xl font-medium text-white',
  h6: 'text-normal md:text-lg font-normal text-black',
  priority: 'text-sm md:text-sm font-normal text-white',
  body: 'text-gray-600 leading-relaxed text-sm',
  bodySmall: 'text-sm text-gray-500 leading-relaxed',
  caption: 'text-xs text-gray-500',
  span: 'text-3xl md:text-4xl text-yellow',
  p: 'text-sm mb-8 max-w-2xl mx-auto text-grey-800'
};

const Typography = ({
  variant = 'body',
  children,
  className = '',
  component,
  ...props
}) => {
  const defaultComponent = variant.startsWith('h') && variant !== 'heading'
    ? variant
    : 'p';
  
  const Component = component || defaultComponent;
  
  return (
    <Component
      className={`
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'heading', 'span',
    'body', 'bodySmall', 'caption', 'p'
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
};

export { Typography };