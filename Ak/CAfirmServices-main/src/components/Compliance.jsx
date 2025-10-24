import React, { useState, useEffect, useRef } from 'react';
import sbcLogo from '../assets/sbclogo.svg';
import ladyImage from '../assets/lady.png';

const Compliance = ({ complianceData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility based on whether element is in view
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} 
          style={{backgroundColor: '#00144E'}}
        >
          <div className={`md:w-1/3 flex-shrink-0 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <img src={ladyImage} alt="Professional Lady" className="rounded-lg shadow-lg w-full transform hover:scale-105 transition-transform duration-500" />
          </div>
          <div className={`md:w-2/3 text-white text-center md:text-left transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flex flex-col items-center mb-6">
              <img src={sbcLogo} alt="SBC Logo" className="w-24 h-24 mb-2 transform hover:rotate-12 transition-transform duration-500" style={{filter: 'brightness(0) invert(1)'}} />
            </div>
            <h2 className={`text-5xl font-extrabold mb-6 tracking-tight transition-all duration-700 ${
              isVisible ? 'blur-0' : 'blur-md'
            }`}>{complianceData.title}</h2>
            <p className={`text-2xl leading-relaxed text-gray-100 font-light transition-all duration-700 delay-300 ${
              isVisible ? 'blur-0' : 'blur-md'
            }`}>
              {complianceData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
