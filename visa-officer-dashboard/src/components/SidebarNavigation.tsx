import React, { useState } from 'react';
import '../styles/sidebarNavigation.css'; // Make sure to import the CSS file

interface NavItem {
  name: string;
  icon: string;
}

const Icon: React.FC<{ name: string }> = ({ name }) => (
  <span className="icon">{name}</span>
);

const SidebarNavigation: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Visa Applications');
  const [isLogoutActive, setIsLogoutActive] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'Visa Applications', icon: '📄' },
    { name: 'Visa Applications Analytics', icon: '📊' },
  ];

  const handleLogout = (): void => {
    setIsLogoutActive(true);
    console.log('Logout clicked');
    setTimeout(() => setIsLogoutActive(false), 300);
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
                onClick={() => setSelectedItem(item.name)}
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