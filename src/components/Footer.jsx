import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Footer = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Define links based on authentication status
    const quickLinks = isAuthenticated
        ? [
            { to: '/', label: 'Home' },
            { to: '/movies', label: 'Movies' },
            { to: '/history', label: 'My Bookings' },
            { action: handleLogout, label: 'Logout' }
        ]
        : [
            { to: '/', label: 'Home' },
            { to: '/movies', label: 'Movies' },
            { to: '/login', label: 'Login' },
            { to: '/register', label: 'Register' }
        ];

    return (
        <footer style={{
            background: 'linear-gradient(135deg, rgba(26, 11, 46, 0.95) 0%, rgba(0, 0, 0, 0.98) 50%, rgba(26, 11, 46, 0.95) 100%)',
            borderTop: '1px solid rgba(138, 43, 226, 0.3)',
            marginTop: 'auto',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative gradient overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--primary-color) 0%, rgba(138, 43, 226, 0.5) 50%, var(--primary-color) 100%)',
                boxShadow: '0 0 20px rgba(138, 43, 226, 0.5)'
            }}></div>

            {/* Background glow effects */}
            <div style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(138, 43, 226, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                top: '-100px',
                right: '10%',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(138, 43, 226, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                bottom: '-80px',
                left: '15%',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ paddingTop: '30px', paddingBottom: '20px' }}>
                <div className="row">
                    {/* Brand Section */}
                    <div className="col-md-4 mb-4">
                        <h3 style={{
                            color: 'var(--primary-color)',
                            fontWeight: '700',
                            fontSize: '1.8rem',
                            marginBottom: '16px',
                            background: 'linear-gradient(45deg, var(--primary-color), #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            MovieTicket
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            marginBottom: '20px'
                        }}>
                            Your one-stop destination for booking movie tickets. Experience the magic of cinema with us.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--primary-color)' }}>
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                support@movieticket.com
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 style={{
                            color: 'var(--text-primary)',
                            fontWeight: '600',
                            fontSize: '1.2rem',
                            marginBottom: '20px'
                        }}>
                            Quick Links
                        </h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {quickLinks.map((link, index) => (
                                <li key={index} style={{ marginBottom: '12px' }}>
                                    {link.action ? (
                                        <button
                                            onClick={link.action}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                padding: 0,
                                                color: 'var(--text-secondary)',
                                                textDecoration: 'none',
                                                fontSize: '0.95rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                transition: 'all 0.3s',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'var(--primary-color)';
                                                e.currentTarget.style.paddingLeft = '8px';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--text-secondary)';
                                                e.currentTarget.style.paddingLeft = '0';
                                            }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                            {link.label}
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.to}
                                            style={{
                                                color: 'var(--text-secondary)',
                                                textDecoration: 'none',
                                                fontSize: '0.95rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'var(--primary-color)';
                                                e.currentTarget.style.paddingLeft = '8px';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--text-secondary)';
                                                e.currentTarget.style.paddingLeft = '0';
                                            }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div className="col-md-4 mb-4">
                        <h5 style={{
                            color: 'var(--text-primary)',
                            fontWeight: '600',
                            fontSize: '1.2rem',
                            marginBottom: '20px'
                        }}>
                            Connect With Us
                        </h5>
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                            {/* Facebook */}
                            <a
                                href="#"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                    border: '1px solid rgba(138, 43, 226, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    color: 'var(--text-primary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Twitter */}
                            <a
                                href="#"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                    border: '1px solid rgba(138, 43, 226, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    color: 'var(--text-primary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                    border: '1px solid rgba(138, 43, 226, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    color: 'var(--text-primary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a
                                href="#"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                    border: '1px solid rgba(138, 43, 226, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    color: 'var(--text-primary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>

                        <div style={{
                            backgroundColor: 'rgba(138, 43, 226, 0.05)',
                            border: '1px solid rgba(138, 43, 226, 0.2)',
                            borderRadius: '12px',
                            padding: '16px',
                            marginTop: '20px'
                        }}>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.85rem',
                                marginBottom: '8px',
                                fontWeight: '600'
                            }}>
                                Download Our App
                            </p>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <a href="#" style={{
                                    flex: 1,
                                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                    border: '1px solid rgba(138, 43, 226, 0.3)',
                                    borderRadius: '8px',
                                    padding: '8px 12px',
                                    textDecoration: 'none',
                                    color: 'var(--text-primary)',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    }}
                                >
                                    App Store
                                </a>
                                <a href="#" style={{
                                    flex: 1,
                                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                    border: '1px solid rgba(138, 43, 226, 0.3)',
                                    borderRadius: '8px',
                                    padding: '8px 12px',
                                    textDecoration: 'none',
                                    color: 'var(--text-primary)',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    }}
                                >
                                    Play Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div style={{
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(138, 43, 226, 0.2)',
                    textAlign: 'center'
                }}>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        marginBottom: '8px'
                    }}>
                        © {new Date().getFullYear()} MovieTicket. All rights reserved.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        flexWrap: 'wrap',
                        marginTop: '12px'
                    }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Help Center'].map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.8rem',
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--primary-color)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
