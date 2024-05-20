import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardContent from './DashboardContent';
import DashboardPreview from './DashboardPreview';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar/>
      <DashboardContent/>
      <DashboardPreview/>
    </div>
  );
};

export default Dashboard;
