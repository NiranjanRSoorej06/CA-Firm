import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Menu, X, ArrowRight, Calendar, Users, TrendingUp, Award, ChevronDown } from 'lucide-react';
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import './index.css';
import '../../src/Home.css';
import Navbar from '../../src/components/Navbar.jsx';
import Footer from '../../Ak/CAfirmServices-main/src/components/Footer.jsx';

const TimelineEntry = ({ year, title, description, isLeft, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`flex w-full ${isLeft ? "justify-start" : "justify-end"} my-12 relative`}>
      {/* Timeline Dot */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-20"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-blue-900 shadow-lg"></div>
      </motion.div>

      {/* Year Badge */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-30"
        style={{ top: isLeft ? '-40px' : (index === 1 ? '20px' : (index === 3 ? '80px' : '-40px')) }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-yellow-400 font-bold text-lg whitespace-nowrap">
          {year}
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isLeft ? -100 : 100 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full md:w-5/12"
      >
        <div className={`${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-gray-800 mb-3 text-base leading-relaxed">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AboutUsPage = () => {
  const heroRef = useRef(null);
  const observerRef = useRef(null);
  const lineRef = useRef(null);

  // Timeline data matching your image exactly
  const timelineData = useMemo(() => [
    {
      year: '2015',
      title: 'Founded as a sole proprietorship by Mr. John James.',
      description: 'Starting our journey with a vision to provide exceptional business consulting services.',
      side: 'left'
    },
    {
      year: '2017',
      title: 'Grew client base across India and the Middle East with specialized taxation and advisory services.',
      description: 'Expanding our reach and establishing ourselves as trusted advisors across multiple regions.',
      side: 'right'
    },
    {
      year: '2020',
      title: 'Incorporated as SolePath Business Consultants Private Limited with a Board including Dr. John Smith (MD), Dr. Becky Simpson (Director), and Mr. Robert Thomas (Director).',
      description: 'Formalizing our corporate structure with experienced leadership to drive strategic growth.',
      side: 'left'
    },
    {
      year: 'Today',
      title: 'Full-service consultancy for domestic and international clients.',
      description: 'Continuing to evolve and serve our clients with comprehensive business solutions worldwide.',
      side: 'right'
    }
  ], []);

  // Scroll handler with yellow line animation
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);

    if (heroRef.current) {
      const offset = scrollY * 0.3;
      heroRef.current.style.transform = `translateY(${offset}px)`;
    }

    // Enhanced timeline scroll animation - FIXED TO STAY WITHIN SECTION
    const timelineSection = document.querySelector('#timeline-section');
    const progressLine = document.querySelector('#timeline-progress');
    
    if (timelineSection && progressLine) {
      const sectionRect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Get section boundaries
      const sectionTop = scrollTop + sectionRect.top;
      const sectionBottom = sectionTop + sectionRect.height;
      
      // Only animate when section is in viewport
      if (scrollY >= sectionTop - windowHeight && scrollY <= sectionBottom) {
        // Calculate progress within the section only
        const sectionProgress = Math.max(0, Math.min(1, 
          (scrollY - (sectionTop - windowHeight * 0.5)) / (sectionRect.height + windowHeight * 0.5)
        ));
        
        // Apply progress to timeline line (constrained to section height)
        const maxHeight = sectionRect.height * 0.7; // 70% of section height
        const currentHeight = sectionProgress * maxHeight;
        
        progressLine.style.height = `${currentHeight}px`;
      } else if (scrollY < sectionTop - windowHeight) {
        progressLine.style.height = '0px';
      } else if (scrollY > sectionBottom) {
        progressLine.style.height = `${sectionRect.height * 0.7}px`;
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const timer = setTimeout(() => {
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el);
        }
      });
    }, 100);

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section - Updated with aboutus.png */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, #00000000 0%, #1E3A8A 100%), url('/aboutus.png')`
        }}
      >
        <div 
          ref={heroRef}
          className="text-center text-white px-6 max-w-6xl mx-auto"
        >
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tight">
              ABOUT<span className="text-yellow-400">US</span>
            </h1>
            <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              SBCPL: Your Trusted Consulting Partner Since 2013
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Updated with proper underline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">Who We Are</h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-x-[-50px] delay-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  SBCPL is a professionally managed consulting house headquartered in Kochi, Kerala, India, with a strong presence in the industry since 2015. We provide an integrated spectrum of services spanning taxation, corporate compliance, statutory registrations, business structuring, project advisory, and financial consulting. Our firm is essentially a one-stop solution for businesses seeking support in navigating financial regulations and corporate governance, allowing clients to address all aspects of their business needs through a single trusted partner.
                </p>
              </div>
            </div>

            {/* Right Image - WhoWeAre1.png */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-x-[50px] delay-500">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/WhoWeAre1.png"
                  alt="Professional team meeting - Who We Are"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom Left Image - WhoWeAre2.png */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-x-[-50px] delay-700">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/WhoWeAre2.png"
                  alt="Business consultation - Who We Are"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom Right Content */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-x-[50px] delay-900">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700 leading-relaxed text-lg">
                  A key strength of SBCPL is our multi-disciplinary team of experts. Our staff includes Chartered Accountants (CAs), Company Secretaries (CS), legal advisors, and seasoned management professionals, all working together to deliver well-rounded solutions. This diverse expertise enables a multi-disciplinary approach to problem-solving, wherein tax experts, legal professionals, and business advisors collaborate to address each client's challenges holistically. By leveraging our team's collective knowledge, we ensure that clients receive accurate advice that accounts for all relevant regulatory and business considerations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline - FIXED ANIMATION + HOVER EFFECTS */}
      <section id="timeline-section" className="py-20 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-6">Our Journey</h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Main Timeline Line */}
            <div 
              ref={lineRef}
              className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-600 to-blue-900 z-10"
            ></div>

            {/* Animated Progress Line - CONSTRAINED */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-yellow-400 z-20 transition-all duration-200 ease-out"
              id="timeline-progress"
              style={{ height: '0px', maxHeight: '100%' }}
            ></div>

            {/* Timeline Items with Enhanced Hover Effects */}
            <div className="space-y-16">
              {/* 2015 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-10%" }}
                className="relative"
              >
                {/* Timeline Dot with Hover Effect */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 z-30"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-6 h-6 bg-blue-900 border-3 border-yellow-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"></div>
                </motion.div>

                {/* Year Badge - Above with Hover */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 z-40"
                  whileHover={{ scale: 1.1, y: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300">
                    2015
                  </div>
                </motion.div>

                {/* Content - Left with Enhanced Hover */}
                <div className="flex justify-start">
                  <div className="w-5/12 pr-12 text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.03, 
                        x: -10,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        damping: 20
                      }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-yellow-300 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-2 h-12 bg-yellow-400 rounded-full ml-auto mb-4 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                      <p className="text-gray-800 leading-relaxed text-lg group-hover:text-blue-900 transition-colors duration-300">
                        Founded as a sole proprietorship by Mr. John James.
                      </p>
                    </motion.div>
                  </div>
                  <div className="w-7/12"></div>
                </div>
              </motion.div>

              {/* 2017 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
                className="relative"
              >
                {/* Timeline Dot with Hover Effect */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 z-30"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-6 h-6 bg-blue-900 border-3 border-yellow-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"></div>
                </motion.div>

                {/* Year Badge - Below with Hover */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 z-40"
                  whileHover={{ scale: 1.1, y: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300">
                    2017
                  </div>
                </motion.div>

                {/* Content - Right with Enhanced Hover */}
                <div className="flex justify-end">
                  <div className="w-7/12"></div>
                  <div className="w-5/12 pl-12 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.03, 
                        x: 10,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        damping: 20
                      }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-2 h-12 bg-green-400 rounded-full mr-auto mb-4 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                      <p className="text-gray-800 leading-relaxed text-lg group-hover:text-green-700 transition-colors duration-300">
                        Grew client base across India and the Middle East with specialized taxation and advisory services.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* 2020 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-10%" }}
                className="relative"
              >
                {/* Timeline Dot with Hover Effect */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 z-30"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-6 h-6 bg-blue-900 border-3 border-yellow-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"></div>
                </motion.div>

                {/* Year Badge - Above with Hover */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 z-40"
                  whileHover={{ scale: 1.1, y: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300">
                    2020
                  </div>
                </motion.div>

                {/* Content - Left with Enhanced Hover */}
                <div className="flex justify-start">
                  <div className="w-5/12 pr-12 text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.03, 
                        x: -10,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        damping: 20
                      }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-2 h-12 bg-purple-400 rounded-full ml-auto mb-4 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                      <p className="text-gray-800 leading-relaxed text-lg group-hover:text-purple-700 transition-colors duration-300">
                        Incorporated as SolePath Business Consultants Private Limited with a Board including Dr. John Smith (MD), Dr. Becky Simpson (Director), and Mr. Robert Thomas (Director).
                      </p>
                    </motion.div>
                  </div>
                  <div className="w-7/12"></div>
                </div>
              </motion.div>

              {/* Today */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-10%" }}
                className="relative"
              >
                {/* Timeline Dot - Special for Today with Enhanced Hover */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 z-30"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                >
                  <div className="w-8 h-8 bg-blue-900 border-4 border-yellow-400 rounded-full shadow-xl relative hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                </motion.div>

                {/* Year Badge - Below with Special Hover */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-10 z-40"
                  whileHover={{ scale: 1.15, y: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-bold shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300">
                    Today
                  </div>
                </motion.div>

                {/* Content - Right with Special Today Hover */}
                <div className="flex justify-end">
                  <div className="w-7/12"></div>
                  <div className="w-5/12 pl-12 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 15,
                        boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.4)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        damping: 20
                      }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="w-2 h-12 bg-blue-400 rounded-full mr-auto mb-4 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                      <p className="text-gray-800 leading-relaxed text-lg group-hover:text-blue-700 transition-colors duration-300 relative z-10">
                        Full-service consultancy for domestic and international clients.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline with Hover Effects */}
        <div className="max-w-2xl mx-auto px-6 md:hidden mt-16">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-blue-900"></div>
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="flex-shrink-0 relative"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-6 h-6 bg-blue-900 border-3 border-yellow-400 rounded-full shadow-lg relative z-10 hover:shadow-xl transition-shadow duration-300"></div>
                    </motion.div>
                    <div className="flex-1 pb-8">
                      <motion.div 
                        className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-sm w-fit mb-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.year}
                      </motion.div>
                      <motion.div 
                        className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-xl hover:border-yellow-300 transition-all duration-300 cursor-pointer group"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-1 h-8 bg-yellow-400 rounded-full mb-3 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                        <p className="text-gray-800 text-base leading-relaxed group-hover:text-blue-900 transition-colors duration-300">{item.title}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section - With proper underline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">Our Purpose</h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8 delay-300">
              <div className="bg-blue-900 rounded-2xl p-8 text-white h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  To provide exceptional consulting services that empower businesses to achieve their strategic objectives through innovative solutions, industry expertise, and a client-centered approach. We are committed to delivering measurable results that drive growth, efficiency, and competitive advantage.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8 delay-500">
              <div className="bg-blue-900 rounded-2xl p-8 text-white h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  To be recognized as the premier business consulting firm, known for our integrity, expertise, and transformative impact on client organizations. We aspire to set new standards of excellence in the consulting industry and be the trusted partner of choice for businesses seeking sustainable success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section - With proper underline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">Meet our founders</h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              The Core Team represents our deep-rooted values and wide spectrum of capabilities. We make a consistent and 
              conscious effort to gauge the magnitude of future business hurdles and develop appropriate solutions. Our 
              resolute will, flexible approach and clinical precision has the power to resolve the toughest of financial problems 
              of your business.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
              Explore More
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              { name: 'Anand Krishna', role: 'Co-founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop' },
              { name: 'Rahul Singh', role: 'Founder', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop' },
              { name: 'Ajeet Agarwal', role: 'Executive Manager', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop' }
            ].map((founder, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-w-4 aspect-h-5">
                    <img
                      src={founder.img}
                      alt={founder.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                    <p className="text-gray-600 font-medium">{founder.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {[
              { number: '12+', title: 'Years of Experience', subtitle: 'Delivering excellence since 2011' },
              { number: '200+', title: 'Satisfied Clients', subtitle: 'Across multiple industries' },
              { number: '24/7', title: 'Customer Support', subtitle: 'Always available for our clients' }
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-blue-900 rounded-2xl p-8 text-center text-white hover:bg-blue-800 transition-colors duration-300">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                  <p className="text-blue-200 text-sm">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SBCPL Section - With proper underline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">Why Choose SBCPL?</h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                number: '01',
                title: 'Dedicated & Skilled Team',
                text: 'Our team comprises highly qualified professionals with extensive experience across various industries, ensuring solutions tailored to your specific needs.'
              },
              {
                number: '02',
                title: 'Expert Advisory Network',
                text: 'Access to our extensive network of industry specialists and subject matter experts who provide valuable insights and guidance.'
              },
              {
                number: '03',
                title: 'Customized Solutions',
                text: 'We understand that every business is unique, and we develop tailored strategies that address your specific challenges and opportunities.'
              },
              {
                number: '04',
                title: 'Proven Track Record',
                text: 'Our successful portfolio of projects and satisfied clients demonstrates our ability to deliver exceptional results consistently.'
              },
              {
                number: '05',
                title: 'Global Perspective',
                text: 'With experience working with clients across different regions, we bring a global perspective to local challenges.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-900 text-yellow-400 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                      {item.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <p className="text-gray-600 mb-6 text-lg">Want to partner with SBCPL? Contact us for a consultation.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animate-on-scroll {
          transition-property: opacity, transform;
        }
        
        .animate-on-scroll.animated {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        /* Constrain timeline animation to its section */
        #timeline-progress {
          max-height: 100%;
          overflow: hidden;
        }

        /* Enhanced hover effects */
        .group:hover .timeline-accent {
          transform: scaleY(1);
        }

        @media (max-width: 768px) {
          .timeline-content {
            width: 100% !important;
            text-align: center !important;
            padding: 0 1rem !important;
          }
        }

        /* Hide desktop timeline on mobile */
        @media (max-width: 768px) {
          .timeline-container {
            display: none;
          }
        }
      `}</style>

      {/* Update the scroll handler to work with the new timeline */}
      <script>
        {`
          // Enhanced scroll handler for timeline progress
          const updateTimelineProgress = () => {
            const timelineSection = document.querySelector('#timeline-section');
            const progressLine = document.querySelector('#timeline-progress');
            
            if (timelineSection && progressLine) {
              const rect = timelineSection.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              const sectionTop = rect.top;
              const sectionHeight = rect.height;
              
              if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
                const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)));
                const maxHeight = sectionHeight * 0.8;
                progressLine.style.height = \`\${progress * maxHeight}px\`;
              }
            }
          };

          if (typeof window !== 'undefined') {
            window.addEventListener('scroll', updateTimelineProgress);
            updateTimelineProgress();
          }
        `}
      </script>
    </div>
  );
};

export default AboutUsPage;