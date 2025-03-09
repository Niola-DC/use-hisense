import React from 'react';
import photo from '../../assets/images/platform.png';
import google from '../../assets/images/Logo.png';
import Button from '../core/Button';
import { Typography } from '../core/Typography';

const Platform = () => {
    return (
        <div className="bg-purple-200 rounded-lg p-6 w-full max-w-screen mx-auto px-4 md:px-10 lg:px-12 h-full">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div className="lg:order-1 flex justify-center lg:h-full">
                    <img
                        src={photo}
                        alt="Payskul Mockup"
                        className="w-full h-auto lg:w-full lg:h-full object-cover rounded-lg shadow-lg"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "";
                        }}
                    />
                </div>
                <div className="lg:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center lg:text-left">
                        Finance your future today<span className="text-purple-600"> with </span> the PaySkul Platform
                    </h2>
                    <div className="space-y-3">
                        <p className="text-lg text-gray-600 text-center lg:text-left">
                            Seamless, fast, and secure education financing that helps you achieve your educational goals with minimal hassle.
                        </p>

                        {/* Buttons always side by side */}
                        <div className="flex flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                variant="black"
                                size="medium"
                                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.payskul', '_blank')}
                                className="flex items-center px-3 py-2"
                            >
                                <img src={google} alt="Google Play Store" className="w-20 h-6" />
                            </Button>

                            <Button
                                variant="primary"
                                size="medium"
                                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.payskul', '_blank')}
                                className="px-6 py-3"
                            >
                                Get Started Now
                            </Button>
                        </div>
                        <div className="mt-16 flex flex-col items-center space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0 justify-center lg:justify-start">
                            <Typography variant="body" className="text-center lg:text-left">
                                Learn more about our community on socials
                            </Typography>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;
