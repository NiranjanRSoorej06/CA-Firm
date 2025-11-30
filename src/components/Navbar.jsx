import { useState, useEffect, useRef } from 'preact/hooks';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [servicesHoverTimeout, setServicesHoverTimeout] = useState(null);
  const dropdownRef = useRef(null);

  const openServicesDropdown = () => {
    if (servicesHoverTimeout) {
      clearTimeout(servicesHoverTimeout);
    }
    setServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    if (servicesHoverTimeout) {
      clearTimeout(servicesHoverTimeout);
    }
    const timeout = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 400);
    setServicesHoverTimeout(timeout);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (servicesHoverTimeout) {
        clearTimeout(servicesHoverTimeout);
      }
    };
  }, [servicesHoverTimeout]);

  return (
    <nav class="fixed-navbar">
      <div class="navbar-content">
        <div class="navbar-logos">
          <img src="/CA.png" alt="CA Logo" class="navbar-logo ca-logo" />
          <div class="sbcpl-logo-group">
            <img src="/logo.png" alt="SBCPL" class="navbar-logo sbcpl-logo" />
            <div class="sbcpl-texts">
              <span class="sbcpl-main">SBCPL</span>
            </div>
          </div>
        </div>
        <ul class="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li 
            class="navbar-dropdown" 
            ref={dropdownRef}
            onMouseEnter={openServicesDropdown} 
            onMouseLeave={closeServicesDropdown}
          >
            Services <span class="navbar-caret" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
                <path d="M6 9l6 6 6-6" stroke="#233c74" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            {servicesDropdownOpen && (
              <div class="navbar-dropdown-menu" onMouseEnter={openServicesDropdown} onMouseLeave={closeServicesDropdown}>
                <Link to="/services/income-tax">Income Tax</Link>
                <Link to="/services/gst">GST</Link>
                <Link to="/services/tds">TDS</Link>
                <Link to="/services/partnership-firm-compliance">Partnership Firm Compliance</Link>
                <Link to="/services/company-law-roc-compliance">Company Law & ROC Compliance</Link>
                <Link to="/services/statutory-registrations">Statutory Registrations</Link>
                <Link to="/services/loan-finance-facilitation">Loan & Finance Facilitation</Link>
                <Link to="/services/project-reports-investment-proposals">Project reports & Investment Proposals</Link>
                <Link to="/services/llp-compliance">LLP Compliance Services</Link>
              </div>
            )}
          </li>
          <li>Contact</li>
        </ul>
        <button class="navbar-cta">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
