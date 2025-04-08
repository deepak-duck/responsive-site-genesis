
import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import StatCard from '@/components/StatCard';
import FaqItem from '@/components/FaqItem';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Index = () => {
  // Services data
  const services = [
    {
      title: "Accessibility Testing",
      description: "Accessibility audit and testing service that evaluates accessibility and compliance level of your digital solutions.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Accessibility Training",
      description: "Comprehensive accessibility education for your development and design teams to build accessible products from the ground up.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Remediation Services",
      description: "Expert remediation services to fix accessibility issues in your existing digital products and platforms.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Ongoing Support",
      description: "Continuous accessibility monitoring and support to ensure your digital properties remain compliant as they evolve.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Legal Compliance",
      description: "Navigate complex accessibility laws and regulations with our expert guidance and compliance services.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    },
    {
      title: "Accessible Design",
      description: "Create beautiful, inclusive designs that work for everyone without sacrificing aesthetics or functionality.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What does 'lorem ipsum' actually mean?",
      answer: "Lorem ipsum is dummy text used in laying out print, graphic or web designs. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      question: "How do we know what kind of sounds dinosaurs made?",
      answer: "Scientists study fossilized vocal organs, compare with living relatives like birds and crocodiles, and analyze skull structure to make educated guesses about dinosaur sounds."
    },
    {
      question: "Why work from home is not as fun as we thought it would be?",
      answer: "Working from home can blur work-life boundaries, reduce social interaction, create distractions, and lead to zoom fatigue. The lack of separation between work and personal space can also increase stress."
    },
    {
      question: "In what way did human beings start using words?",
      answer: "Language likely evolved gradually from gestures and simple vocalizations to more complex communication systems. Archaeological evidence suggests symbolic communication began at least 100,000 years ago."
    },
    {
      question: "Which is the least developed area in the world",
      answer: "According to various development indexes, regions in Sub-Saharan Africa, particularly countries like South Sudan, Central African Republic, and Niger consistently rank among the least developed areas in the world."
    }
  ];

  return (
    <div className="bg-akcess-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="section-padding bg-black">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Services We Offer</h2>
          <p className="text-center mb-12 text-gray-300">
            Our comprehensive accessibility solutions ensure your digital presence is inclusive and compliant
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                standards={service.standards}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-black">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <div className="bg-akcess-lime rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="p-8 lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4 text-akcess-black">Get in touch</h2>
                <p className="text-akcess-black mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore id officia deserunt mollit anim.
                </p>
                <ContactForm />
              </div>
              <div className="bg-akcess-black p-8 rounded-r-lg">
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Office</h3>
                  <p className="text-gray-300">545, Street 11, Block F <br />
                  Some landmark, Ohio <br />
                  United States</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact</h3>
                  <div className="flex items-center mb-4">
                    <Phone size={20} className="mr-3 text-akcess-lime" />
                    <span>+1 202 555 0123</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="mr-3 text-akcess-lime" />
                    <span>info@akcesslabs.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M20 5L5 20L20 35L35 20L20 5Z" stroke="#D2FB50" strokeWidth="2" />
                  <path d="M15 20H25M20 15V25" stroke="#D2FB50" strokeWidth="2" />
                </svg>
                <span className="text-white font-bold text-xl">AKCESS LABS</span>
              </div>
              <p className="text-gray-400">Making the web accessible for everyone, one website at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Guidelines and How to</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Quote from the field</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">How to start a blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Getting Started</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Guidelines and How to</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Quote from the field</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">How to start a blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Accessibility</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Testing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Helpdesk</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Design & Dev</a></li>
                <li><a href="#" className="text-gray-400 hover:text-akcess-lime">Marketplace</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 The Great Company. All Rights Reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-akcess-lime">Terms of service</a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime">Security</a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime">Sitemap</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-akcess-lime"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-akcess-lime"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
