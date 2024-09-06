import React from 'react';
import '../styles/layout.css';
import SidebarNavigation from '../components/SidebarNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
    {/* Navbar (left) */}
      <SidebarNavigation/>

    {/* Page Content (right) */}
      <div className="page-content">
        {children}
      </div>
      

    </div>
  );
};

export default Layout;
