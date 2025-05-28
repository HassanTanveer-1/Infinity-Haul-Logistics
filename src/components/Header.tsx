import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../constants/content';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white shadow-md py-2 backdrop-blur-sm bg-opacity-90'
      : 'bg-transparent py-4'
  }`;

  const linkClasses = `relative font-medium transition-colors duration-300 
    before:absolute before:bottom-[-4px] before:left-0 before:right-0 
    before:h-[2px] before:transform before:origin-left before:scale-x-0 before:transition-transform 
    before:duration-300 hover:before:scale-x-100 hover:text-primary-700 
    ${isScrolled ? 'text-primary-700 before:bg-primary-500' : 'text-white before:bg-white'}
  `;

  // Prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        <a 
          href="#home" 
          className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-sm"
          aria-label="Home"
        >
          <img 
            src="/logo.png" 
            alt="Infinity Haul Logistics" 
            className="h-12 w-auto md:h-14 transition-all duration-300"
            style={{ 
              borderRadius: '50%', 
              border: '1px solid rgba(0,0,0,0.1)',
              backgroundColor: '#06304ed9',
            }}
          />
          <span className="sr-only">Infinity Haul Logistics</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClasses}
                  aria-current={link.href === window.location.hash ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            className={`${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700 border-primary-600' 
                : 'bg-white/10 text-white hover:bg-white/20 border-white/20'
            } border px-4 py-2 rounded-md transition-all duration-300 font-medium hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`}
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X size={28} className={isScrolled ? 'text-primary-600' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-primary-600' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-primary-700/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <img 
            src="/logo.png" 
            alt="Infinity Haul Logistics" 
            className="h-20 w-auto mb-8 rounded-full border border-white/20"
          />
          <ul className="flex flex-col items-center space-y-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white text-2xl font-medium hover:text-accent-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-2"
                  onClick={closeMobileMenu}
                  aria-current={link.href === window.location.hash ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            className="mt-8 bg-white text-primary-700 border-2 border-white px-8 py-3 rounded-md text-xl font-semibold hover:bg-transparent hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            onClick={closeMobileMenu}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;