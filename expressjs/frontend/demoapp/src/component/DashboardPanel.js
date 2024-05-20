import React from 'react';

const DashboardPanel = ({ panelId, trips }) => {
  return (
    <div className={`dashboard-content__panel ${panelId === 'my_trip' ? 'dashboard-content__panel--active' : ''}`} data-panel-id={panelId}>
      {/* Render trip details here based on panelId */}
    </div>
  );
};

export default DashboardPanel;
