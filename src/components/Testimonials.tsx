
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'Data Analytics',
      company: 'TCS',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces',
      text: 'Aadhira completely transformed my career path. The practical approach to Data Analytics and the placement support helped me land my dream job at TCS. The instructors are incredibly supportive and the curriculum is industry-relevant.',
      rating: 5
    },
    {
      name: 'Rahul Kumar',
      course: 'Python Programming',
      company: 'Brain Tech Solutions',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=faces',
      text: 'The Python programming course exceeded my expectations. The hands-on projects and real-world applications gave me the confidence to tackle complex programming challenges. Highly recommend Aadhira!',
      rating: 5
    },
    {
      name: 'Sneha Patel',
      course: 'Digital Marketing',
      company: 'Sai Finwin Group',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces',
      text: 'Amazing training methodology! The digital marketing course was comprehensive and up-to-date with current industry trends. The placement assistance was exceptional - I got placed within 2 months of course completion.',
      rating: 5
    },
    {
      name: 'Amit Singh',
      course: 'Web Development',
      company: 'Startup Inc.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=faces',
      text: 'Aadhira provided me with both technical skills and soft skills development. The web development course was thorough and the instructors were always available for doubt clarification. Great learning experience!',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who've transformed their careers with Aadhira
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentSlide].text}"
              </blockquote>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-blue-600 font-medium">
                  {testimonials[currentSlide].course}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentSlide].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
