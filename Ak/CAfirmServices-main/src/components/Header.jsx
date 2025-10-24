import React, { useState, useEffect, useRef } from 'react';
import sbcLogo from '../assets/sbclogo.svg';
import caLogo from '../assets/CAlogo.png';

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out pt-7">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Rectangle 7 - Main header container */}
        <nav 
          className="backdrop-blur-xl flex items-center justify-between mx-auto relative transition-all duration-500 ease-out"
          style={{
            position: 'absolute',
            width: '1600px',
            height: '90px',
            left: 'calc(50% - 1600px/2 + 0px)',
            top: '28px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '150px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            zIndex: 100
          }}>
          {/* Logo container moved to left */}
          <div className="flex items-center gap-4" style={{
            position: 'absolute',
            left: '35px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '22px'
          }}>
            {/* CA Logo - moved to left first */}
            <img 
              src={caLogo} 
              alt="CA Logo"
              style={{
                width: '64px',
                height: '64px'
              }}
            />
            
            {/* SBC Logo and SBCPL text container */}
            <div className="flex items-center" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              {/* SBC Logo */}
              <img 
                src={sbcLogo} 
                alt="SBC Logo"
                style={{
                  width: '58px',
                  height: '56px',
                  filter: 'brightness(0) saturate(100%) invert(45%) sepia(95%) saturate(456%) hue-rotate(133deg) brightness(92%) contrast(101%)'
                }}
              />
              
              {/* SBCPL Text */}
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '22px',
                lineHeight: '28px',
                letterSpacing: '-0.23px',
                color: '#00989A'
              }}>
                SBCPL
              </span>
            </div>
          </div>
          {/* Frame 43 - Navigation Menu - repositioned to center */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '55px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            height: '30px'
          }}>
            {/* Home */}
            <a href="#" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '30px',
              color: '#000000',
              textDecoration: 'none',
              flex: 'none',
              order: '0',
              flexGrow: '0'
            }}>
              Home
            </a>
            
            {/* About */}
            <a href="#" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '30px',
              color: '#000000',
              textDecoration: 'none',
              flex: 'none',
              order: '1',
              flexGrow: '0'
            }}>
              About
            </a>
            {/* Group 71 - Services with dropdown */}
            <div 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                width: '100px',
                height: '30px',
                flex: 'none',
                order: '2',
                flexGrow: '0',
                position: 'relative',
                zIndex: 1000
              }}
            >
              <button 
                onClick={() => {
                  console.log('Services button clicked, current state:', isServicesOpen);
                  setIsServicesOpen(!isServicesOpen);
                }}
                style={{
                  position: 'absolute',
                  width: '90px',
                  height: '30px',
                  left: '0px',
                  top: '0px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '18px',
                  lineHeight: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#000000',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Services
              </button>
              
              {/* Polygon 1 - Dropdown arrow */}
              <div style={{
                boxSizing: 'border-box',
                position: 'absolute',
                width: '14px',
                height: '8px',
                left: '90px',
                top: '12px',
                border: '2px solid #000000',
                transform: isServicesOpen ? 'rotate(0deg)' : 'rotate(-180deg)',
                transition: 'transform 0.3s ease'
              }}></div>
              {isServicesOpen && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    left: '-100px', 
                    top: '35px',
                    position: 'fixed',
                    zIndex: 999999,
                    visibility: 'visible',
                    opacity: 1,
                    background: 'rgba(255, 255, 255, 0.98)',
                    borderRadius: '12px',
                    padding: '1rem 0',
                    width: '20rem',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 10px 25px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid #f3f4f6',
                    pointerEvents: 'all',
                    animation: 'slideDown 0.3s ease-out'
                  }}
                >
                  <style>{`
                    @keyframes slideDown {
                      from {
                        opacity: 0;
                        transform: translateY(-10px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                    .dropdown-menu button {
                      animation: staggerIn 0.3s ease-out both;
                    }
                    .dropdown-menu button:nth-child(1) { animation-delay: 0s; }
                    .dropdown-menu button:nth-child(2) { animation-delay: 0.05s; }
                    .dropdown-menu button:nth-child(3) { animation-delay: 0.1s; }
                    .dropdown-menu button:nth-child(4) { animation-delay: 0.15s; }
                    .dropdown-menu button:nth-child(5) { animation-delay: 0.2s; }
                    .dropdown-menu button:nth-child(6) { animation-delay: 0.25s; }
                    .dropdown-menu button:nth-child(7) { animation-delay: 0.3s; }
                    .dropdown-menu button:nth-child(8) { animation-delay: 0.35s; }
                    .dropdown-menu button:nth-child(9) { animation-delay: 0.4s; }
                    .dropdown-menu button:nth-child(10) { animation-delay: 0.45s; }
                    @keyframes staggerIn {
                      from {
                        opacity: 0;
                        transform: translateX(-10px);
                      }
                      to {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    }
                  `}</style>
                  <div className="px-2 py-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-3 pb-2">Corporate Services</p>
                    <button 
                      onClick={() => handleServiceClick('roc')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 rounded-lg mx-1 font-medium"
                    >
                      Company Law & ROC Compliance
                    </button>
                    <button 
                      onClick={() => handleServiceClick('registrations')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 rounded-lg mx-1 font-medium"
                    >
                      Statutory Registrations
                    </button>
                    <button 
                      onClick={() => handleServiceClick('loan')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 rounded-lg mx-1 font-medium"
                    >
                      Loan & Finance Facilitation
                    </button>
                    <button 
                      onClick={() => handleServiceClick('llp')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 rounded-lg mx-1 font-medium"
                    >
                      LLP Compliance Services
                    </button>
                    <button 
                      onClick={() => handleServiceClick('projectReports')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 rounded-lg mx-1 font-medium"
                    >
                      Project Reports & Investment Proposals
                    </button>
                    <button 
                      onClick={() => handleServiceClick('partnership')}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 rounded-lg mx-1 font-medium"
                    >
                      Partnership Firm Compliance
                    </button>
                  </div>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <div className="px-2 py-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-3 pb-2">Tax Services</p>
                      <button 
                        onClick={() => handleServiceClick('incomeTax')}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 rounded-lg mx-1 font-medium"
                      >
                        Income Tax
                      </button>
                      <button 
                        onClick={() => handleServiceClick('tds')}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 rounded-lg mx-1 font-medium"
                      >
                        TDS
                      </button>
                      <button 
                        onClick={() => handleServiceClick('gst')}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 rounded-lg mx-1 font-medium"
                      >
                        GST
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Contact */}
            <a href="#" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '30px',
              color: '#000000',
              textDecoration: 'none',
              flex: 'none',
              order: '3',
              flexGrow: '0'
            }}>
              Contact
            </a>
          </div>
          {/* GetStarted Button - repositioned to right */}
          <a 
            href="#"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px 40px',
              gap: '10px',
              position: 'absolute',
              width: '185px',
              height: '68px',
              right: '35px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#1E3A8A',
              borderRadius: '106.408px',
              textDecoration: 'none'
            }}
          >
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '26px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.21px',
              color: '#FFFFFF',
              flex: 'none',
              order: '0',
              flexGrow: '0'
            }}>
              Get Started
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
