import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(138, 43, 226, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: 'var(--primary-color)', fontSize: '1.5rem', textShadow: '0 0 10px rgba(138, 43, 226, 0.6)' }}>
          MovieTicket
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ borderColor: 'var(--primary-color)' }}>
          <span className="navbar-toggler-icon" style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(138, 43, 226, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/" style={{ color: 'white', transition: 'color 0.3s' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/movies')}`} to="/movies" style={{ color: 'white', transition: 'color 0.3s' }}>
                Movies
              </Link>
            </li>

            {/* Show Login/Register only when NOT logged in */}
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/login')}`} to="/login" style={{ color: 'white', transition: 'color 0.3s' }}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="btn btn-primary" style={{
                    backgroundColor: 'var(--primary-color)',
                    border: 'none',
                    boxShadow: '0 0 10px rgba(138, 43, 226, 0.4)'
                  }}>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              /* Show user info and Logout when logged in */
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/history')}`} to="/history" style={{ color: 'white', transition: 'color 0.3s' }}>
                    My Bookings
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <span style={{
                    color: 'var(--text-secondary)',
                    marginRight: '12px',
                    fontSize: '0.9rem'
                  }}>
                    Welcome, {user?.name || user?.email || 'User'}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger"
                    style={{
                      borderColor: 'var(--primary-color)',
                      color: 'var(--primary-color)',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--primary-color)';
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
