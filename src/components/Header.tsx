
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Training Programs', href: '#programs' },
    { name: 'Placements', href: '#placements' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>info@aadhira.com</span>
            </div>
          </div>
          <div className="text-blue-100">
            🎉 Free Demo Classes Available - Register Now!
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      } ${isScrolled ? 'lg:top-0' : 'lg:top-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aadhira
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </div>
              <div className="ml-2 md:ml-3 hidden sm:block">
                <div className="text-xs md:text-sm font-medium text-gray-800">Training & Placement</div>
                <div className="text-xs text-gray-500 hidden md:block">Empowering Students</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 xl:px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group rounded-lg hover:bg-blue-50 text-sm xl:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="hidden sm:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-medium text-sm md:text-base">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 touch-target"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <nav className="space-y-1 border-t border-gray-100 pt-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium touch-target"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-gray-100 mt-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium touch-target">
                  Get Started
                </button>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="px-4 pt-4 space-y-3 text-sm text-gray-600">
                <a href="tel:+919876543210" className="flex items-center touch-target">
                  <Phone size={16} className="mr-3 text-blue-600" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:info@aadhira.com" className="flex items-center touch-target">
                  <Mail size={16} className="mr-3 text-blue-600" />
                  <span>info@aadhira.com</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
