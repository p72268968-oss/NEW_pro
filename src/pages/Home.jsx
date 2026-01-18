import React from 'react';
import { Link } from 'react-router-dom';

// Home Page
// Landing page for the application
const Home = () => {
    return (
        <div className="container-fluid p-0" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}>
            {/* Hero Section */}
            <div className="d-flex flex-column align-items-center justify-content-center"
                style={{
                    minHeight: '100vh',
                    backgroundImage: 'radial-gradient(circle at center, #1a0b2e 0%, #000000 70%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>

                {/* Animated Background Elements */}
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

                <div className="text-center p-5 position-relative" style={{ zIndex: 2 }}>
                    <h1 className="display-1 fw-bold mb-4" style={{
                        background: 'linear-gradient(45deg, #fff, var(--primary-color))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 'clamp(3rem, 10vw, 6rem)'
                    }}>
                        BOOK & GO
                    </h1>
                    <p className="lead mb-5 fs-3" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Your premium destination for cinematic experiences. Book tickets instantly and enjoy the magic of movies.
                    </p>

                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/movies" className="btn btn-lg px-5 py-3 fw-bold" style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            boxShadow: '0 0 20px rgba(138, 43, 226, 0.5)',
                            transition: 'all 0.3s'
                        }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.8)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.5)';
                            }}
                        >
                            Browse Movies
                        </Link>

                        <Link to="/register" className="btn btn-lg px-5 py-3 fw-bold" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid var(--primary-color)',
                            borderRadius: '50px',
                            transition: 'all 0.3s'
                        }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.2)';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container py-5" style={{ marginTop: '-50px' }}>
                <h2 className="text-center mb-5 fw-bold" style={{
                    color: 'var(--primary-color)',
                    fontSize: '2.5rem'
                }}>
                    Why Choose Us?
                </h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4" style={{
                            backgroundColor: 'rgba(138, 43, 226, 0.05)',
                            border: '1px solid rgba(138, 43, 226, 0.2)',
                            borderRadius: '20px',
                            transition: 'all 0.3s'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(138, 43, 226, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div className="mb-3">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--primary-color)' }}>
                                    <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                                </svg>
                            </div>
                            <h4 className="mb-3" style={{ color: 'var(--primary-color)' }}>Latest Movies</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Access the newest blockbusters and exclusive premieres as soon as they release.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4" style={{
                            backgroundColor: 'rgba(138, 43, 226, 0.05)',
                            border: '1px solid rgba(138, 43, 226, 0.2)',
                            borderRadius: '20px',
                            transition: 'all 0.3s'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(138, 43, 226, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div className="mb-3">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--primary-color)' }}>
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                            </div>
                            <h4 className="mb-3" style={{ color: 'var(--primary-color)' }}>Instant Booking</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Book your tickets in seconds with our streamlined, hassle-free booking process.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4" style={{
                            backgroundColor: 'rgba(138, 43, 226, 0.05)',
                            border: '1px solid rgba(138, 43, 226, 0.2)',
                            borderRadius: '20px',
                            transition: 'all 0.3s'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(138, 43, 226, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div className="mb-3">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--primary-color)' }}>
                                    <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v16.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h6.9c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V3.6c0-.4-.2-.8-.5-1.1-.3-.3-.7-.5-1.1-.5z" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                            </div>
                            <h4 className="mb-3" style={{ color: 'var(--primary-color)' }}>Best Seats</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Choose from premium seating options and get the best view for your movie experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-5" style={{
                background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                borderTop: '1px solid rgba(138, 43, 226, 0.3)',
                borderBottom: '1px solid rgba(138, 43, 226, 0.3)'
            }}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <h2 className="display-4 fw-bold" style={{ color: 'var(--primary-color)' }}>500+</h2>
                            <p className="fs-5" style={{ color: 'var(--text-secondary)' }}>Movies Available</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h2 className="display-4 fw-bold" style={{ color: 'var(--primary-color)' }}>50K+</h2>
                            <p className="fs-5" style={{ color: 'var(--text-secondary)' }}>Happy Customers</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h2 className="display-4 fw-bold" style={{ color: 'var(--primary-color)' }}>100+</h2>
                            <p className="fs-5" style={{ color: 'var(--text-secondary)' }}>Theater Partners</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container py-5 my-5">
                <div className="text-center p-5" style={{
                    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.05) 100%)',
                    borderRadius: '30px',
                    border: '1px solid rgba(138, 43, 226, 0.3)'
                }}>
                    <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                        Ready for Your Next Movie?
                    </h2>
                    <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                        Join thousands of movie lovers and start booking today!
                    </p>
                    <Link to="/register" className="btn btn-lg px-5 py-3 fw-bold" style={{
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        boxShadow: '0 0 20px rgba(138, 43, 226, 0.5)',
                        transition: 'all 0.3s'
                    }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.8)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.5)';
                        }}
                    >
                        Get Started Now
                    </Link>
                </div>
            </div>

            {/* Add keyframe animation */}
            <style>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
            `}</style>
        </div>
    );
};

export default Home;
