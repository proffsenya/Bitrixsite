import React from 'react';
import Reports from '../components/Reports';
import '../styles/ReportsPage.css';
const ReportsPage = () => {
  const dummyData = {}; // Placeholder for report data

  return (
    <div className="reports-page">
      <Reports data={dummyData} />
    </div>
  );
};

export default ReportsPage;
