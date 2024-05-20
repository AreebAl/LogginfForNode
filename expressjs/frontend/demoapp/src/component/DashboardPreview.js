import React from 'react';
import DashboardListItem from './DashboardListItem';

const DashboardPreview = ({ trips }) => {
  return (
    <div className="dashboard-preview">
      {/* Render DashboardListItem for each trip */}
      {Object.entries(trips).map(([key, value]) => (
        <DashboardListItem key={key} trip={value} />
      ))}
    </div>
  );
};

export default DashboardPreview;
