import React, { useState } from 'react';
import { faq } from '../../data/faq';

const FAQAccordion = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-auto px-4 md:px-10 lg:px-12">

    {/* <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-auto"> */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>

      {/* Student image */}
      <div className="relative z-10">
                    <img 
                      src="/student-image.jpg" 
                      alt="Student with books and backpack" 
                      className="h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "";
                      }}
                    />
                  </div>
      
      <div className="space-y-3">
        {faq.map((faq, index) => (
          <div 
            key={index} 
            className="border rounded-lg bg-pink-50 overflow-hidden"
          >
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg 
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-4 py-3 bg-white border-t">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        Can't find answer to what you're looking for? Click here to reach out to us.
      </p>
    </div>
  );
};

export default FAQAccordion;