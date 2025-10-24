import './Home.css';
import { useState, useEffect } from 'preact/hooks';

export function App() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleServicesDropdown = (e) => {
    e.stopPropagation();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (servicesDropdownOpen) {
        setServicesDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive accounting services including taxation, corporate compliance, statutory registrations, business structuring, project advisory, and financial consulting to help businesses navigate regulations and achieve their goals."
    },
    {
      question: "How do I get started with your services?",
      answer: "Getting started is simple! Contact us for a free consultation where we'll discuss your business needs and recommend the best services for you. You can reach us through our contact form, phone, or email."
    },
    {
      question: "What are your service fees?",
      answer: "Our fees vary depending on the complexity and scope of services required. We offer competitive pricing and transparent fee structures. Contact us for a personalized quote based on your specific business needs."
    },
    {
      question: "Do you provide ongoing support and consultation?",
      answer: "Yes, we provide ongoing support and consultation to ensure your business remains compliant and optimized. Our team is available to answer questions, provide guidance, and adapt our services as your business grows and evolves."
    }
  ];
  return (
    <>
      {/* Fixed Navbar */}
      <nav class="fixed-navbar">
        <div class="navbar-content">
          <div class="navbar-logos">
            <img src="/src/assets/logo-1.svg" alt="Logo 1" class="navbar-logo ca-logo" />
            <div class="sbcpl-logo-group">
              <img src="/src/assets/logo-2.svg" alt="SBCPL" class="navbar-logo sbcpl-logo" />
              <div class="sbcpl-texts">
                <span class="sbcpl-main">SBCPL</span>
              </div>
            </div>
          </div>
          <ul class="navbar-links">
            <li>Home</li>
            <li>About</li>
            <li class="navbar-dropdown" onClick={toggleServicesDropdown}>
              Services <span class="navbar-caret" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
                  <path d="M6 9l6 6 6-6" stroke="#233c74" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {servicesDropdownOpen && (
                <div class="navbar-dropdown-menu">
                  <a href="#services">Income Tax</a>
                  <a href="#services">GST</a>
                  <a href="#services">TDS</a>
                  <a href="#services">Partnership Firm Compliance</a>
                  <a href="#services">Company Law & ROC Compliance</a>
                  <a href="#services">Statutory Registrations</a>
                  <a href="#services">Loan & Finance Facilitation</a>
                  <a href="#services">Project reports & Investment Proposals</a>
                  <a href="#services">LLP Compliance Services</a>
                </div>
              )}
            </li>
            <li>Contact</li>
          </ul>
          <button class="navbar-cta">Get Started</button>
        </div>
      </nav>
      <div class="homepage">
        {/* Hero Section */}
        <section class="hero">
          <div class="hero-overlay">
            <div class="hero-content">
              <h1>Excellence in Auditing and Assurance</h1>
              <p>Corporate & Professional Business Solutions with Integrity & Performance</p>
              <button class="primary-btn">Get Started Now</button>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section class="about-us">
          <h2 class="about-title">About Us</h2>
          <div class="about-underline"></div>
          <p class="about-desc">
            SBCPL is a professionally managed consulting house headquartered in Kochi, Kerala, India, with a strong presence in the industry since 2013. We provide an integrated spectrum of services spanning taxation, corporate compliance, statutory registrations, business structuring, project advisory, and financial consulting. Our firm is essentially a one-stop solution for businesses seeking support in navigating financial regulations and corporate governance, allowing clients to address all aspects of their business needs through a single trusted partner<br />capitaire.com
          </p>
          <button class="about-btn">
            Explore More <span class="about-btn-icon">&#8594;</span>
          </button>
        </section>

        {/* Mission & Vision */}
        <section class="mission-vision">
          <div class="mv-container">
            <div class="mv-card">
              <h3>Our Mission</h3>
              <p>
                Our mission is to deliver reliable, transparent, and personalized solutions that empower our clients to make informed decisions.
              </p>
            </div>
            <div class="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be the advisors of trust and first choice in Chartered Accounting firm, simplifying compliance, and creating long-term value for our clients through integrity, expertise, and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section class="founders">
          <h2 class="founders-title">Meet our founders</h2>
          <div class="founders-underline"></div>
          <p class="founders-desc">
            The Core Team represents our deep-rooted values and wide spectrum of capabilities. We make a consistent and conscious effort to gauge the magnitude of future business hurdles and develop appropriate solutions. Our resolute will, flexible approach and clinical precision has the power to resolve the toughest of financial problems of your business.
          </p>
          <button class="founders-btn">
            Explore More <span class="about-btn-icon">&#8594;</span>
          </button>
          <div class="founders-list">
            <div class="founder-card">
              <div class="founder-img-card">
                <img class="founder-img" src="/src/assets/Mask group.svg" alt="Anand Krishna" />
              </div>
              <div class="founder-label-name">Anand Krishna</div>
              <div class="founder-label-role">Co-Founder</div>
            </div>
            <div class="founder-card">
              <div class="founder-img-card">
                <img class="founder-img" src="/src/assets/Mask group.svg" alt="Rahul Singh" />
              </div>
              <div class="founder-label-name">Rahul Singh</div>
              <div class="founder-label-role">Founder</div>
            </div>
            <div class="founder-card">
              <div class="founder-img-card">
                <img class="founder-img" src="/src/assets/Mask group.svg" alt="Ajeet Agarwal" />
              </div>
              <div class="founder-label-name">Ajeet Agarwal</div>
              <div class="founder-label-role">Executive Manager</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section class="services">
          <h2 class="services-title">Our Services</h2>
          <div class="services-desc">
            The Core Team represents our deep-rooted values and wide spectrum of capabilities. We make a consistent and conscious effort to gauge the magnitude of future business hurdles and develop appropriate solutions. Our resolute will, flexible approach and clinical precision has the power to resolve the toughest of financial problems of your business.
          </div>
          <div class="services-list">
            <div class="service-card">
              <div class="service-icon">📄</div>
              <div class="service-label">Income Tax</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="service-card">
              <div class="service-icon">🧾</div>
              <div class="service-label">GST</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="service-card">
              <div class="service-icon">🛡️</div>
              <div class="service-label">TDS</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="service-card">
              <div class="service-icon">🏢</div>
              <div class="service-label">Partnership Firm Compliance</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="service-card">
              <div class="service-icon">🏛️</div>
              <div class="service-label">Company Law & ROC Compliance</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="service-card">
              <div class="service-icon">📝</div>
              <div class="service-label">Statutory Registrations</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="service-card">
              <div class="service-icon">💰</div>
              <div class="service-label">Loan & Finance Facilitation</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="service-card">
              <div class="service-icon">📊</div>
              <div class="service-label">Project reports & Investment Proposals</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="service-card">
              <div class="service-icon">⚖️</div>
              <div class="service-label">LLP Compliance Services</div>
              <div class="service-cta" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section class="faq">
          <div className="faq-header" style={{marginBottom: '2.5em', marginTop: '1em'}}>
            <div className="faq-title" style={{fontSize: '2.8rem', fontWeight: 900, color: '#000', marginBottom: '0.2em', letterSpacing: '0.01em', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', textAlign: 'center'}}>
              FAQ’s
            </div>
            <div className="faq-subtitle" style={{fontSize: '1.08rem', color: '#233c74', opacity: 0.85, marginBottom: '0.2em', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', textAlign: 'center'}}>
              Everything you need to know about us and our services.<br />
              Can’t find an answer? <a href="#" style={{color:'#233c74', textDecoration:'underline', fontWeight: 500, fontSize: '1.08rem'}}>Chat with our team</a>
            </div>
          </div>
          <div class="faq-list" style={{maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2em'}}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                class="faq-item" 
                style={{
                  background: '#fff', 
                  borderRadius: '18px', 
                  boxShadow: '0 8px 32px 0 rgba(10,23,78,0.13)', 
                  padding: '0.7em 2em', 
                  display: 'flex', 
                  flexDirection: 'column',
                  minHeight: '64px', 
                  fontSize: '1em', 
                  fontWeight: 500, 
                  color: '#233c74', 
                  position: 'relative', 
                  borderLeft: expandedFaq === index ? '6px solid #233c74' : '6px solid #ffc300', 
                  borderRight: expandedFaq === index ? '6px solid #ffc300' : '6px solid #fff',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => toggleFaq(index)}
              >
                <div style={{display: 'flex', alignItems: 'center', minHeight: '50px', position: 'relative'}}>
                  <button 
                    class="faq-question" 
                    style={{
                      background: 'none', 
                      border: 'none', 
                      fontSize: '1.8em', 
                      fontWeight: 700, 
                      color: '#000', 
                      cursor: 'pointer', 
                      outline: 'none', 
                      transition: 'transform 0.3s ease',
                      position: 'absolute',
                      left: '-35px',
                      width: '40px',
                      textAlign: 'left'
                    }}
                  >
                    {expandedFaq === index ? '-' : '+'}
                  </button>
                  <div style={{flex: 1, fontSize: '1em', color: '#233c74', fontWeight: 600, textAlign: 'center', paddingLeft: '30px', paddingRight: '30px'}}>
                    {faq.question}
                  </div>
                </div>
                <div 
                  class="faq-answer" 
                  style={{
                    maxHeight: expandedFaq === index ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, padding 0.3s ease',
                    padding: expandedFaq === index ? '0 30px 1em 30px' : '0 30px 0 30px',
                    fontSize: '0.9em',
                    color: '#233c74',
                    lineHeight: '1.5',
                    opacity: expandedFaq === index ? 1 : 0,
                    textAlign: 'center'
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section class="contact-section">
          <div class="contact-bg">
            <div class="contact-header">
              <h2 class="contact-title">Get In Touch</h2>
              <div class="contact-subtitle">We're here to help you. We'd love to hear from you</div>
            </div>
            <div class="contact-main">
              <form class="contact-form-v2">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" />
                <button class="contact-submit-btn" type="submit">Submit</button>
              </form>
              <div class="contact-map-v2">
                <iframe
                  title="SBCPL Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=76.2673%2C9.9312%2C76.2973%2C9.9512&amp;layer=mapnik"
                  style={{ border: 0, width: '100%', height: '100%', borderRadius: '18px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div class="contact-socials">
              <span class="contact-social-icon">G</span>
              <span class="contact-social-icon">in</span>
              <span class="contact-social-icon">F</span>
              <span class="contact-social-icon">X</span>
            </div>
          </div>
          <div class="contact-lower">
            <div class="contact-lower-content">
              <span>Want to partner with SBCPL? Contact us for a consultation.</span>
              <button class="contact-cta-btn">Book a Free Consultation</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer class="footer">
          <div class="footer-content">
            <div class="footer-links">
              <div>
                <h5>Site Map</h5>
                <ul>
                  <li>Home</li>
                  <li>Services</li>
                  <li>Contact</li>
                  <li>About Us</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div>
                <h5>Legal</h5>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
            <div class="footer-social">
              <span>© 2025 All Rights Reserved</span>
            </div>
          </div>
        </footer>
      </div>

    </>
  );
}
