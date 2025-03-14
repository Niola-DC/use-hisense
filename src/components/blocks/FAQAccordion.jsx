import React, { useState } from 'react';
import { faq } from '../../data/faq';
import photo from '../../assets/images/faqs.png';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-purple-100 rounded-lg  mx-auto h-full flex">
      
      {/* FAQ Section */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center h-full ">
        
        {/* Image Section */}
        <div className="lg:order-1 flex justify-center lg:h-full">
          <img 
            src={photo} 
            alt="Student with books and backpack" 
            className="w-full h-full lg:w-full lg:h-full object-cover shadow-lg md:w-fit"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "";
            }}
          />
        </div>

        {/* FAQ Section */}
        <div className="lg:order-2">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 mt-6 lg:mt-0 text-center lg:text-left">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faq.map((faq, index) => (
              <div key={index} className="border rounded-lg bg-pink-50 overflow-hidden font-medium text-sm lg:w-lg">
                <button
                  className="w-full px-4 py-3 text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold ">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-4 py-3 bg-white border-t text-light">
                    <p className='text-base font-bold'>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='mt-18'>
          <p className="text-xs text-gray-500 text-center mb-6 lg:text-center lg:w-lg">
              Can't find the answer you're looking for? <a href="#" className="text-purple-600 font-medium">Click here</a> to reach out to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
