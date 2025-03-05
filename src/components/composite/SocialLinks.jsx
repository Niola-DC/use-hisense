import React from 'react';

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-purple-600">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
      </svg>
    ),
    link: 'https://facebook.com/payskul'
  },
  { 
    name: 'Twitter', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-purple-600">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.824 0 1.567.349 2.09.907.652-.128 1.262-.368 1.81-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
      </svg>
    ),
    link: 'https://twitter.com/payskul'
  },
  { 
    name: 'LinkedIn', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-purple-600">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.111c.939-1.637 4-1.366 4 1.774v3.115z"/>
      </svg>
    ),
    link: 'https://linkedin.com/company/payskul'
  }
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-6">
      {socialLinks.map((social) => (
        <a 
          key={social.name} 
          href={social.link} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;