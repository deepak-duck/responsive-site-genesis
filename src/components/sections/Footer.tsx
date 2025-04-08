
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
