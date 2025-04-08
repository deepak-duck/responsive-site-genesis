
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-akcess-black py-4 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M20 5L5 20L20 35L35 20L20 5Z" stroke="#D2FB50" strokeWidth="2" />
              <path d="M15 20H25M20 15V25" stroke="#D2FB50" strokeWidth="2" />
            </svg>
            <span className="text-white font-bold text-xl">AKCESS LABS</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-akcess-lime transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-akcess-lime transition-colors">About Us</a>
          <a href="#services" className="text-white hover:text-akcess-lime transition-colors">Services</a>
          <a href="#faq" className="text-white hover:text-akcess-lime transition-colors">FAQs</a>
          <a href="#contact" className="bg-akcess-lime text-akcess-black px-4 py-2 rounded font-semibold 
            hover:bg-opacity-90 transition-all duration-300">Contact Us</a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-akcess-black p-4 z-50">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-akcess-lime transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-white hover:text-akcess-lime transition-colors" onClick={toggleMenu}>About Us</a>
              <a href="#services" className="text-white hover:text-akcess-lime transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#faq" className="text-white hover:text-akcess-lime transition-colors" onClick={toggleMenu}>FAQs</a>
              <a href="#contact" className="bg-akcess-lime text-akcess-black px-4 py-2 rounded font-semibold 
                hover:bg-opacity-90 transition-all duration-300 text-center" onClick={toggleMenu}>Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
