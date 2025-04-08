
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
