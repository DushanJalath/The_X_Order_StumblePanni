import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/sidebarNavigation.css';

interface NavItem {
  name: string;
  icon: string;
  path: string; // Add a path property for navigation
}

const Icon: React.FC<{ name: string }> = ({ name }) => (
  <span className="icon">{name}</span>
);

const SidebarNavigation: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Visa Applications');
  const [isLogoutActive, setIsLogoutActive] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize navigate

  const navItems: NavItem[] = [
    { name: 'Visa Applications', icon: '📄', path: '/VisaApplicationPage' },
    { name: 'Visa Applications Analytics', icon: '📊', path: '/VisaAnalyticsPage' },
  ];

  const handleLogout = (): void => {
    setIsLogoutActive(true);
    console.log('Logout clicked');
    setTimeout(() => setIsLogoutActive(false), 300);
  };

  const handleNavigation = (path: string, name: string) => {
    setSelectedItem(name);
    navigate(path); // Use navigate to change the page
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="avatar">
          <span>👤</span>
        </div>
        <span className="profile-title">Visa Officer</span>
        <h2 className="profile-name">Mihin Premarathna</h2>
      </div>

      <div className="divider"></div>

      <nav className="nav-section">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <button
                onClick={() => handleNavigation(item.path, item.name)} // Call handleNavigation on click
                className={`nav-button ${selectedItem === item.name ? 'active' : ''}`}
              >
                <Icon name={item.icon} />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="logout-section">
        <button
          onClick={handleLogout}
          className={`logout-button ${isLogoutActive ? 'active' : ''}`}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SidebarNavigation;
