import React from 'react';
import ReactDOM from 'react-dom/client'; // Важно использовать "react-dom/client" для React 18
import './index.css'; 
import App from '../../defect/defect-management-system/src/App';
import reportWebVitals from '../../defect/defect-management-system/src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
