import { useState } from "react";
import { Typography } from "../core/Typography";
import SubmitButton from "../core/SubmitButton";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState(''); // To show error message if any
  const [isSubmitting, setIsSubmitting] = useState(false);  // To manage submitting state


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage('Please enter an email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://payskul-api.up.railway.app/core/newsletter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setEmail('');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      setErrorMessage('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false); // End submitting
    }
  };

  return (
    <div id="subscribe" className="w-full max-w-4xl mx-auto py-18 px-4 md:px-8 lg:px-12">

      {/* <div className="w-full max-w-4xl mx-auto py-12 px-4"> */}
      <div className="text-center">
        <Typography variant="heading" >Subscribe to our Newsletter</Typography>
        {/* <Typography variant="p" className="mt-2">
        Don't miss out! Stay ahead with exclusive updates, insider news, and special offers—delivered straight to you.
        </Typography> */}
        <Typography variant="p">
        Don't miss out! Stay ahead with exclusive updates, insider news, and special offers from <span className="text-purple-800">Payskul</span>—your go-to platform for seamless school management.
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mt-10">
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

          {/* <button
              type="submit"
              onClick={handleSubmit}
              className="bg-primary hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-150"
              value={isSubmitting ? 'Submitting...' : 'Subscribe now'}
              disabled={isSubmitting}  
            >
              Subscribe
            </button> */}
          <SubmitButton
            onClick={handleSubmit}
            label={isSubmitting ? "Submitting..." : "Submit"}
            disabled={isSubmitting}
          />

          {/* <SubmitButton onClick={handleSubmit} value={isSubmitting ? 'Submitting..'} disabled={isSubmitting} /> */}
        </form>
        {errorMessage && <p className="text-center text-sm text-red-600">{errorMessage}</p>}


        <p className="text-xs text-gray-500 mt-4">
          We will never spam you. Only useful mails with promo and events
        </p>
      </div>
    </div>
  );
};


export default NewsletterSection;

