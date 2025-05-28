import React from 'react';
import { aboutContent, statContent } from '../constants/content';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                {aboutContent.heading}
              </h2>
              <div className="w-32 h-1 bg-accent-500"></div>
            </div>

            <p className="text-lg text-neutral-600 mb-8">
              {aboutContent.subheading}
            </p>

            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-neutral-700">
                {paragraph}
              </p>
            ))}

            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-block bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us Today
              </a>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-500 opacity-20 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Distpatch Services" 
                className="relative z-10 w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-700 opacity-20 rounded-lg"></div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              {statContent.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 hover:border-primary-500 hover:shadow-lg transition-all"
                >
                  <p className="text-3xl font-bold text-primary-700">{stat.value}</p>
                  <p className="text-neutral-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Core Values</h3>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do at Infinity Haul Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600 hover:translate-y-[-5px] transition-transform"
              >
                <h4 className="text-xl font-semibold mb-3 text-primary-700">{value.title}</h4>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;