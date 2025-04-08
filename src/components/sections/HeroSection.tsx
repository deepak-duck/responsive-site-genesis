
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact-us');
  };

  const handleConsultation = () => {
    window.open('https://calendly.com', '_blank');
  };

  return (
    <section 
      id="home" 
      className="py-32 md:py-40 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #121212 0%, #242424 100%)'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-akcess-lime">Everyone</span> Should Be Able To <span className="text-akcess-lime">Enjoy</span> 
            <br className="hidden md:block" />Your <span className="text-akcess-lime">Website</span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            By Streamlining Accessibility, Our Solutions Empower Businesses to Take The 
            Inclusive Approach To Comply With The ADA & Adhere To WCAG!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              className="lime-button text-lg py-6 px-8 rounded-md"
              onClick={handleContactUs}
            >
              Become a Client
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-lg hover:bg-white hover:text-akcess-black py-6 px-8 rounded-md transition-all duration-300"
              onClick={handleConsultation}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-akcess-lime opacity-5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-akcess-lime opacity-5 rounded-full blur-3xl" aria-hidden="true"></div>
    </section>
  );
};

export default HeroSection;
