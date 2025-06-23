import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Play, Linkedin } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'Data Analytics',
      company: 'TCS',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces',
      text: 'Aadhira completely transformed my career path. The practical approach to Data Analytics and the placement support helped me land my dream job at TCS. The instructors are incredibly supportive and the curriculum is industry-relevant.',
      rating: 5,
      salary: '₹6.5 LPA',
      linkedin: '#',
      videoThumbnail: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=200&fit=crop'
    },
    {
      name: 'Rahul Kumar',
      course: 'Python Programming',
      company: 'Brain Tech Solutions',
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces',
      text: 'The Python programming course exceeded my expectations. The hands-on projects and real-world applications gave me the confidence to tackle complex programming challenges. Highly recommend Aadhira!',
      rating: 5,
      salary: '₹5.8 LPA',
      linkedin: '#'
    },
    {
      name: 'Sneha Patel',
      course: 'Digital Marketing',
      company: 'Sai Finwin Group',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
      text: 'Amazing training methodology! The digital marketing course was comprehensive and up-to-date with current industry trends. The placement assistance was exceptional - I got placed within 2 months of course completion.',
      rating: 5,
      salary: '₹4.2 LPA',
      linkedin: '#',
      videoThumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
    },
    {
      name: 'Amit Singh',
      course: 'Web Development',
      company: 'Startup Inc.',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
      text: 'Aadhira provided me with both technical skills and soft skills development. The web development course was thorough and the instructors were always available for doubt clarification. Great learning experience!',
      rating: 5,
      salary: '₹7.0 LPA',
      linkedin: '#'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who've transformed their careers with Aadhira
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 hover-lift transition-all duration-500">
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current hover:scale-110 transition-transform duration-200" size={24} />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-400"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</h4>
                    {currentTestimonial.linkedin && (
                      <a href={currentTestimonial.linkedin} className="text-blue-600 hover:text-blue-700 transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                  <div className="text-blue-600 font-semibold">{currentTestimonial.course}</div>
                  <div className="text-gray-600 text-sm">{currentTestimonial.company} • {currentTestimonial.location}</div>
                  <div className="text-green-600 font-bold text-sm mt-1">{currentTestimonial.salary}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-8 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="text-blue-600 group-hover:text-blue-700" size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-8 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="text-blue-600 group-hover:text-blue-700" size={24} />
            </button>
          </div>

          {/* Side Content */}
          <div className="space-y-8">
            {/* Video Testimonial (if available) */}
            {currentTestimonial.videoThumbnail && (
              <div className="relative group cursor-pointer hover-lift">
                <img 
                  src={currentTestimonial.videoThumbnail}
                  alt="Video testimonial"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-blue-600 ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Watch {currentTestimonial.name}'s</div>
                  <div className="text-xs opacity-90">Success Story</div>
                </div>
              </div>
            )}

            {/* Success Metrics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Success Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Salary Increase</span>
                  <span className="font-bold text-green-600">300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Job Placement Rate</span>
                  <span className="font-bold text-blue-600">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Student Satisfaction</span>
                  <span className="font-bold text-purple-600">4.8/5</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
                <div className="text-2xl font-bold">3000+</div>
                <div className="text-blue-100 text-sm">Students Placed</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-green-100 text-sm">Companies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-purple-600' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Preview */}
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`p-4 rounded-xl transition-all duration-300 text-left ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white transform scale-105' 
                  : 'bg-white hover:bg-gray-50 text-gray-700 hover:shadow-md'
              }`}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className={`text-xs ${index === currentSlide ? 'text-blue-100' : 'text-gray-500'}`}>
                    {testimonial.course}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
