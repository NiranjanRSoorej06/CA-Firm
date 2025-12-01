import React from 'react';
import sbcLogo from '../assets/sbclogo.svg';

const Footer = () => {
  const footerBgStyle = {
    backgroundColor: '#00144E',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%231a234a' fill-opacity='0.4'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63-28c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm54-6c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM33 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-22 55c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <footer className="text-white pt-20 pb-10 relative overflow-hidden" style={footerBgStyle}>
      {/* Decorative background pattern */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Site Map Section */}
          <div className="md:col-span-4 animate-fadeIn">
            <h4 className="font-bold mb-6 text-xl text-white border-b-2 border-cyan-500 pb-2 inline-block transition-all duration-300 hover:border-cyan-300">Site Map</h4>
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn {
                animation: fadeIn 0.8s ease-out;
              }
            `}</style>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="text-base">Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="text-base">Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="text-base">Contact</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="text-base">About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="text-base">FAQs</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div className="md:col-span-3 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <h4 className="font-bold mb-6 text-xl text-white border-b-2 border-cyan-500 pb-2 inline-block transition-all duration-300 hover:border-cyan-300">Legal</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="text-base">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-3 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span className="text-base">Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Logo Section */}
          <div className="md:col-span-5 flex flex-col items-center md:items-end text-center md:text-right animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-br from-white to-gray-100 p-4 rounded-2xl inline-block shadow-2xl mb-3 transform hover:scale-110 hover:rotate-3 transition-all duration-500">
              <img src={sbcLogo} alt="SBC Logo" className="w-14 h-14" style={{filter: 'brightness(0) saturate(100%) invert(45%) sepia(95%) saturate(456%) hue-rotate(133deg) brightness(92%) contrast(101%)'}} />
            </div>
            <p className="mt-2 text-lg font-bold text-cyan-400 tracking-wide">SBCPL</p>
            <p className="text-sm text-gray-400 mt-1">Your Trusted Compliance Partner</p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-base">
          <p className="text-gray-400">&copy; Copyright 2023. All Rights Reserved | <span className="text-cyan-400 font-semibold">SBCPL</span></p>
          <div className="flex items-center space-x-6 mt-6 sm:mt-0">
            {/* Icon-only contact buttons with accessible labels */}
            <a
              href="#"
              aria-label="Instagram"
              title="Instagram (replace link)"
              className="w-12 h-12 rounded-full bg-gray-800/30 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500 transform hover:scale-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 11.37a4 4 0 1 1-7.999.001A4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>

            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              title="Send email"
              className="w-12 h-12 rounded-full bg-gray-800/30 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500 transform hover:scale-110"
            >
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3.5h20v11H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3.5l-10 7-10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Email</span>
            </a>

            <a
              href="tel:+911234567890"
              aria-label="Phone"
              title="Call us"
              className="w-12 h-12 rounded-full bg-gray-800/30 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500 transform hover:scale-110"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.08.75 3.05a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.03-1.03a2 2 0 0 1 2.11-.45c.97.37 2 .63 3.05.75A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Phone</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
