import './app.css';

export function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <nav class="fixed-navbar">
        <div class="navbar-content">
          <div class="navbar-logos">
            <img src="/ca-logo.png" alt="CA India" class="navbar-logo ca-logo" />
            <div class="sbcpl-logo-group">
              <img src="/sbcpl-logo.png" alt="SBCPL" class="navbar-logo sbcpl-logo" />
              <div class="sbcpl-texts">
                <span class="sbcpl-main">SBCPL</span>
                <span class="sbcpl-sub">SBC</span>
              </div>
            </div>
          </div>
          <ul class="navbar-links">
            <li>Home</li>
            <li>About</li>
            <li class="navbar-dropdown">
              Services <span class="navbar-caret">&#9660;</span>
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
              <img class="founder-img" src="/founder1.jpg" alt="Anand Krishna" />
              <div class="founder-info">
                <div class="founder-name">Anand Krishna</div>
                <div class="founder-role">Co-Founder</div>
              </div>
            </div>
            <div class="founder-card">
              <img class="founder-img" src="/founder2.jpg" alt="Rahul Singh" />
              <div class="founder-info">
                <div class="founder-name">Rahul Singh</div>
                <div class="founder-role">Founder</div>
              </div>
            </div>
            <div class="founder-card">
              <img class="founder-img" src="/founder3.jpg" alt="Ajeet Agarwal" />
              <div class="founder-info">
                <div class="founder-name">Ajeet Agarwal</div>
                <div class="founder-role">Executive Manager</div>
              </div>
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
            </div>
            <div class="service-card">
              <div class="service-icon">🧾</div>
              <div class="service-label">GST</div>
            </div>
            <div class="service-card">
              <div class="service-icon">🛡️</div>
              <div class="service-label">TDS</div>
            </div>
            <div class="service-card">
              <div class="service-icon">🏢</div>
              <div class="service-label">Partnership Firm Compliance</div>
            </div>
            <div class="service-card">
              <div class="service-icon">🏛️</div>
              <div class="service-label">Company Law & ROC Compliance</div>
            </div>
            <div class="service-card">
              <div class="service-icon">📝</div>
              <div class="service-label">Statutory Registrations</div>
            </div>
            <div class="service-card">
              <div class="service-icon">💰</div>
              <div class="service-label">Loan & Finance Facilitation</div>
            </div>
            <div class="service-card">
              <div class="service-icon">📊</div>
              <div class="service-label">Project reports & Investment Proposals</div>
            </div>
            <div class="service-card">
              <div class="service-icon">⚖️</div>
              <div class="service-label">LLP Compliance Services</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section class="faq">
          <h2>FAQ's</h2>
          <div class="faq-list">
            <div class="faq-item">
              <button class="faq-question">+</button>
              <div class="faq-answer"> </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">+</button>
              <div class="faq-answer"> </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">+</button>
              <div class="faq-answer"> </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section class="contact">
          <h2>Get In Touch</h2>
          <div class="contact-content">
            <form class="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" />
              <button class="primary-btn" type="submit">Submit</button>
            </form>
            <div class="contact-map placeholder-map" />
          </div>
          <button class="secondary-btn">Book a Free Consultation</button>
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
