import React, { useState } from 'react';
import SocialLinks from '../components/composite/SocialLinks';
import { Typography } from '../components/core/Typography';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:space-x-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          {/* <h1 className="text-4xl md:text-5xl font-bold mb-6"> */}
            <Typography variant='heading' >
            GET IN TOUCH WITH <span className="text-purple-700">US</span>
            </Typography>
          {/* </h1> */}
          
         <Typography variant='body'>
            We are always available to answer all your inquiries or any challenges you might have with our platform. Be rest assured you will get a response within 24 hours
            </Typography>
          
          <div className="mb-8">
            <Typography variant='h6'>Or call our customer support lines</Typography>
            <Typography variant='p'>+234 916 070 8325, +234 706 751 4560</Typography>
            {/* <h2 className="text-xl font-bold mb-4">Or call our customer support lines</h2>
            <p className="text-lg">+234 916 070 8325, +234 706 751 4560</p> */}
          </div>
          
          <SocialLinks />
        </div>
        
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            <div>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="" disabled selected>Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;