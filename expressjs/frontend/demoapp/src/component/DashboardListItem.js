import React from 'react';

const DashboardListItem = ({ trip }) => {
  return (
    <div className={`dashboard-preview__panel ${trip === 'Bromo' ? 'dashboard-preview__panel--active' : ''}`} data-panel-id={trip}>
      {/* Render trip details and tasks here */}
    </div>
  );
};

export default DashboardListItem;
