import React, { useState, useEffect } from 'react';
import '../App.css';
import '../index.css';
import '../../../../src/Home.css';
import Navbar from '../../../../src/components/Navbar.jsx';
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
      <Navbar />
      
      {/* Content container without transition animation */}
      <div>
        <Hero heroData={currentConfig.hero} />
        <Compliance complianceData={currentConfig.compliance} />
        <Services servicesData={currentConfig.services} />
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
