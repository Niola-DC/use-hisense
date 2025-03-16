import React, { useEffect, useRef, useState } from 'react';
import skul from '../../assets/images/skul.png';
import mobile from '../../assets/images/center.png';
import eduPayImg from '../../assets/images/credit.png';
import skulMartImg from '../../assets/images/mart.png';
import skolarImg from '../../assets/images/skolar.png';
import skulFindImg from '../../assets/images/find.png';

const Services = () => {
    const services = [
        {
            id: 'eduPay',
            title: 'EduPay',
            description: 'We provide flexible and transparent education loans to help you achieve your goals without financial worry.',
            image: eduPayImg
        },
        {
            id: 'skulMart',
            title: 'SkulMart',
            description: 'Your one-stop shop for school essentials, ensuring students have all they need to excel.',
            image: skulMartImg
        },
        {
            id: 'skolar',
            title: 'Skolar',
            description: 'A scholarship platform that connects students with financial aid opportunities worldwide.',
            image: skolarImg
        },
        {
            id: 'skulFind',
            title: 'SkulFind',
            description: 'Helping students discover the best institutions and educational opportunities suited for them.',
            image: skulFindImg
        }
    ];

    const [activeService, setActiveService] = useState(null);
    const [activeImage, setActiveImage] = useState(skul);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to the center (Skul image) on load
        if (scrollContainerRef.current) {
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            scrollContainerRef.current.scrollLeft = scrollWidth / 2 - scrollContainerRef.current.clientWidth / 2;
        }
    }, []);

    const handleServiceSelect = (serviceId) => {
        const selectedService = services.find(service => service.id === serviceId);
        setActiveService(serviceId);
        setActiveImage(selectedService.image);
    };

    return (
        <div id='features' className="bg-white w-full max-w-6xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Our Services</h2>
                <p className="text-gray-700 max-w-2xl mx-auto text-sm">
                    At PaySkul, we empower your education and future. <br/> Download the app to school with ease.
                </p>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex flex-wrap justify-center gap-6 mx-6 mt-4">
                <div className="w-full md:flex md:flex-row md:justify-center md:gap-6">
                    {/* Left Side Services */}
                    <div className="flex flex-col gap-4">
                        {services.slice(0, 2).map(service => (
                            <div
                                key={service.id}
                                className={`p-6 w-80 rounded-lg shadow-lg cursor-pointer transition-all ${activeService === service.id ? 'bg-gray-100' : 'bg-white'}`}
                                onClick={() => handleServiceSelect(service.id)}
                            >
                                <div className="w-8 h-8 bg-purple-200 rounded-full mb-3"></div>
                                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Center App Preview */}
                    <div>
                        <img className="h-fit w-[560px] object-cover transition-opacity duration-300" src={activeImage} alt="Service preview" />
                    </div>

                    {/* Right Side Services */}
                    <div className="flex flex-col gap-4">
                        {services.slice(2).map(service => (
                            <div
                                key={service.id}
                                className={`p-6 w-80 rounded-lg shadow-lg cursor-pointer transition-all ${activeService === service.id ? 'bg-gray-100' : 'bg-white'}`}
                                onClick={() => handleServiceSelect(service.id)}
                            >
                                <div className="w-8 h-8 bg-purple-200 rounded-full mb-3"></div>
                                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center">
                {/* Mobile Image Preview (Centered on Load) */}
                {/* <img className="h-[300px] w-full max-w-xs object-cover mb-4" src={activeImage} alt="Service preview" /> */}

                {/* Scrollable Service Boxes */}
                <div ref={scrollContainerRef} className="w-full overflow-x-auto pb-4 flex gap-4 snap-x">
                    <div className="flex gap-4 min-w-max">
                        {/* Centered Skul Image on Load */}
                        <div className="min-w-[250px] h-[350px] flex items-center justify-center ml-8">
                            {/* <img className="h-screen w-full object-cover" src={mobile} alt="Skul" /> */}
                            <img
                                className="h-full w-full object-contain"
                                src={mobile}
                                alt="Skul"
                            />

                        </div>

                        <div 
  ref={scrollContainerRef} 
  className="w-full h-[410px] overflow-x-auto pb-4 flex gap-6 snap-x snap-mandatory"
>
  <div className="flex gap-6 min-w-max">
    {services.map((service, index) => (
      <div 
        key={service.id}
        className="w-[250px] flex flex-col items-center text-center cursor-pointer snap-start"
      >
        {/* Alternating Layout */}
        {index % 2 !== 0 && (
          <div className="mb-2 p-6 w-[250px] rounded-lg shadow-lg cursor-pointer">
            <div className="w-6 h-6 bg-purple-200 rounded-full mb-2 mx-auto"></div>
            <h3 className="text-base font-semibold mb-1">{service.title}</h3>
            <p className="text-gray-600 text-xs">{service.description}</p>
          </div>
        )}

        {/* Service Image with Light Purple Background */}
        <div className="w-[250px] h-[200px] bg-purple-100 rounded-lg flex justify-center items-center p-4">
          <img className="h-full w-full object-cover rounded-md" src={service.image} alt={service.title} />
        </div>

        {index % 2 === 0 && (
          <div className="mt-2 p-6 w-[250px] rounded-lg shadow-lg cursor-pointer">
            <div className="w-6 h-6 bg-purple-200 rounded-full mb-2 mx-auto"></div>
            <h3 className="text-base font-semibold mb-1">{service.title}</h3>
            <p className="text-gray-600 text-xs">{service.description}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>



                        {/* Service Boxes with their Images
                        {services.map(service => (
                            <div
                                key={service.id}
                                className="min-w-[250px] flex flex-col items-center text-center cursor-pointer snap-start"
                                onClick={() => handleServiceSelect(service.id)}
                            >
                                <img className="h-[250px] w-full object-cover mb-2" src={service.image} alt={service.title} />
                                <div className="p-4 border rounded-lg shadow-lg w-full">
                                    <div className="w-6 h-6 bg-purple-200 rounded-full mb-2 mx-auto"></div>
                                    <h3 className="text-base font-semibold mb-1">{service.title}</h3>
                                    <p className="text-gray-600 text-xs">{service.description}</p>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;




// <div className="hidden md:flex flex-wrap justify-center gap-6 mx-6">
//   <div className="w-full md:flex md:flex-row md:justify-center md:gap-6 items-center">
    
//     {/* Left Side Services */}
//     <div className="flex flex-col gap-6">
//       {services.slice(0, 2).map(service => (
//         <div
//           key={service.id}
//           className={`p-6 w-[300px] h-[250px] flex flex-col justify-center items-center rounded-lg shadow-lg cursor-pointer transition-all ${
//             activeService === service.id ? 'bg-gray-100' : 'bg-white'
//           }`}
//           onClick={() => handleServiceSelect(service.id)}
//         >
//           <div className="w-10 h-10 bg-purple-200 rounded-full mb-3"></div>
//           <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
//           <p className="text-gray-600 text-sm text-center">{service.description}</p>
//         </div>
//       ))}
//     </div>

//     {/* Center App Preview */}
//     <div className="w-[300px] h-[250px] bg-purple-100 rounded-lg flex justify-center items-center p-4">
//       <img className="h-full w-full object-cover rounded-md transition-opacity duration-300" src={activeImage} alt="Service preview" />
//     </div>

//     {/* Right Side Services */}
//     <div className="flex flex-col gap-6">
//       {services.slice(2).map(service => (
//         <div
//           key={service.id}
//           className={`p-6 w-[300px] h-[250px] flex flex-col justify-center items-center rounded-lg shadow-lg cursor-pointer transition-all ${
//             activeService === service.id ? 'bg-gray-100' : 'bg-white'
//           }`}
//           onClick={() => handleServiceSelect(service.id)}
//         >
//           <div className="w-10 h-10 bg-purple-200 rounded-full mb-3"></div>
//           <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
//           <p className="text-gray-600 text-sm text-center">{service.description}</p>
//         </div>
//       ))}
//     </div>

//   </div>
// </div>
