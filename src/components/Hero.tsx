import React from 'react';
import { heroContent } from '../constants/content';
import { Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/75"></div>
        <img 
          src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Logistics Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Abstract Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 0 100%)" }}></div>
      
      <div className="container mx-auto px-4 relative z-10 text-white text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-3/5 space-y-6 mb-12 md:mb-0 animate-[fadeIn_1s_ease-in-out]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {heroContent.heading}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            {heroContent.subheading}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              <Truck size={20} className="mr-2 group-hover:animate-[bounce_1s_infinite]" />
              {heroContent.cta}
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
        
        <div className="hidden md:block md:w-2/5 animate-[fadeIn_1s_ease-in-out_0.3s_both]">
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-t-4 border-l-4 border-accent-500 opacity-60"></div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Fast, Reliable Dispatching</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-accent-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Best Freight Loads</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-accent-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Dedicated Dispatchers</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-accent-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-accent-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Carrier's Satisfaction</span>
                </li>
              </ul>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-4 border-r-4 border-accent-500 opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" className="text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;