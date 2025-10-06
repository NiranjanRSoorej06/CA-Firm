import './app.css';

export function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <nav class="fixed-navbar">
        <div class="navbar-content">
          <div class="navbar-logos">
            <img src="/ca-logo.png" alt="CA India" class="navbar-logo" />
            <img src="/sbcpl-logo.png" alt="SBCPL" class="navbar-logo" />
            <span class="navbar-brand">SBCPL</span>
          </div>
          <ul class="navbar-links">
            <li>Home</li>
            <li>About</li>
            <li class="navbar-dropdown">
              Services <span class="navbar-caret">▼</span>
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
          <h2>About Us</h2>
          <p>
            SEGPL is a professionally managed consulting house headquartered in Kochi, Kerala, India, with a strong presence since January 2013. We provide an integrated package of services in the areas of audit, assurance, taxation, and compliance.
          </p>
          <button class="secondary-btn">Explore More</button>
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
          <h2>Meet our founders</h2>
          <p>The Core Team represents our deep-rooted values and wide spectrum of capabilities. We make a consistent and concerted effort to engage the magnitude of our business minds and thought processes in our consultations.</p>
          <button class="secondary-btn">Explore More</button>
          <div class="founders-list">
            <div class="founder-card">
              <div class="founder-img placeholder-img" />
              <div class="founder-info">
                <h4>Anand Krishna</h4>
                <p>Founder</p>
              </div>
            </div>
            <div class="founder-card">
              <div class="founder-img placeholder-img" />
              <div class="founder-info">
                <h4>Rahul Singh</h4>
                <p>Co-Founder</p>
              </div>
            </div>
            <div class="founder-card">
              <div class="founder-img placeholder-img" />
              <div class="founder-info">
                <h4>Ajeet Agarwal</h4>
                <p>Partner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section class="services">
          <h2>Our Services</h2>
          <div class="services-list">
            <div class="service-card">Income Tax</div>
            <div class="service-card">GST</div>
            <div class="service-card">TDS</div>
            <div class="service-card">Partnership Firm Compliance</div>
            <div class="service-card">Company Law & ROC Compliance</div>
            <div class="service-card">Statutory Registrations</div>
            <div class="service-card">Loan & Finance Facilitation</div>
            <div class="service-card">Project reports & Investment Proposals</div>
            <div class="service-card">LLP Compliance Services</div>
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
