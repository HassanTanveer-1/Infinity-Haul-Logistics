import React from 'react';
import { footerContent, companyInfo } from '../constants/content';
import { Truck, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-4">
              <Truck size={30} className="text-accent-500" />
              <span className="text-xl font-bold">Infinity Haul</span>
            </div>
            <p className="mb-6 text-neutral-300">
              {footerContent.tagline}
            </p>
          </div>

          {/* Footer Link Sections */}
          {footerContent.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="lg:col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-accent-300 transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-primary-700 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            {footerContent.copyright}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-accent-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-accent-300 text-sm">Terms of Service</a>
            <a href="#" className="text-neutral-400 hover:text-accent-300 text-sm">Sitemap</a>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-700 hover:bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
