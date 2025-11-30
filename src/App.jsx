import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'preact/hooks';
import { App as Home } from './Home.jsx';
import AboutUsPage from '../Ash/LawFirmWebApp/AboutUsPage.jsx';
import ServicePage from '../Ak/CAfirmServices-main/src/components/ServicePage.jsx';
import serviceConfigs from '../Ak/CAfirmServices-main/src/data/serviceConfigs.js';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        
        {/* Service Routes */}
        <Route path="/services/income-tax" element={<ServicePage serviceConfig={serviceConfigs.incomeTax} />} />
        <Route path="/services/gst" element={<ServicePage serviceConfig={serviceConfigs.gst} />} />
        <Route path="/services/tds" element={<ServicePage serviceConfig={serviceConfigs.tds} />} />
        <Route path="/services/partnership-firm-compliance" element={<ServicePage serviceConfig={serviceConfigs.partnership} />} />
        <Route path="/services/company-law-roc-compliance" element={<ServicePage serviceConfig={serviceConfigs.roc} />} />
        <Route path="/services/statutory-registrations" element={<ServicePage serviceConfig={serviceConfigs.registrations} />} />
        <Route path="/services/loan-finance-facilitation" element={<ServicePage serviceConfig={serviceConfigs.loan} />} />
        <Route path="/services/project-reports-investment-proposals" element={<ServicePage serviceConfig={serviceConfigs.projectReports} />} />
        <Route path="/services/llp-compliance" element={<ServicePage serviceConfig={serviceConfigs.llp} />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
