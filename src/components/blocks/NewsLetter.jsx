import { useState } from "react";
import { Typography } from "../core/Typography";

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //  email submission logic
      
    };
  
    return (
      <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-8 lg:px-12">

      {/* <div className="w-full max-w-4xl mx-auto py-12 px-4"> */}
        <div className="text-center">
          <Typography variant="heading">Subscribe to our Newsletter</Typography>
          <Typography>
            Gorgeous, high-quality design system for mobile, tablet & desktop devices at low resource digital 
            lending platforms with streamline on landing pages
            </Typography>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-150"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            We will never spam you. Only useful mails with promo and events
          </p>
        </div>
      </div>
    );
  };
  
 
  export default NewsletterSection;