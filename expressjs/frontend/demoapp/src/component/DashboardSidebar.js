import React from 'react';

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-sidebar__brand">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/planner_dashboard_logo.svg" alt="Brand Logo" />
      </div>
      <ul className="dashboard-nav">
        {/* Render DashboardNav component here */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
