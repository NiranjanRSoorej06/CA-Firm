import React, { useState, useEffect } from 'react';
import taxImage from '../assets/tax.jpg';

const Hero = ({ heroData }) => {
  const [displayTitle, setDisplayTitle] = useState(heroData.title);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (displayTitle !== heroData.title) {
      setIsChanging(true);
      
      setTimeout(() => {
        setDisplayTitle(heroData.title);
      }, 150);
      
      setTimeout(() => {
        setIsChanging(false);
      }, 300);
    }
  }, [heroData.title, displayTitle]);

  const heroStyle = {
    backgroundImage: `
      linear-gradient(to bottom, #00000000 0%, #1E3A8A 100%),
      url(${taxImage})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'normal',
    position: 'relative'
  };

  return (
    <section className="text-white min-h-screen flex items-center justify-center" style={{...heroStyle, paddingTop: '0'}}>
      <div className="text-center px-4">
        <p className="text-xl mb-4 text-gray-200 transition-opacity duration-300 font-medium tracking-widest uppercase">
          {heroData.serviceType}
        </p>
        
        {/* Animated title with color change effect */}
        <div className="relative overflow-hidden">
          <h1 className={`text-4xl md:text-6xl font-extrabold transition-all duration-500 ease-in-out text-white tracking-tight ${
            isChanging 
              ? 'opacity-0 transform translate-y-4 scale-95' 
              : 'opacity-100 transform translate-y-0 scale-100'
          }`}
          style={{
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
            filter: isChanging ? 'blur(2px)' : 'blur(0px)',
            lineHeight: '1.1'
          }}>
            {displayTitle}
          </h1>
          
          {/* Transition indicator */}
          {isChanging && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 animate-pulse rounded-full"></div>
            </div>
          )}
        </div>
        
        <p className={`mt-8 max-w-4xl mx-auto text-lg text-gray-100 leading-relaxed font-light transition-all duration-400 ${
          isChanging ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
        style={{
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          filter: isChanging ? 'blur(8px)' : 'blur(0px)'
        }}>
          {heroData.description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
