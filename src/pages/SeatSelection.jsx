import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Seat Selection Page
// Grid layout for selecting seats
const SeatSelection = () => {
    const { id, time } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Mock seat layout (rows A-E, 1-8)
    const rows = ['A', 'B', 'C', 'D', 'E'];
    const seatsPerRow = 8;

    const toggleSeat = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    return (
        <div className="container mt-4 text-center">
            <h2>Select Seats</h2>
            <p>Movie ID: {id} | Time: {time}</p>

            <div className="d-flex justify-content-center mb-4">
                <div className="bg-secondary text-white p-2 w-50">SCREEN</div>
            </div>

            <div className="d-flex flex-column align-items-center">
                {rows.map(row => (
                    <div key={row} className="d-flex gap-2 mb-2">
                        {Array.from({ length: seatsPerRow }, (_, i) => {
                            const seatId = `${row}${i + 1}`;
                            const isSelected = selectedSeats.includes(seatId);
                            return (
                                <button
                                    key={seatId}
                                    className={`btn ${isSelected ? 'btn-success' : 'btn-outline-secondary'}`}
                                    onClick={() => toggleSeat(seatId)}
                                    style={{ width: '40px' }}
                                >
                                    {seatId}
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
                <button className="btn btn-primary" disabled={selectedSeats.length === 0}>
                    Proceed to Pay
                </button>
            </div>
        </div>
    );
};

export default SeatSelection;
