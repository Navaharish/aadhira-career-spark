
import React, { useState, useEffect } from 'react';
import { Code, BarChart, Users, Palette, Shield, Cloud, Search, Filter, Clock, TrendingUp } from 'lucide-react';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', 'Technical', 'Analytics', 'Design', 'Business'];

  const programs = [
    {
      title: 'Data Analytics',
      category: 'Analytics',
      icon: BarChart,
      description: 'Master data analysis, visualization, and insights generation with Python and SQL',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'blue',
      price: '₹15,000',
      rating: 4.8,
      students: 1200,
      skills: ['Python', 'SQL', 'Tableau', 'Power BI'],
      trending: true
    },
    {
      title: 'Python Programming',
      category: 'Technical',
      icon: Code,
      description: 'Comprehensive Python programming from basics to advanced with real projects',
      duration: '4 months',
      level: 'Beginner to Expert',
      color: 'green',
      price: '₹12,000',
      rating: 4.9,
      students: 2100,
      skills: ['Python', 'Django', 'Flask', 'APIs'],
      trending: true
    },
    {
      title: 'Web Development',
      category: 'Technical',
      icon: Code,
      description: 'Full-stack web development with modern frameworks and responsive design',
      duration: '6 months',
      level: 'Intermediate',
      color: 'purple',
      price: '₹20,000',
      rating: 4.7,
      students: 1800,
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'Digital Marketing',
      category: 'Business',
      icon: Users,
      description: 'Complete digital marketing strategies, SEO, social media, and analytics',
      duration: '2 months',
      level: 'Beginner',
      color: 'pink',
      price: '₹8,000',
      rating: 4.6,
      students: 950,
      skills: ['SEO', 'Social Media', 'Google Ads', 'Analytics']
    },
    {
      title: 'Graphic Design',
      category: 'Design',
      icon: Palette,
      description: 'Creative design principles with Adobe Creative Suite and modern tools',
      duration: '3 months',
      level: 'Beginner to Advanced',
      color: 'orange',
      price: '₹10,000',
      rating: 4.5,
      students: 750,
      skills: ['Photoshop', 'Illustrator', 'Figma', 'Canva']
    },
    {
      title: 'Cybersecurity',
      category: 'Technical',
      icon: Shield,
      description: 'Security fundamentals, ethical hacking, and enterprise security practices',
      duration: '5 months',
      level: 'Intermediate to Advanced',
      color: 'red',
      price: '₹25,000',
      rating: 4.8,
      students: 650,
      skills: ['Network Security', 'Penetration Testing', 'CISSP', 'Kali Linux'],
      trending: true
    },
    {
      title: 'Cloud Computing',
      category: 'Technical',
      icon: Cloud,
      description: 'AWS, Azure, and GCP cloud platforms with hands-on projects',
      duration: '4 months',
      level: 'Intermediate',
      color: 'indigo',
      price: '₹18,000',
      rating: 4.7,
      students: 850,
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      title: 'Microsoft Office Suite',
      category: 'Business',
      icon: Users,
      description: 'Professional proficiency in Word, Excel, PowerPoint with advanced features',
      duration: '1 month',
      level: 'Beginner to Advanced',
      color: 'teal',
      price: '₹5,000',
      rating: 4.4,
      students: 1500,
      skills: ['Excel', 'PowerPoint', 'Word', 'Outlook']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { gradient: string; bg: string; text: string; border: string } } = {
      blue: { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { gradient: 'from-green-500 to-green-600', bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      purple: { gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      pink: { gradient: 'from-pink-500 to-pink-600', bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
      orange: { gradient: 'from-orange-500 to-orange-600', bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      red: { gradient: 'from-red-500 to-red-600', bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      indigo: { gradient: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' },
      teal: { gradient: 'from-teal-500 to-teal-600', bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Training <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive programs designed to make you industry-ready with hands-on experience
          </p>
          
          {/* Enhanced Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search programs, skills, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-gray-500">
              Showing {filteredPrograms.length} of {programs.length} programs
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-animation">
          {filteredPrograms.map((program, index) => {
            const IconComponent = program.icon;
            const colorClasses = getColorClasses(program.color);
            
            return (
              <div
                key={program.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100 hover-glow"
              >
                {/* Header with Icon */}
                <div className={`relative h-32 bg-gradient-to-r ${colorClasses.gradient} flex items-center justify-center overflow-hidden`}>
                  <IconComponent className="text-white z-10 group-hover:scale-110 transition-transform duration-300" size={48} />
                  {program.trending && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <TrendingUp size={12} className="mr-1" />
                      Trending
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium text-gray-600">{program.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {program.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-xs font-medium`}>
                        {skill}
                      </span>
                    ))}
                    {program.skills.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{program.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Program Details */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Clock size={16} className="mr-2" />
                        <span>Duration:</span>
                      </div>
                      <span className="font-medium text-gray-700">{program.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium text-gray-700">{program.level}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Students:</span>
                      <span className="font-medium text-gray-700">{program.students}+</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{program.price}</span>
                      <span className="text-gray-500 text-sm ml-1">total</span>
                    </div>
                    <button className={`px-4 py-2 bg-gradient-to-r ${colorClasses.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium`}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't find the right program?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We offer customized training programs for organizations and can create specialized courses based on your requirements.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
              Request Custom Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
