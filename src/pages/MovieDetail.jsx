import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockMovies, mockShowtimes, mockMalls } from '../services/mockData';

// Movie Detail Page
// Shows movie info with mall and showtime selection
const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedMall, setSelectedMall] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showMessage, setShowMessage] = useState('');

    // Find the movie from mock data
    const movie = mockMovies.find(m => m.id === parseInt(id));
    const movieShowtimes = mockShowtimes[id] || {};

    // Fallback if movie not found
    if (!movie) {
        return (
            <div className="container mt-5 text-center">
                <h2 style={{ color: 'var(--primary-color)' }}>Movie Not Found</h2>
                <Link to="/movies" className="btn btn-primary mt-3">Back to Movies</Link>
            </div>
        );
    }

    // Get available malls for this movie
    const availableMalls = mockMalls.filter(mall => movieShowtimes[mall.id]);

    const handleTimeSelect = (time, availableSeats) => {
        setSelectedTime(time);
        setShowMessage('');

        if (availableSeats === 0) {
            setShowMessage('Sorry! This show is housefull. Please select another time slot.');
        }
    };

    const handleProceedToBooking = () => {
        if (!selectedMall || !selectedTime) {
            setShowMessage('Please select both mall and showtime to proceed.');
            return;
        }

        const showtimes = movieShowtimes[selectedMall];
        const selectedShow = showtimes.find(s => s.time === selectedTime);

        if (selectedShow.availableSeats === 0) {
            setShowMessage('Sorry! This show is housefull. Please select another time slot.');
            return;
        }

        // Navigate to seat selection
        navigate(`/book/${id}/${selectedTime}?mall=${selectedMall}`);
    };

    return (
        <div className="container-fluid p-0" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-primary)' }}>
            {/* Backdrop with Overlay */}
            <div style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), var(--bg-color) 95%), url(${movie.backdrop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '25vh',
                position: 'relative'
            }}>
                <div className="container h-100 d-flex align-items-end pb-5">
                    {/* Content overlaid on backdrop */}
                </div>
            </div>

            <div className="container" style={{ marginTop: '-100px', position: 'relative', zIndex: 2 }}>
                <div className="row">
                    {/* Poster */}
                    <div className="col-md-4 mb-4">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="img-fluid rounded shadow-lg"
                            style={{
                                border: '4px solid rgba(138, 43, 226, 0.3)',
                                maxHeight: '600px',
                                width: '100%',
                                objectFit: 'cover',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
                                borderRadius: '16px'
                            }}
                        />
                    </div>

                    {/* Movie Info */}
                    <div className="col-md-8 pt-5">
                        <h1 className="display-3 fw-bold mb-3" style={{
                            color: 'var(--text-primary)',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}>
                            {movie.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="d-flex flex-wrap gap-3 mb-4">
                            <span className="badge px-3 py-2" style={{
                                backgroundColor: 'rgba(138, 43, 226, 0.2)',
                                border: '1px solid var(--primary-color)',
                                color: 'var(--primary-color)',
                                fontSize: '1rem'
                            }}>
                                {movie.genre}
                            </span>
                            {movie.rating && (
                                <span className="badge px-3 py-2" style={{
                                    backgroundColor: 'rgba(255, 193, 7, 0.2)',
                                    border: '1px solid #ffc107',
                                    color: '#ffc107',
                                    fontSize: '1rem'
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    {movie.rating}/10
                                </span>
                            )}
                            {movie.duration && (
                                <span className="badge px-3 py-2" style={{
                                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                    border: '1px solid rgba(138, 43, 226, 0.5)',
                                    color: 'var(--text-secondary)',
                                    fontSize: '1rem'
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    {movie.duration}
                                </span>
                            )}
                            {movie.releaseYear && (
                                <span className="badge px-3 py-2" style={{
                                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                    border: '1px solid rgba(138, 43, 226, 0.5)',
                                    color: 'var(--text-secondary)',
                                    fontSize: '1rem'
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {movie.releaseYear}
                                </span>
                            )}
                        </div>

                        <h4 className="mb-3" style={{ color: 'var(--primary-color)' }}>Synopsis</h4>
                        <p className="lead mb-5" style={{
                            color: 'var(--text-secondary)',
                            fontSize: '1.1rem',
                            lineHeight: '1.8'
                        }}>
                            {movie.description}
                        </p>

                        {/* Mall Selection */}
                        <h3 className="mb-4" style={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            Select Cinema
                        </h3>

                        {availableMalls.length > 0 ? (
                            <div className="mb-4">
                                <select
                                    className="form-select"
                                    value={selectedMall || ''}
                                    onChange={(e) => {
                                        setSelectedMall(e.target.value ? parseInt(e.target.value) : null);
                                        setSelectedTime(null);
                                        setShowMessage('');
                                    }}
                                    style={{
                                        backgroundColor: 'rgba(138, 43, 226, 0.1)',
                                        border: '2px solid rgba(138, 43, 226, 0.3)',
                                        borderRadius: '12px',
                                        padding: '14px 20px',
                                        fontSize: '1rem',
                                        color: 'var(--text-primary)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        backgroundImage: 'none'
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--primary-color)';
                                        e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.15)';
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)';
                                        e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                    }}
                                >
                                    <option value="" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}>
                                        -- Choose a Cinema --
                                    </option>
                                    {availableMalls.map(mall => (
                                        <option
                                            key={mall.id}
                                            value={mall.id}
                                            style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}
                                        >
                                            {mall.name} - {mall.location}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <p style={{ color: 'var(--text-secondary)' }}>No cinemas available for this movie.</p>
                        )}

                        {/* Showtime Selection */}
                        {selectedMall && (
                            <>
                                <h3 className="mb-4 mt-5" style={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                                    </svg>
                                    Select Showtime
                                </h3>

                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    {movieShowtimes[selectedMall]?.map((show, index) => {
                                        const isSelected = selectedTime === show.time;
                                        const isSoldOut = show.availableSeats === 0;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => handleTimeSelect(show.time, show.availableSeats)}
                                                disabled={isSoldOut}
                                                style={{
                                                    backgroundColor: isSelected
                                                        ? 'var(--primary-color)'
                                                        : isSoldOut
                                                            ? 'rgba(100, 100, 100, 0.2)'
                                                            : 'rgba(138, 43, 226, 0.1)',
                                                    border: isSelected
                                                        ? '2px solid var(--primary-color)'
                                                        : isSoldOut
                                                            ? '1px solid rgba(255, 255, 255, 0.1)'
                                                            : '1px solid rgba(138, 43, 226, 0.3)',
                                                    color: isSelected
                                                        ? '#fff'
                                                        : isSoldOut
                                                            ? 'rgba(255, 255, 255, 0.3)'
                                                            : 'var(--text-primary)',
                                                    minWidth: '140px',
                                                    padding: '14px 20px',
                                                    fontSize: '1rem',
                                                    fontWeight: '600',
                                                    boxShadow: isSelected
                                                        ? '0 4px 15px rgba(138, 43, 226, 0.4)'
                                                        : 'none',
                                                    transition: 'all 0.3s',
                                                    borderRadius: '10px',
                                                    cursor: isSoldOut ? 'not-allowed' : 'pointer',
                                                    position: 'relative',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: '4px'
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isSoldOut && !isSelected) {
                                                        e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.2)';
                                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!isSoldOut && !isSelected) {
                                                        e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                    }
                                                }}
                                            >
                                                <span>{show.time}</span>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    opacity: 0.8,
                                                    color: isSoldOut
                                                        ? '#ff4444'
                                                        : show.availableSeats < 20
                                                            ? '#ffc107'
                                                            : 'inherit'
                                                }}>
                                                    {isSoldOut
                                                        ? 'HOUSEFULL'
                                                        : `${show.availableSeats} seats`
                                                    }
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </>
                        )}

                        {/* Message Display */}
                        {showMessage && (
                            <div style={{
                                backgroundColor: showMessage.includes('housefull')
                                    ? 'rgba(255, 68, 68, 0.1)'
                                    : 'rgba(255, 193, 7, 0.1)',
                                border: showMessage.includes('housefull')
                                    ? '1px solid rgba(255, 68, 68, 0.3)'
                                    : '1px solid rgba(255, 193, 7, 0.3)',
                                color: showMessage.includes('housefull')
                                    ? '#ff4444'
                                    : '#ffc107',
                                padding: '16px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                <span>{showMessage}</span>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="mt-5 d-flex gap-3 flex-wrap">
                            <button
                                onClick={handleProceedToBooking}
                                disabled={!selectedMall || !selectedTime}
                                style={{
                                    backgroundColor: (!selectedMall || !selectedTime)
                                        ? 'rgba(138, 43, 226, 0.3)'
                                        : 'var(--primary-color)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '16px 40px',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    borderRadius: '12px',
                                    cursor: (!selectedMall || !selectedTime) ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s',
                                    boxShadow: (!selectedMall || !selectedTime)
                                        ? 'none'
                                        : '0 8px 24px rgba(138, 43, 226, 0.4)'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedMall && selectedTime) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(138, 43, 226, 0.6)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedMall && selectedTime) {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(138, 43, 226, 0.4)';
                                    }
                                }}
                            >
                                Book Tickets
                            </button>

                            <Link
                                to="/movies"
                                className="btn btn-outline-light btn-lg"
                                style={{
                                    borderColor: 'var(--primary-color)',
                                    color: 'var(--primary-color)',
                                    padding: '16px 40px',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s',
                                    textDecoration: 'none'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                                    <line x1="19" y1="12" x2="5" y2="12" />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                                Back to Movies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add some bottom padding */}
            <div style={{ height: '100px' }}></div>
        </div>
    );
};

export default MovieDetail;
