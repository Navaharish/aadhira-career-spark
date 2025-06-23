
import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Aadhira</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the transformation in student empowerment and career development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Aadhira Training and Placement, we are dedicated to empowering college students by bridging 
              the crucial gap between education and employability. Under the visionary leadership of our 
              CEO and Founder <strong>Rohini. K</strong>, we provide comprehensive training programs that 
              equip students with essential technical and soft skills.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach focuses on practical learning, confidence building, and career readiness, 
              ensuring every student can thrive in today's competitive job market.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Student-Centric Approach</div>
                <div className="text-gray-600">Personalized guidance for every learner</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=faces"
              alt="CEO Rohini K and team"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-xl">
              <div className="font-bold">Rohini. K</div>
              <div className="text-blue-100">CEO & Founder</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
            <p className="text-gray-600">
              To be the leading platform that transforms students into industry-ready professionals
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Our Values</h4>
            <p className="text-gray-600">
              Excellence, integrity, innovation, and unwavering commitment to student success
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Our Impact</h4>
            <p className="text-gray-600">
              Creating lasting change in students' lives through quality education and placement support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
