import React, { useState } from 'react';
import SocialLinks from '../components/composite/SocialLinks';
import { Typography } from '../components/core/Typography';
import Button from '../components/core/Button';

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
    <div className="bg-purple-50 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Section */}
        <div className='lg:py-18 text-left'>
          <Typography variant="heading">
            GET IN TOUCH WITH <span className="text-purple-900">US</span>
          </Typography>
          
          <Typography variant="body" className="mt-4">
            We are always available to answer all your inquiries or any challenges you might have with our platform. Be assured you will get a response within 24 hours.
          </Typography>

          {/* Show this only on larger screens */}
          <div className="hidden md:block mt-6">
            <Typography variant="h6">Or call our customer support lines</Typography>
            <Typography variant="p" className="mt-1">
              +234 916 070 8325, +234 706 751 4560
            </Typography>
            <div className="mt-6">
            <SocialLinks />
          </div>
          </div>

         
        </div>

        {/* Right Section - Form */}
        <div className='py-10 lg:py-5'>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            {/* Subject Dropdown */}
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="" disabled>Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="partnership">Partnership Opportunity</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>

            <SubmitButton />
            
            {/* <Button variant='secondary' className='w-full text-white bg-primary' >Submit</Button>            */}

          </form>

          {/* Show this only on mobile */}
          <div className="md:hidden mt-6 justify-center text-center">
            <Typography variant="h6">Or call our customer support lines</Typography>
            <Typography variant="p" className="mt-1">
              +234 916 070 8325, +234 706 751 4560
            </Typography>
            <div className="mt-6 flex justify-center">
            <SocialLinks />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
