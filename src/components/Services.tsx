import React from 'react';
import { servicesContent } from '../constants/content';
import {
  Truck,
  DollarSign,
  FileText,
  Phone,
  Users,
  Navigation,
  Sparkles,
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const iconProps = {
    size: 48,
    className: "text-primary-600 group-hover:text-white transition-colors duration-300"
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck {...iconProps} />;
      case 'DollarSign':
        return <DollarSign {...iconProps} />;
      case 'FileText':
        return <FileText {...iconProps} />;
      case 'Phone':
        return <Phone {...iconProps} />;
      case 'Users':
        return <Users {...iconProps} />;
      case 'Navigation':
        return <Navigation {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      default:
        return <Truck {...iconProps} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
            {servicesContent.heading}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {servicesContent.subheading}
          </p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent.services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-lg shadow-md hover:shadow-xl hover:border-primary-500 hover:bg-primary-700 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="mb-5">{getIcon(service.icon)}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary-800 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              <div className="h-2 bg-primary-700 group-hover:bg-accent-500 transition-colors duration-300"></div>
            </div>
          ))}

          {/* VIP Service full-width card */}
          <div className="group bg-white border border-neutral-200 rounded-lg shadow-md hover:shadow-xl hover:border-primary-500 hover:bg-primary-700 transition-all duration-300 overflow-hidden lg:col-span-3">
            <div className="p-8">
              <div className="mb-5">
                <Sparkles {...iconProps} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-800 group-hover:text-white transition-colors duration-300">
                VIP Services
              </h3>
              <p className="text-neutral-600 group-hover:text-white/90 transition-colors duration-300">
                Experience the highest level of priority, personalization, and precision in dispatching with our VIP Services, tailored for clients who expect nothing but the best.
              </p>
            </div>
            <div className="h-2 bg-primary-700 group-hover:bg-accent-500 transition-colors duration-300"></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Request a Service
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
