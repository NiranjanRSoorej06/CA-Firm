import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Compliance from './Compliance.jsx';
import Services from './Services.jsx';
import Footer from './Footer.jsx';

const ServicePage = ({ serviceConfig, onServiceChange }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentConfig, setCurrentConfig] = useState(serviceConfig);

  useEffect(() => {
    if (serviceConfig !== currentConfig) {
      setIsTransitioning(true);
      
      // Enhanced transition timing for smoother effect
      setTimeout(() => {
        setCurrentConfig(serviceConfig);
      }, 200);
      
      // Complete fade in with staggered timing
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  }, [serviceConfig, currentConfig]);

  return (
    <div className="ServicePage relative">
      <Header onServiceChange={onServiceChange} />
      
      {/* Loading indicator */}
      {isTransitioning && (
        <div className="fixed top-4 right-4 z-50 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-blue-500 animate-pulse">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <span className="text-sm font-medium text-gray-700 ml-2">
              Loading {serviceConfig.hero?.title || 'Service'}...
            </span>
          </div>
        </div>
      )}
      
      {/* Enhanced animated content container with staggered effects */}
      <div className={`transition-all duration-600 ease-in-out transform ${
        isTransitioning 
          ? 'opacity-0 translate-y-6 scale-95 blur-md' 
          : 'opacity-100 translate-y-0 scale-100 blur-0'
      }`}>
        <Hero heroData={currentConfig.hero} />
        <Compliance complianceData={currentConfig.compliance} />
        <Services servicesData={currentConfig.services} />
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
