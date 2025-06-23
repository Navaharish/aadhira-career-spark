
import React, { useState } from 'react';
import { Code, BarChart, Users, Palette, Shield, Cloud } from 'lucide-react';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technical', 'Analytics', 'Design', 'Business'];

  const programs = [
    {
      title: 'Data Analytics',
      category: 'Analytics',
      icon: BarChart,
      description: 'Master data analysis, visualization, and insights generation',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'blue'
    },
    {
      title: 'Python Programming',
      category: 'Technical',
      icon: Code,
      description: 'Comprehensive Python programming from basics to advanced',
      duration: '4 months',
      level: 'Beginner to Expert',
      color: 'green'
    },
    {
      title: 'Web Development',
      category: 'Technical',
      icon: Code,
      description: 'Full-stack web development with modern frameworks',
      duration: '6 months',
      level: 'Intermediate',
      color: 'purple'
    },
    {
      title: 'Digital Marketing',
      category: 'Business',
      icon: Users,
      description: 'Complete digital marketing strategies and implementation',
      duration: '2 months',
      level: 'Beginner',
      color: 'pink'
    },
    {
      title: 'Graphic Design',
      category: 'Design',
      icon: Palette,
      description: 'Creative design principles and professional tools',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'orange'
    },
    {
      title: 'Cybersecurity',
      category: 'Technical',
      icon: Shield,
      description: 'Security fundamentals and ethical hacking',
      duration: '5 months',
      level: 'Intermediate to Advanced',
      color: 'red'
    },
    {
      title: 'Cloud Computing',
      category: 'Technical',
      icon: Cloud,
      description: 'AWS, Azure, and GCP cloud platforms',
      duration: '4 months',
      level: 'Intermediate',
      color: 'indigo'
    },
    {
      title: 'Microsoft Office Suite',
      category: 'Business',
      icon: Users,
      description: 'Professional proficiency in Word, Excel, PowerPoint',
      duration: '1 month',
      level: 'Beginner to Advanced',
      color: 'teal'
    }
  ];

  const filteredPrograms = selectedCategory === 'All' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      pink: 'from-pink-500 to-pink-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600',
      teal: 'from-teal-500 to-teal-600'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive programs designed to make you industry-ready
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-32 bg-gradient-to-r ${getColorClasses(program.color)} rounded-t-xl flex items-center justify-center`}>
                  <IconComponent className="text-white" size={48} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span className="font-medium">{program.level}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
