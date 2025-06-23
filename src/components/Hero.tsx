
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Star, Users, Award, Phone } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16 lg:pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 md:space-y-8 relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-blue-200 rounded-full opacity-20 animate-pulse-gentle hidden md:block"></div>
            <div className="absolute top-12 md:top-20 -right-4 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-purple-200 rounded-full opacity-30 animate-float hidden md:block"></div>
            
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 hover-scale">
                <Star className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                #1 Training & Placement Organization
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Empowering</span>
                <span className="gradient-text block">Students</span>
                <span className="block">for Career</span>
                <span className="text-green-600 block">Success</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Bridging the gap between education and employability through comprehensive training programs 
                and free placement assistance. Join thousands of successful students who've transformed their careers with Aadhira.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center font-medium text-sm md:text-base touch-target">
                <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={window.innerWidth < 768 ? 16 : 20} />
                Explore Programs
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={window.innerWidth < 768 ? 16 : 20} />
              </button>
              
              <button className="group border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium text-sm md:text-base touch-target">
                Free Placement Assistance
              </button>
            </div>

            {/* Enhanced Statistics */}
            <div className={`grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center group hover-scale">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:shadow-lg transition-all duration-300">
                  <Users className="text-white" size={window.innerWidth < 768 ? 16 : 24} />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">5000+</div>
                <div className="text-gray-600 text-xs md:text-sm">Colleges Trained</div>
              </div>
              
              <div className="text-center group hover-scale">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:shadow-lg transition-all duration-300">
                  <Award className="text-white" size={window.innerWidth < 768 ? 16 : 24} />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600 mb-1">3000+</div>
                <div className="text-gray-600 text-xs md:text-sm">Students Placed</div>
              </div>
              
              <div className="text-center group hover-scale">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:shadow-lg transition-all duration-300">
                  <Star className="text-white" size={window.innerWidth < 768 ? 16 : 24} />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 mb-1">15+</div>
                <div className="text-gray-600 text-xs md:text-sm">Training Programs</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative order-1 lg:order-2 lg:ml-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative">
              <img 
                src={heroSlides[currentSlide].image}
                alt="Students in training session"
                className="rounded-3xl shadow-2xl w-full h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover hover-lift transition-all duration-700"
              />
              
              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-6 rounded-xl shadow-2xl hover-scale glass">
                <div className="text-lg md:text-2xl font-bold gradient-text">100%</div>
                <div className="text-gray-600 text-xs md:text-sm">Success Rate</div>
              </div>
              
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white p-2 md:p-4 rounded-xl shadow-lg hover-scale glass">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm font-medium text-gray-600">Live Training</span>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 md:mt-6 space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-target ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-4 md:w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
          <a
            href="tel:+919876543210"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce-gentle touch-target"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
