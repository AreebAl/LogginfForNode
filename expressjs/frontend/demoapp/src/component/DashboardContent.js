import React from 'react';
import DashboardPanel from './DashboardPanel';


const DashboardContent = ({ navItems, trips }) => {
  return (
    <div className="dashboard-content">
      {/* Render DashboardPanel based on selected nav item */}
      {Object.entries(navItems).map(([key, value]) => (
        key === 'my_trip' && (
          <DashboardPanel key={key} panelId={value} trips={trips} />
        )
      ))}
    </div>
  );
};

export default DashboardContent;
