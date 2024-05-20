import React from 'react';

const DashboardNav = ({ navItems, handleNavItemClick }) => {
  return (
    <>
      {Object.entries(navItems).map(([key, value]) => (
        <li key={key} className={`dashboard-nav__item ${key === 'my_trip' ? 'dashboard-nav__item--selected' : ''}`}>
          <a href={value} onClick={() => handleNavItemClick(key)}>
            <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/planner_dashboard_${value}.svg`} alt={key} />
            {key}
          </a>
        </li>
      ))}
    </>
  );
};

export default DashboardNav;
