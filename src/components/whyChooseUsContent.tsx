import React, { useState, useEffect } from 'react';
import { whyChooseUsContent } from '../constants/content';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUsContent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setActiveIndex((current) => 
        current === whyChooseUsContent.sections.length - 1 ? 0 : current + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((current) => 
      current === 0 ? whyChooseUsContent.sections.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((current) => 
      current === whyChooseUsContent.sections.length - 1 ? 0 : current + 1
    );
  };

  const goToSection = (index: number) => {
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  };

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const activeSection = whyChooseUsContent.sections[activeIndex];

  return (
    <section 
      id="why-choose-us" 
      className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {whyChooseUsContent.heading}
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            {whyChooseUsContent.subheading}
          </p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 min-h-[300px]">

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center md:text-left"
              >
                <h3 className="text-2xl font-semibold mb-4">{activeSection.heading}</h3>
                
                {typeof activeSection.content === 'string' ? (
                  <p className="text-lg leading-relaxed">{activeSection.content}</p>
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-lg">
                    {activeSection.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all"
              aria-label="Previous section"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all"
              aria-label="Next section"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {whyChooseUsContent.sections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSection(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? 'bg-accent-500 w-6'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`View section ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsContent;
