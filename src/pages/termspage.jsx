import React from 'react';
import Heading from '../components/core/Headings';

const TermsPage = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-1 md:py-16 md:w-full">
            <div className="bg-white p-6 sm:p-8 rounded-lg  max-w-4xl mx-auto w-full md:w-3/4 lg:w-2/3">
                <Heading variant="h3" className=" text-2xl sm:text-3xl md:text-4xl">
                    Terms & Conditions
                </Heading>
            
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4 sm:mb-6">
                    PaySkul's Term of Use
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Your privacy is our top priority at PaySkul. We respect your privacy regarding any information we may collect from you across our website.
                </p>
            </div>



            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">

                <p className="text-gray-700">
                    PaySkul ltd As the data collector, ("we" "us" "our") are committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
                </p>

                <p className="text-gray-700">
                    Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting payskul.com or using PaySkul mobile application hosted on the Google Play Store or Apple Play Store (collectively "our site") you are accepting and consenting to the practices described in this policy.
                </p>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">What information do we collect?</h3>
                    <p className="text-gray-700">
                        We may collect and process the following data about you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Information you provide by filling in forms on our site</li>
                        <li>Information provided at the time of registering to use our site, subscribing to our service, posting material or requesting further services</li>
                        <li>Details of transactions you carry out through our site and of the fulfillment of your orders</li>
                        <li>Details of your visits to our site including, but not limited to, traffic data, location data, and other communication data</li>
                    </ul>
                </div>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">How we use your information</h3>
                    <p className="text-gray-700">
                        We use information held about you in the following ways:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>To provide you with information, products or services that you request from us</li>
                        <li>To carry out our obligations arising from any contracts entered into between you and us</li>
                        <li>To notify you about changes to our service</li>
                        <li>To ensure that content from our site is presented in the most effective manner for you</li>
                    </ul>
                </div>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Data Security</h3>
                    <p className="text-gray-700">
                        We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>
                </div>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Your Rights</h3>
                    <p className="text-gray-700">
                        You have rights under data protection laws in relation to your personal data, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Request access to your personal data</li>
                        <li>Request correction of your personal data</li>
                        <li>Request erasure of your personal data</li>
                        <li>Object to processing of your personal data</li>
                        <li>Request restriction of processing your personal data</li>
                        <li>Request transfer of your personal data</li>
                        <li>Right to withdraw consent</li>
                    </ul>
                </div>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Changes to this Privacy Policy</h3>
                    <p className="text-gray-700">
                        We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
                    </p>
                </div>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
                    <p className="text-gray-700">
                        If you have any questions about this privacy policy, please contact us at:
                    </p>
                    <p className="text-gray-700">
                        Email: privacy@payskul.com<br />
                        Phone: +234 916 070 8325
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;