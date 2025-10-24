import React, { useState, useEffect, useRef } from 'react';
import MagnetLines from './MagnetLines';

const Services = ({ servicesData }) => {
  const [animateCards, setAnimateCards] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);
  
  // Network pattern background SVG - matching the screenshot
  const networkPattern = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="network" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <!-- Dots -->
          <circle cx="20" cy="20" r="2" fill="rgba(100, 150, 255, 0.3)"/>
          <circle cx="60" cy="40" r="2" fill="rgba(100, 150, 255, 0.3)"/>
          <circle cx="100" cy="30" r="2" fill="rgba(100, 150, 255, 0.3)"/>
          <circle cx="40" cy="70" r="2" fill="rgba(100, 150, 255, 0.3)"/>
          <circle cx="80" cy="90" r="2" fill="rgba(100, 150, 255, 0.3)"/>
          <circle cx="110" cy="80" r="2" fill="rgba(100, 150, 255, 0.3)"/>
          
          <!-- Connection lines -->
          <line x1="20" y1="20" x2="60" y2="40" stroke="rgba(100, 150, 255, 0.15)" stroke-width="1"/>
          <line x1="60" y1="40" x2="100" y2="30" stroke="rgba(100, 150, 255, 0.15)" stroke-width="1"/>
          <line x1="20" y1="20" x2="40" y2="70" stroke="rgba(100, 150, 255, 0.15)" stroke-width="1"/>
          <line x1="40" y1="70" x2="80" y2="90" stroke="rgba(100, 150, 255, 0.15)" stroke-width="1"/>
          <line x1="80" y1="90" x2="110" y2="80" stroke="rgba(100, 150, 255, 0.15)" stroke-width="1"/>
          <line x1="60" y1="40" x2="80" y2="90" stroke="rgba(100, 150, 255, 0.15)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#network)"/>
    </svg>
  `;
  
  const containerStyle = {
    background: '#00144E',
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(networkPattern)}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '3px dotted rgba(100, 150, 255, 0.3)',
    position: 'relative'
  };

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [servicesData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl shadow-2xl p-5 md:p-6 relative overflow-hidden mx-auto" style={{...containerStyle, maxWidth: '1100px'}}>
          {/* Magnetic Lines Background */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.4,
            zIndex: 0
          }}>
            <MagnetLines
              rows={8}
              columns={12}
              containerSize="100%"
              lineColor="rgba(100, 150, 255, 0.8)"
              lineWidth="2px"
              lineHeight="40px"
              baseAngle={0}
            />
          </div>

          {/* Title with underline and fade up animation */}
          <div ref={titleRef} className={`transition-all duration-1000 ease-out relative z-10 py-4 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2 tracking-normal">
              {servicesData.title}
            </h2>
            <div style={{width: '160px', height: '2px', backgroundColor: '#FCD34D', margin: '0 auto 1rem auto'}}></div>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto relative z-10">
            {servicesData.items.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white p-3 rounded-xl shadow-lg flex flex-col transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 group ${
                  animateCards 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  minHeight: '100px',
                  borderLeft: '3px solid #FCD34D',
                  borderRight: '3px solid #FCD34D',
                  borderTop: '2px solid #FCD34D',
                  borderBottom: '2px solid #FCD34D'
                }}
              >
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-2 tracking-tight transition-colors duration-300 group-hover:text-blue-700" style={{color: '#00144E'}}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button 
                    className="rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110 group-hover:border-blue-600" 
                    style={{
                      border: '2px solid #00144E',
                      backgroundColor: 'transparent'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:translate-x-1">
                      <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00144E] group-hover:text-white"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Consultation Booking - Outside blue container, in white section */}
        <div className={`text-center mt-4 transition-all duration-1000 ${
          animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{transitionDelay: '600ms'}}>
          <p className="text-gray-700 mb-3 text-base font-normal tracking-wide animate-pulse">
            Want to partner with SBCPL? Contact us for a consultation.
          </p>
          <a 
            href="#" 
            className="inline-block text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 text-base font-semibold shadow-xl tracking-wide transform relative overflow-hidden group" 
            style={{backgroundColor: '#1F3A89'}}
          >
            <span className="relative z-10">Book a Free Consultation</span>
            {/* Shiny overlay effect */}
            <span 
              className="absolute inset-0 w-full h-full"
              style={{
                background: 'linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
                animation: 'shine 3s infinite',
                transform: 'translateX(-100%)'
              }}
            ></span>
            <style>{`
              @keyframes shine {
                0% {
                  transform: translateX(-100%);
                }
                50%, 100% {
                  transform: translateX(200%);
                }
              }
            `}</style>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

