
import React, { useState, useEffect } from 'react';
import { Award, Users, TrendingUp, CheckCircle, Play, ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '5000+', label: 'Colleges Trained', icon: Users },
    { number: '3000+', label: 'Students Placed', icon: TrendingUp },
    { number: '500+', label: 'Partner Companies', icon: CheckCircle }
  ];

  const tabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      content: 'To bridge the gap between education and employability by providing industry-relevant training programs that empower students with practical skills and confidence to excel in their chosen careers.'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content: 'To become the leading training and placement organization that transforms lives through quality education, creating a skilled workforce ready for the future economy.'
    },
    {
      id: 'values',
      title: 'Our Values',
      content: 'Excellence in education, integrity in relationships, innovation in methodology, and commitment to student success drive everything we do at Aadhira.'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-24 h-24 md:w-48 md:h-48 bg-purple-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Aadhira</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students with industry-relevant skills for over a decade
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center group hover-scale transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="text-white" size={window.innerWidth < 768 ? 20 : 24} />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 md:space-y-8">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row sm:space-x-1 space-y-2 sm:space-y-0 bg-gray-100 p-1 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm md:text-base ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {tabs.find(tab => tab.id === activeTab)?.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {tabs.find(tab => tab.id === activeTab)?.content}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium">
                <Play className="mr-2" size={20} />
                Watch Our Story
              </button>
              <button className="flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=faces"
              alt="Aadhira training session"
              className="relative rounded-3xl shadow-2xl w-full h-64 md:h-80 lg:h-96 object-cover hover-lift transition-all duration-700"
            />
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-xl shadow-2xl hover-scale glass">
              <div className="text-lg md:text-2xl font-bold gradient-text">95%</div>
              <div className="text-gray-600 text-xs md:text-sm">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
