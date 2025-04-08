
import React from 'react';
import StatCard from '@/components/StatCard';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-akcess-lime">About Us</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              We are here to make great design accessible and add delightful for everyone
            </h3>
            <p className="mb-6 text-gray-300">
              It is a long established fact that a reader will be distracted by the readable content of a 
              page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
              normal distribution of letters, as opposed to using 'Content here, content here', making it 
              look like readable English. 
            </p>
            <p className="text-gray-300">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default 
              model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/eb12a068-e2e7-4527-b519-de4eda321ecf.png" 
              alt="Team working on accessibility solutions" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <StatCard 
            number="1"
            title="Founded"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <StatCard 
            number="50M"
            title="Monthly Engagements"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <StatCard 
            number="400k"
            title="User Accessibility"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold mb-6">Our Mission</h3>
          <p className="text-gray-300 mb-12">
            It is a long established fact that a reader will be distracted by the readable content of a 
            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
            normal distribution of letters, as opposed to using 'Content here, content here', making it 
            look like readable English. Many desktop publishing packages and web page editors now use 
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web 
            sites still in their infancy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-akcess-lime rounded-full flex items-center justify-center w-10 h-10 shrink-0 text-akcess-black">
                1
              </div>
              <div>
                <h4 className="font-bold mb-2">Team</h4>
                <p className="text-gray-300 text-sm">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-akcess-lime rounded-full flex items-center justify-center w-10 h-10 shrink-0 text-akcess-black">
                2
              </div>
              <div>
                <h4 className="font-bold mb-2">Board</h4>
                <p className="text-gray-300 text-sm">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-akcess-lime rounded-full flex items-center justify-center w-10 h-10 shrink-0 text-akcess-black">
                3
              </div>
              <div>
                <h4 className="font-bold mb-2">Press</h4>
                <p className="text-gray-300 text-sm">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
