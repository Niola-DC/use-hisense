import FAQAccordion from "./FAQAccordion";
import NewsletterSection from "./NewsLetter";

const KnowUs = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side with image and FAQ */}
            <div className="bg-indigo-900 rounded-t-lg overflow-hidden">
              <div className="h-72 md:h-96 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Background decorative elements */}
                  <div className="absolute w-full h-full opacity-20">
                    <div className="absolute top-10 right-10 w-32 h-32 border border-yellow-500 rounded-full"></div>
                    <div className="absolute bottom-20 left-20 w-40 h-40 border border-yellow-500"></div>
                  </div>
                  
                  {/* Student image */}
                  <div className="relative z-10">
                    <img 
                      src="/student-image.jpg" 
                      alt="Student with books and backpack" 
                      className="h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300x400/indigo/white?text=Student";
                      }}
                    />
                  </div>
                </div>
              </div>
              <FAQAccordion />
            </div>
            
            {/* Right side with Newsletter */}
            <div className="bg-white rounded-lg shadow-md">
              <NewsletterSection />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default KnowUs;