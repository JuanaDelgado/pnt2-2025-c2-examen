'use client';

import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './navbar.css';

// Importar los componentes modulares
import Logo from './Logo';
import Menu from './Menu';
import Notifications from './Notifications';
import CurrentUser from './CurrentUser';
import AuthButtons from './AuthButtons';

export default function Navbar() {
  const { currentUser, logout, loading } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationIndicator, setNotificationIndicator] = useState(true);

  if (loading) {
    return (
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <Logo />
            <Menu />
          </div>
          <div className="navbar-right">
            <span>Cargando...</span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo and Menu */}
        <div className="navbar-left">
          <Logo />
          {currentUser && <Menu />}
        </div>

        {/* User Menu or Auth Buttons */}
        <div className="navbar-right">
          {currentUser ? (
            <>
              <Notifications notificationIndicator={notificationIndicator} />
              <CurrentUser currentUser={currentUser} logout={logout} />
            </>
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </nav>
  );
}