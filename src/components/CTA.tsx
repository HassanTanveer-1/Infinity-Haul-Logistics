import React from 'react';
import { ctaContent } from '../constants/content';
import { Truck } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {ctaContent.heading}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl">
              {ctaContent.subheading}
            </p>
          </div>
          <div className="lg:w-1/3 lg:text-right">
            <a 
              href={ctaContent.buttonLink} 
              className="inline-flex items-center bg-white text-primary-800 hover:bg-accent-500 hover:text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors shadow-lg group"
            >
              <Truck size={24} className="mr-3 group-hover:animate-bounce" />
              {ctaContent.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;