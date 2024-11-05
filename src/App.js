import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './Components/Navbar'; // Import Navbar component
import Home from './Components/Home'; // Import Home component
import ServiceDesc from './Components/ServiceDesc'; // Import ServiceDesc component
import { services } from './Components/ServiceData'; // Import services data array
import './index.css'; // Import CSS for global styles

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} /> 

        {/* Dynamically create routes for each service */}
        {services.map(service => (
          <Route 
            key={service.id} // Each route needs a unique key
            path={`/service/${service.id}`} // URL path for each service
            element={<ServiceDesc service={service} />} // Pass the service object to ServiceDesc component as a prop
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
