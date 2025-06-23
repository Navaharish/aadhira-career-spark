
import React from 'react';

const Collaborations = () => {
  const partners = [
    {
      name: 'TCS',
      description: 'Leading global IT services and consulting company',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&crop=center'
    },
    {
      name: 'Brain Tech Solutions',
      description: 'Innovative technology solutions provider',
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop&crop=center'
    },
    {
      name: 'Sai Finwin Group',
      description: 'Financial services and consulting',
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&crop=center'
    }
  ];

  return (
    <section id="placements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collaborations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with industry leaders to provide the best placement opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Free Placement Assistance</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We don't just train you - we help you land your dream job! Our dedicated placement team 
            works tirelessly to connect our graduates with top companies.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-100">Placement Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">₹5L+</div>
              <div className="text-blue-100">Average Package</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
