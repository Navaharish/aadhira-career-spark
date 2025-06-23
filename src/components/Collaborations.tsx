
import React, { useState, useEffect } from 'react';
import { Building2, Globe, MapPin, TrendingUp, Users, Award } from 'lucide-react';

const Collaborations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Technology', 'Finance', 'Healthcare', 'Manufacturing'];

  const partners = [
    {
      name: 'TCS',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop',
      category: 'Technology',
      description: 'Leading IT services and consulting company',
      employees: '500K+',
      locations: '50+ countries'
    },
    {
      name: 'Infosys',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop',
      category: 'Technology',
      description: 'Global consulting and IT services provider',
      employees: '300K+',
      locations: '45+ countries'
    },
    {
      name: 'Wipro',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop',
      category: 'Technology',
      description: 'Information technology and consulting services',
      employees: '200K+',
      locations: '40+ countries'
    },
    {
      name: 'HDFC Bank',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop',
      category: 'Finance',
      description: 'Leading banking and financial services',
      employees: '150K+',
      locations: 'India & International'
    },
    {
      name: 'Reliance Industries',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop',
      category: 'Manufacturing',
      description: 'Diversified industrial conglomerate',
      employees: '400K+',
      locations: 'Global presence'
    },
    {
      name: 'Apollo Hospitals',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop',
      category: 'Healthcare',
      description: 'Healthcare services and hospitals',
      employees: '100K+',
      locations: 'Pan-India'
    }
  ];

  const filteredPartners = partners.filter(partner => 
    activeCategory === 'All' || partner.category === activeCategory
  );

  return (
    <section id="placements" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industry <span className="gradient-text">Collaborations</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partnering with leading companies to ensure our students get the best career opportunities
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {filteredPartners.map((partner, index) => (
            <div
              key={partner.name}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-12 object-contain"
                  />
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-medium">
                    {partner.category}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {partner.name}
                </h3>
                
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                  {partner.description}
                </p>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center text-gray-500 text-xs md:text-sm">
                    <Users size={16} className="mr-2 text-blue-600" />
                    <span>{partner.employees} employees</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs md:text-sm">
                    <MapPin size={16} className="mr-2 text-green-600" />
                    <span>{partner.locations}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 md:mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 md:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg font-medium text-sm md:text-base">
                  View Opportunities
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center bg-white rounded-2xl p-4 md:p-8 shadow-lg hover-scale">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Building2 className="text-white" size={window.innerWidth < 768 ? 20 : 24} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">500+</div>
            <div className="text-gray-600 text-sm md:text-base">Partner Companies</div>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-4 md:p-8 shadow-lg hover-scale">
            <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <TrendingUp className="text-white" size={window.innerWidth < 768 ? 20 : 24} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">95%</div>
            <div className="text-gray-600 text-sm md:text-base">Placement Rate</div>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-4 md:p-8 shadow-lg hover-scale">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Globe className="text-white" size={window.innerWidth < 768 ? 20 : 24} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">50+</div>
            <div className="text-gray-600 text-sm md:text-base">Countries</div>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-4 md:p-8 shadow-lg hover-scale">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Award className="text-white" size={window.innerWidth < 768 ? 20 : 24} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">₹8.5L</div>
            <div className="text-gray-600 text-sm md:text-base">Avg. Package</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
