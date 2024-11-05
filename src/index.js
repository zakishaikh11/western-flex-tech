import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this file exists in the src directory
import App from './App'; // Ensure App.js exists and is correctly imported
import reportWebVitals from './reportWebVitals'; // You can remove this if not used

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance, you can remove this or leave it
reportWebVitals(); // This function can be commented out if not used
