import React, { useState } from 'react';
import SocialLinks from '../components/composite/SocialLinks';
import { Typography } from '../components/core/Typography';
import Button from '../components/core/Button';
import SubmitButton from '../components/core/SubmitButton';

const ContactUsPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    // Prepare the form data to be sent to the backend API
    const requestData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    const payskul_base_url = 'https://payskul-api.up.railway.app';

    try {
      const response = await fetch(`${payskul_base_url}/klump/contact_us/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setIsSubmitted(true);  
        setErrorMessage('');    
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);  // Set submitting state to false after the request
    }
  };
  // const handlePhoneClick = (phoneNumber) => {
  //   if (navigator.clipboard) {
  //     navigator.clipboard.writeText(phoneNumber).then(() => {
  //       alert(`Phone number ${phoneNumber} copied to clipboard!`);
  //     }).catch((err) => {
  //       console.error("Failed to copy phone number:", err);
  //     });
  //   } else {
  //     // For mobile, use tel: to trigger the dialer
  //     const telLink = `tel:${phoneNumber}`;
  //     window.location.href = telLink;
  //   }
  // };

  const handlePhoneClick = (phoneNumber) => {
    if (!phoneNumber) return;
  
    // Create a tel: link to open the dialer
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
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
        {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank you for contacting us!</h2>
              <p>Our team will get back to you shortly.</p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-purple-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-purple-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full px-4 py-3 rounded-md bg-purple-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            {/* Subject Dropdown */}
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-purple-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full px-4 py-3 rounded-md bg-purple-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>

            <div className='justify-center text-center w-full'>
            <SubmitButton label="Submit" size="custom" className="justify-center" />
            </div>
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* Show error message if any */}
            </form>
          )}

          {/* Show this only on mobile */}
          <div className="md:hidden mt-6 justify-center text-center">
            <Typography variant="h6">Or call our customer support lines</Typography>
            {/* <Typography variant="p" className="mt-1 cursor-pointer"> */}
            <ul>
              <li className='cursor-pointer' onClick={handlePhoneClick}>
              +234 916 070 8325, 
              </li>
              <li className='cursor-pointer' onClick={handlePhoneClick}>
              +234 706 751 4560</li>
            </ul>
            {/* </Typography> */}
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
