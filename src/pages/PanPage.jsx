import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Navbar from '../components/Navbar.jsx';
import Footer from '../../Ak/CAfirmServices-main/src/components/Footer.jsx';
import './pan.css';

const panFaqs = [
  { q: 'What is PAN and why is it required?', a: 'PAN (Permanent Account Number) is a 10-digit alphanumeric identifier issued by the Income Tax Department of India. It is mandatory for filing income tax returns, opening bank accounts, making high-value transactions, and various financial activities. PAN helps track financial transactions and prevents tax evasion.' },
  { q: 'How can I apply for a new PAN card?', a: 'You can apply for a new PAN card online through the NSDL or UTIITSL portals by filling Form 49A (for Indian citizens) or Form 49AA (for foreign nationals). You will need to submit identity proof, address proof, and date of birth proof along with passport-size photographs.' },
  { q: 'What documents are required for PAN application?', a: 'For individuals: Aadhaar card, Voter ID, Passport, or Driving License as identity proof. For address proof: Utility bills, Bank statements, or Aadhaar. For businesses: Certificate of Incorporation, Partnership Deed, or Trust Deed along with identity proof of authorized signatories.' },
  { q: 'How long does it take to get a PAN card?', a: 'Typically, a PAN card is dispatched within 15-20 working days from the date of application if all documents are in order. You can also opt for e-PAN which is issued within 48 hours of successful verification.' },
  { q: 'Can I correct or update details on my PAN card?', a: 'Yes, you can update or correct details like name, date of birth, address, or photograph on your PAN card by submitting a PAN correction/change request form online or offline. You will need to provide supporting documents for the changes requested.' },
  { q: 'What is the fee for PAN card application?', a: 'The fee for a new PAN card or correction is approximately ₹107 (including GST) for Indian communication address and ₹1,017 for foreign address. e-PAN is available at a lower cost of around ₹72.' },
  { q: 'Can I have more than one PAN card?', a: 'No, it is illegal to hold more than one PAN. If you have multiple PANs, you must surrender the additional ones. Holding multiple PANs can attract a penalty of ₹10,000 under Section 272B of the Income Tax Act.' },
  { q: 'Is PAN mandatory for minors?', a: 'PAN is not mandatory for minors unless they have taxable income. However, parents can apply for PAN on behalf of minors if needed for investments or bank accounts. The application process is the same with additional documents required.' },
];

const tanFaqs = [
  { q: 'What is TAN and who needs to obtain it?', a: 'TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number required by persons who are responsible for deducting or collecting tax at source (TDS/TCS). All corporate entities, government offices, and individuals required to deduct TDS must obtain TAN.' },
  { q: 'How do I apply for TAN registration?', a: 'You can apply for TAN online through the NSDL-TIN website by filling Form 49B. The application requires details like name, address, type of deductor, and nature of payment. Processing fee applies and TAN is typically issued within 7-15 working days.' },
  { q: 'What are the penalties for not having TAN?', a: 'Failure to apply for TAN or quoting incorrect TAN can result in a penalty of ₹10,000 under Section 272BB of the Income Tax Act. Additionally, TDS returns filed without valid TAN will not be accepted by the department.' },
  { q: 'Can TAN details be updated or corrected?', a: 'Yes, you can update or correct TAN details by submitting a TAN correction form (Form 49B) online through NSDL. Changes like name, address, category of deductor, and contact details can be updated with supporting documentation.' },
  { q: 'What is the difference between PAN and TAN?', a: 'PAN is required for all taxpayers and is used for tracking financial transactions. TAN is specifically required by those who deduct or collect tax at source (TDS/TCS). While PAN is used for filing returns and identity verification, TAN is used for depositing TDS and filing TDS returns.' },
  { q: 'How many TANs can a company have?', a: 'A company can have multiple TANs if it has different branches or divisions that independently handle TDS. Each branch can apply for a separate TAN. However, having multiple TANs requires maintaining separate records and filing separate returns for each.' },
  { q: 'What happens if TDS is deposited without TAN?', a: 'TDS deposited without quoting TAN will not be credited to the deductee account. This can lead to mismatches in Form 26AS, causing problems for both the deductor and deductee. Always ensure valid TAN is quoted in all TDS-related transactions.' },
  { q: 'Is TAN required for salary TDS?', a: 'Yes, employers deducting TDS from employee salaries must have a valid TAN. This applies to all employers including companies, firms, individuals, and HUFs who are required to deduct tax at source from salary payments.' },
];

const services = [
  { icon: '📋', title: 'New PAN Registration', desc: 'Complete assistance for fresh PAN applications for individuals, businesses, and NRIs.' },
  { icon: '🔄', title: 'PAN Correction', desc: 'Update or correct name, DOB, address, photo, or signature on your existing PAN card.' },
  { icon: '🏢', title: 'TAN Registration', desc: 'Quick TAN registration for businesses, corporates, and entities required to deduct TDS.' },
  { icon: '📝', title: 'TAN Correction', desc: 'Assistance with TAN detail updates including name, address, and category changes.' },
  { icon: '🔗', title: 'PAN-Aadhaar Linking', desc: 'Help with mandatory PAN-Aadhaar linking to keep your PAN active and valid.' },
  { icon: '⚡', title: 'Instant e-PAN', desc: 'Get your e-PAN within 48 hours through Aadhaar-based instant verification.' },
];

