import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        // Mock login - in real app, this would call an API
        const userData = {
            email: email,
            name: email.split('@')[0], // Use email prefix as name
            id: Date.now()
        };

        login(userData);
        console.log('Login successful:', userData);
        navigate('/');
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #000000 0%, #1a0b2e 50%, #000000 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                top: '-200px',
                right: '-200px',
                animation: 'pulse 4s ease-in-out infinite'
            }}></div>
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                bottom: '-150px',
                left: '-150px',
                animation: 'pulse 5s ease-in-out infinite'
            }}></div>

            <div style={{
                maxWidth: '480px',
                width: '100%',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Card */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(138, 43, 226, 0.3)',
                    borderRadius: '24px',
                    padding: '48px',
                    boxShadow: '0 20px 60px rgba(138, 43, 226, 0.3)'
                }}>
                    {/* Logo/Title */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            background: 'linear-gradient(45deg, var(--primary-color), #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '8px'
                        }}>
                            Welcome Back
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                            Sign in to continue to MovieTicket
                        </p>
                    </div>

                    <form onSubmit={handleLogin}>
                        {/* Email Field */}
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{
                                display: 'block',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '8px'
                            }}>
                                Email Address
                            </label>
                            <div style={{ position: 'relative' }}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--primary-color)',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your email"
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px 14px 48px',
                                        backgroundColor: 'rgba(138, 43, 226, 0.05)',
                                        border: '2px solid rgba(138, 43, 226, 0.2)',
                                        borderRadius: '12px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--primary-color)';
                                        e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(138, 43, 226, 0.2)';
                                        e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.05)';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{
                                display: 'block',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '8px'
                            }}>
                                Password
                            </label>
                            <div style={{ position: 'relative' }}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--primary-color)',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Enter your password"
                                    style={{
                                        width: '100%',
                                        padding: '14px 48px 14px 48px',
                                        backgroundColor: 'rgba(138, 43, 226, 0.05)',
                                        border: '2px solid rgba(138, 43, 226, 0.2)',
                                        borderRadius: '12px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--primary-color)';
                                        e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(138, 43, 226, 0.2)';
                                        e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.05)';
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--text-secondary)',
                                        cursor: 'pointer',
                                        padding: 0
                                    }}
                                >
                                    {showPassword ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '32px'
                        }}>
                            <label style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                cursor: 'pointer'
                            }}>
                                <input
                                    type="checkbox"
                                    style={{
                                        width: '18px',
                                        height: '18px',
                                        accentColor: 'var(--primary-color)',
                                        cursor: 'pointer'
                                    }}
                                />
                                Remember me
                            </label>
                            <Link
                                to="/forgot-password"
                                style={{
                                    color: 'var(--primary-color)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    transition: 'opacity 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                                onMouseLeave={(e) => e.target.style.opacity = '1'}
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: 'var(--primary-color)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                boxShadow: '0 8px 24px rgba(138, 43, 226, 0.4)',
                                marginBottom: '24px'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 12px 32px rgba(138, 43, 226, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 8px 24px rgba(138, 43, 226, 0.4)';
                            }}
                        >
                            Sign In
                        </button>

                        {/* Register Link */}
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                Don't have an account?{' '}
                                <Link
                                    to="/register"
                                    style={{
                                        color: 'var(--primary-color)',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        transition: 'opacity 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                                >
                                    Register here
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

            {/* Animation */}
            <style>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
            `}</style>
        </div>
    );
};

export default Login;
