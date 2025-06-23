
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Training Programs': [
      'Data Analytics',
      'Python Programming',
      'Web Development',
      'Digital Marketing',
      'Graphic Design',
      'Cybersecurity'
    ],
    'Services': [
      'Corporate Training',
      'Placement Assistance',
      'Career Counseling',
      'Skill Assessment',
      'Interview Preparation',
      'Resume Building'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Success Stories',
      'Careers',
      'Blog',
      'News & Updates'
    ],
    'Support': [
      'Contact Us',
      'Help Center',
      'Student Portal',
      'Downloads',
      'Privacy Policy',
      'Terms of Service'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Aadhira
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                Empowering students with industry-relevant skills and providing comprehensive 
                training programs for career success. Your gateway to a brighter future.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm md:text-base">
                  <Phone size={16} className="mr-3 text-blue-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center text-sm md:text-base">
                  <Mail size={16} className="mr-3 text-blue-400" />
                  <span className="text-gray-300">info@aadhira.com</span>
                </div>
                <div className="flex items-start text-sm md:text-base">
                  <MapPin size={16} className="mr-3 text-blue-400 mt-0.5" />
                  <span className="text-gray-300">123 Training Center<br />Bangalore, India 560001</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="lg:col-span-1">
                <h3 className="font-bold mb-4 md:mb-6 text-white text-base md:text-lg">{category}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base hover:translate-x-1 transform inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Stay Updated</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Subscribe to our newsletter for the latest updates on courses, placements, and industry trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300 text-base"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-sm md:text-base text-center md:text-left">
              © 2024 Aadhira Training & Placement. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-gray-800`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>

            {/* Additional Links */}
            <div className="flex space-x-4 md:space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