const PanPage = () => {
  const [openPan, setOpenPan] = useState(null);
  const [openTan, setOpenTan] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pan-page">
      <Navbar />

      {/* Hero Section */}
      <header className="pan-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tag">FAQ & Services</span>
          <h1>PAN & TAN Services</h1>
          <p>Complete assistance for PAN and TAN registration, correction, and compliance. Expert guidance for individuals, businesses, and corporates.</p>
          <div className="hero-buttons">
            <a href="/contact" className="hero-btn primary">Get Started</a>
          </div>
        </div>
        <div className="hero-wave"></div>
      </header>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-container">
          <div className="services-header">
            <h2>Our PAN & TAN Services</h2>
            <p>Comprehensive solutions for all your PAN and TAN requirements</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div className="service-card" key={i}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pan-main">
        {/* Top Section: Two columns */}
        <div className="pan-top-section">
          <div className="pan-intro">
            <h2 className="section-title">Quick answers and<br />guidance on</h2>
            <p className="section-highlight">PAN and TAN services.</p>
            <p className="section-desc">
              At SICPL, we understand that PAN and TAN compliance can be confusing for individuals and businesses. This FAQ section simplifies the process by answering common questions and providing step-by-step support. Our expert team has helped thousands of clients navigate the complexities of tax identification numbers.
            </p>
            <div className="intro-image">
              <div className="image-placeholder">
                <span>Image Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="pan-right">
            <div className="sidebar-card why-choose">
              <h4>Why Choose SICPL?</h4>
              <ul>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Simplified application and correction process.</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>End-to-end compliance handled by experts.</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Quick resolution for PAN/TAN issues.</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Dedicated support throughout the process.</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Transparent pricing with no hidden charges.</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-card cta-card">
              <h4>Still confused about PAN or TAN?</h4>
              <p>Let our experts guide you through the process with ease. Get personalized assistance today.</p>
              <a href="/contact" className="cta-btn">Book a Free Consultation</a>
            </div>
          </aside>
        </div>

        {/* Full Width FAQ Sections */}
        <div className="pan-faq-fullwidth">
          {/* PAN Section */}
          <h3 className="faq-section-title">PAN - Permanent Account Number</h3>
          <p className="faq-section-desc">
            PAN is a unique 10-character alphanumeric identifier issued by the Income Tax Department. It's essential for all financial transactions and tax-related activities. Below are the most frequently asked questions about PAN.
          </p>

          {/* PAN FAQs */}
          <div className="faq-list">
            {panFaqs.map((item, i) => (
              <div className="faq-item-wrapper" key={`pan-${i}`}>
                <div
                  className={`faq-item ${openPan === i ? 'open' : ''}`}
                  onClick={() => setOpenPan(openPan === i ? null : i)}
                >
                  <span className="faq-question">{item.q}</span>
                  <span className="faq-chevron">{openPan === i ? '∧' : '∨'}</span>
                </div>
                {openPan === i && <div className="faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>

          {/* TAN Section */}
          <h3 className="faq-section-title tan-title">TAN - Tax Deduction Account Number</h3>
          <p className="faq-section-desc">
            TAN is mandatory for all persons responsible for deducting or collecting tax at source. Whether you're an employer, business, or organization, understanding TAN requirements is crucial for compliance. Here are the common questions about TAN.
          </p>

          {/* TAN FAQs */}
          <div className="faq-list">
            {tanFaqs.map((item, i) => (
              <div className="faq-item-wrapper" key={`tan-${i}`}>
                <div
                  className={`faq-item ${openTan === i ? 'open' : ''}`}
                  onClick={() => setOpenTan(openTan === i ? null : i)}
                >
                  <span className="faq-question">{item.q}</span>
                  <span className="faq-chevron">{openTan === i ? '∧' : '∨'}</span>
                </div>
                {openTan === i && <div className="faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <h2>How It Works</h2>
          <p className="process-subtitle">Simple 4-step process to get your PAN or TAN</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Submit Request</h3>
              <p>Fill out our simple form with your details and requirements</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Document Collection</h3>
              <p>Our team collects and verifies all necessary documents</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Application Filing</h3>
              <p>We process your application with the relevant authorities</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Receive your PAN/TAN card at your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <div className="bottom-cta-content">
          <div className="cta-text">
            <h3>Ready to get started with your PAN or TAN?</h3>
            <p>Contact us today for expert assistance and hassle-free processing.</p>
          </div>
          <a href="/contact" className="cta-btn">Book a Free Consultation</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PanPage;
