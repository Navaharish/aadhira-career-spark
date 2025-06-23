
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "Empowering Students for Career Success",
      subtitle: "Transform your future with industry-leading training programs",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=faces"
    },
    {
      title: "Bridge the Skills Gap",
      subtitle: "Learn from industry experts and get placed in top companies",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=faces"
    },
    {
      title: "Free Placement Assistance",
      subtitle: "We don't just train you - we help you land your dream job",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&crop=faces"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse-gentle"></div>
            <div className="absolute top-20 -right-8 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-float"></div>
            
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 hover-scale">
                <Star className="w-4 h-4 mr-2" />
                #1 Training & Placement Organization
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Empowering</span>
                <span className="gradient-text block">Students</span>
                <span className="block">for Career</span>
                <span className="text-green-600 block">Success</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Bridging the gap between education and employability through comprehensive training programs 
                and free placement assistance. Join thousands of successful students who've transformed their careers with Aadhira.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center">
                <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={20} />
                Explore Programs
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <button className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Free Placement Assistance
              </button>
            </div>

            {/* Enhanced Statistics */}
            <div className={`grid grid-cols-3 gap-8 pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center group hover-scale">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300">
                  <Users className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">5000+</div>
                <div className="text-gray-600 text-sm">Colleges Trained</div>
              </div>
              
              <div className="text-center group hover-scale">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300">
                  <Award className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">3000+</div>
                <div className="text-gray-600 text-sm">Students Placed</div>
              </div>
              
              <div className="text-center group hover-scale">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300">
                  <Star className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                <div className="text-gray-600 text-sm">Training Programs</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative lg:ml-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative">
              <img 
                src={heroSlides[currentSlide].image}
                alt="Students in training session"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover hover-lift transition-all duration-700"
              />
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl hover-scale glass">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg hover-scale glass">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">Live Training</span>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce-gentle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
