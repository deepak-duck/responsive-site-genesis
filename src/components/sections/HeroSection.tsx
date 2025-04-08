
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="section-padding pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-akcess-lime">Everyone</span> Should Be Able To <span className="text-akcess-lime">Enjoy</span> 
            <br />Your <span className="text-akcess-lime">Website</span>, Regardless Of Ability!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            By Streamlining Accessibility, Akcess Lab's Solutions Empower Businesses to Take The 
            Inclusive Approach To Comply With The ADA & Adhere To WCAG!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="lime-button">Become a Client</Button>
            <Button variant="outline" className="border-white hover:bg-white hover:text-akcess-black transition-all duration-300">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
