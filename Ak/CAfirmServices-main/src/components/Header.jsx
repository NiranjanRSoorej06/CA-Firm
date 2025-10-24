import React, { useState, useEffect, useRef } from 'react';
import sbcLogo from '../assets/sbclogo.svg';
import caLogo from '../assets/calogo.svg';

const Header = ({ onServiceChange }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleServiceClick = (service) => {
    console.log('Service clicked:', service);
    if (onServiceChange) {
      onServiceChange(service);
    }
    setIsServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="mx-auto px-4" style={{maxWidth: '75%'}}>
        <nav className="flex items-center justify-between bg-white rounded-full shadow-lg px-6 py-3">
          {/* Logo section */}
          <div className="flex items-center gap-3">
            <img 
              src={caLogo} 
              alt="CA Logo"
              className="h-12 w-12"
            />
            <img 
              src={sbcLogo} 
              alt="SBC Logo"
              className="h-8 w-8"
              style={{
                filter: 'brightness(0) saturate(100%) invert(45%) sepia(95%) saturate(456%) hue-rotate(133deg) brightness(92%) contrast(101%)'
              }}
            />
            <span className="text-lg font-bold" style={{color: '#00989A'}}>
              SBCPL
            </span>
          </div>

          {/* Navigation Menu - centered */}
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              className="text-gray-800 hover:text-gray-600 font-medium text-sm transition-colors"
            >
              Home
            </a>
            
            <a 
              href="#" 
              className="text-gray-800 hover:text-gray-600 font-medium text-sm transition-colors"
            >
              About
            </a>
            
            {/* Services with dropdown */}
            <div 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-800 hover:text-gray-600 font-medium text-sm transition-colors flex items-center gap-1"
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-4 py-2">Corporate Services</p>
                    <button 
                      onClick={() => handleServiceClick('roc')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Company Law & ROC Compliance
                    </button>
                    <button 
                      onClick={() => handleServiceClick('registrations')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Statutory Registrations
                    </button>
                    <button 
                      onClick={() => handleServiceClick('loan')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Loan & Finance Facilitation
                    </button>
                    <button 
                      onClick={() => handleServiceClick('llp')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      LLP Compliance Services
                    </button>
                    <button 
                      onClick={() => handleServiceClick('projectReports')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Project Reports & Investment Proposals
                    </button>
                    <button 
                      onClick={() => handleServiceClick('partnership')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Partnership Firm Compliance
                    </button>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="py-2">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-4 py-2">Tax Services</p>
                      <button 
                        onClick={() => handleServiceClick('incomeTax')}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        Income Tax
                      </button>
                      <button 
                        onClick={() => handleServiceClick('tds')}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        TDS
                      </button>
                      <button 
                        onClick={() => handleServiceClick('gst')}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        GST
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a 
              href="#" 
              className="text-gray-800 hover:text-gray-600 font-medium text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Get Started Button */}
          <a 
            href="#"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
