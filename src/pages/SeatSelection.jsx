import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockMovies } from '../services/mockData';

// Seat Selection Page
// Premium cinema seat selection experience
const SeatSelection = () => {
    const { id, time } = useParams();
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Get movie details
    const movie = mockMovies.find(m => m.id === parseInt(id));

    // Mock seat layout (rows A-H, 1-12)
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const seatsPerRow = 12;

    // Mock some occupied seats
    const occupiedSeats = ['A5', 'A6', 'B3', 'B7', 'C8', 'D4', 'D5', 'D6', 'E9', 'F2', 'F10'];

    // Seat pricing based on row
    const getSeatPrice = (row) => {
        if (['A', 'B'].includes(row)) return 150; // Front
        if (['C', 'D', 'E'].includes(row)) return 200; // Middle (Premium)
        return 180; // Back
    };

    const getSeatType = (row) => {
        if (['A', 'B'].includes(row)) return 'Standard';
        if (['C', 'D', 'E'].includes(row)) return 'Premium';
        return 'Standard';
    };

    const toggleSeat = (seatId, row) => {
        if (occupiedSeats.includes(seatId)) return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    // Calculate total price
    const totalPrice = useMemo(() => {
        return selectedSeats.reduce((total, seatId) => {
            const row = seatId[0];
            return total + getSeatPrice(row);
        }, 0);
    }, [selectedSeats]);

    const handleProceedToPay = () => {
        if (selectedSeats.length === 0) return;
        // Navigate to payment or show confirmation
        alert(`Booking confirmed!\nSeats: ${selectedSeats.join(', ')}\nTotal: ₹${totalPrice}`);
    };

    return (
        <div style={{
            backgroundColor: 'var(--bg-color)',
            minHeight: '100vh',
            color: 'var(--text-primary)',
            paddingTop: '20px',
            paddingBottom: '60px'
        }}>
            <div className="container">
                {/* Movie Info Header */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(138, 43, 226, 0.05) 100%)',
                            borderRadius: '20px',
                            padding: '24px',
                            border: '1px solid rgba(138, 43, 226, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            flexWrap: 'wrap'
                        }}>
                            {movie && (
                                <>
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        style={{
                                            width: '80px',
                                            height: '120px',
                                            objectFit: 'cover',
                                            borderRadius: '12px',
                                            border: '2px solid var(--primary-color)'
                                        }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <h2 style={{
                                            color: 'var(--text-primary)',
                                            marginBottom: '8px',
                                            fontSize: '1.8rem',
                                            fontWeight: '700'
                                        }}>
                                            {movie.title}
                                        </h2>
                                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                                            <span style={{
                                                backgroundColor: 'rgba(138, 43, 226, 0.2)',
                                                color: 'var(--primary-color)',
                                                padding: '6px 14px',
                                                borderRadius: '8px',
                                                fontSize: '0.9rem',
                                                fontWeight: '600'
                                            }}>
                                                {movie.genre}
                                            </span>
                                            <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                {time}
                                            </span>
                                            {movie.duration && (
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    {movie.duration}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Screen */}
                <div className="text-center mb-5">
                    <div style={{
                        background: 'linear-gradient(180deg, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0.1) 100%)',
                        padding: '16px',
                        borderRadius: '12px 12px 60px 60px',
                        maxWidth: '700px',
                        margin: '0 auto',
                        border: '2px solid rgba(138, 43, 226, 0.5)',
                        boxShadow: '0 8px 32px rgba(138, 43, 226, 0.3)',
                        position: 'relative'
                    }}>
                        <div style={{
                            color: 'var(--text-primary)',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            letterSpacing: '3px'
                        }}>
                            SCREEN
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '0',
                            height: '0',
                            borderLeft: '15px solid transparent',
                            borderRight: '15px solid transparent',
                            borderTop: '10px solid rgba(138, 43, 226, 0.3)'
                        }}></div>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '12px' }}>
                        All eyes this way please!
                    </p>
                </div>

                {/* Seat Grid */}
                <div className="d-flex flex-column align-items-center mb-4">
                    {rows.map((row, rowIndex) => (
                        <div key={row} className="d-flex gap-2 mb-3 align-items-center">
                            {/* Row Label */}
                            <div style={{
                                width: '30px',
                                textAlign: 'center',
                                color: 'var(--primary-color)',
                                fontWeight: '700',
                                fontSize: '1rem'
                            }}>
                                {row}
                            </div>

                            {/* Seats */}
                            {Array.from({ length: seatsPerRow }, (_, i) => {
                                const seatId = `${row}${i + 1}`;
                                const isSelected = selectedSeats.includes(seatId);
                                const isOccupied = occupiedSeats.includes(seatId);
                                const seatType = getSeatType(row);

                                // Add aisle gap after seat 6
                                const marginLeft = i === 6 ? '24px' : '0';

                                return (
                                    <button
                                        key={seatId}
                                        onClick={() => toggleSeat(seatId, row)}
                                        disabled={isOccupied}
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '8px 8px 2px 2px',
                                            border: isSelected
                                                ? '2px solid var(--primary-color)'
                                                : isOccupied
                                                    ? '2px solid rgba(255, 255, 255, 0.1)'
                                                    : '2px solid rgba(138, 43, 226, 0.3)',
                                            backgroundColor: isSelected
                                                ? 'var(--primary-color)'
                                                : isOccupied
                                                    ? 'rgba(100, 100, 100, 0.3)'
                                                    : 'rgba(138, 43, 226, 0.1)',
                                            color: isSelected
                                                ? 'white'
                                                : isOccupied
                                                    ? 'rgba(255, 255, 255, 0.3)'
                                                    : 'var(--text-secondary)',
                                            cursor: isOccupied ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.2s ease',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            marginLeft: marginLeft,
                                            position: 'relative',
                                            boxShadow: isSelected ? '0 4px 15px rgba(138, 43, 226, 0.5)' : 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isOccupied && !isSelected) {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                                e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.3)';
                                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isOccupied && !isSelected) {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                                e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)';
                                            }
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                );
                            })}

                            {/* Row Label (right side) */}
                            <div style={{
                                width: '30px',
                                textAlign: 'center',
                                color: 'var(--primary-color)',
                                fontWeight: '700',
                                fontSize: '1rem'
                            }}>
                                {row}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="d-flex justify-content-center gap-4 mb-5 flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                        <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(138, 43, 226, 0.1)',
                            border: '2px solid rgba(138, 43, 226, 0.3)'
                        }}></div>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Available</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '4px',
                            backgroundColor: 'var(--primary-color)',
                            border: '2px solid var(--primary-color)'
                        }}></div>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Selected</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(100, 100, 100, 0.3)',
                            border: '2px solid rgba(255, 255, 255, 0.1)'
                        }}></div>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Occupied</span>
                    </div>
                </div>

                {/* Booking Summary */}
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(138, 43, 226, 0.05) 100%)',
                            borderRadius: '20px',
                            padding: '32px',
                            border: '1px solid rgba(138, 43, 226, 0.3)'
                        }}>
                            <h4 style={{
                                color: 'var(--primary-color)',
                                marginBottom: '20px',
                                fontSize: '1.5rem',
                                fontWeight: '700'
                            }}>
                                Booking Summary
                            </h4>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '12px',
                                    paddingBottom: '12px',
                                    borderBottom: '1px solid rgba(138, 43, 226, 0.2)'
                                }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Selected Seats:</span>
                                    <span style={{
                                        color: 'var(--text-primary)',
                                        fontWeight: '600',
                                        fontSize: '1.1rem'
                                    }}>
                                        {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '12px',
                                    paddingBottom: '12px',
                                    borderBottom: '1px solid rgba(138, 43, 226, 0.2)'
                                }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Number of Seats:</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                                        {selectedSeats.length}
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginTop: '20px'
                                }}>
                                    <span style={{
                                        color: 'var(--text-primary)',
                                        fontSize: '1.3rem',
                                        fontWeight: '700'
                                    }}>
                                        Total Amount:
                                    </span>
                                    <span style={{
                                        color: 'var(--primary-color)',
                                        fontSize: '1.8rem',
                                        fontWeight: '700'
                                    }}>
                                        ₹{totalPrice}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={handleProceedToPay}
                                disabled={selectedSeats.length === 0}
                                style={{
                                    width: '100%',
                                    backgroundColor: selectedSeats.length === 0
                                        ? 'rgba(138, 43, 226, 0.3)'
                                        : 'var(--primary-color)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    cursor: selectedSeats.length === 0 ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s',
                                    boxShadow: selectedSeats.length === 0
                                        ? 'none'
                                        : '0 8px 24px rgba(138, 43, 226, 0.4)'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedSeats.length > 0) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(138, 43, 226, 0.6)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedSeats.length > 0) {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(138, 43, 226, 0.4)';
                                    }
                                }}
                            >
                                {selectedSeats.length === 0 ? 'Select Seats to Continue' : 'Proceed to Payment'}
                            </button>

                            <button
                                onClick={() => navigate(-1)}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    color: 'var(--primary-color)',
                                    border: '2px solid var(--primary-color)',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    marginTop: '12px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                Back to Movie Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
