import React, { useState } from 'react';
import './App.css';
import ServicePage from './components/ServicePage.jsx';
import { serviceConfigs } from './data/serviceConfigs.js';

function App() {
  const [currentService, setCurrentService] = useState('roc');
  
  const handleServiceChange = (serviceName) => {
    setCurrentService(serviceName);
  };

  return (
    <div className="App">
      <ServicePage 
        serviceConfig={serviceConfigs[currentService]} 
        onServiceChange={handleServiceChange}
      />
    </div>
  );
}

export default App;
