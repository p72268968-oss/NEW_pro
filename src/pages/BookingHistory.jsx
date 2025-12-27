import React from 'react';

// Booking History Page
// Shows past bookings for the user
const BookingHistory = () => {
    return (
        <div className="container mt-4">
            <h2>My Bookings</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Movie</th>
                        <th>Date & Time</th>
                        <th>Seats</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#12345</td>
                        <td>Movie 1</td>
                        <td>2023-10-25 10:00 AM</td>
                        <td>A1, A2</td>
                        <td><span className="badge bg-success">Confirmed</span></td>
                    </tr>
                    <tr>
                        <td>#12346</td>
                        <td>Movie 2</td>
                        <td>2023-10-26 01:00 PM</td>
                        <td>C4</td>
                        <td><span className="badge bg-secondary">Past</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookingHistory;
