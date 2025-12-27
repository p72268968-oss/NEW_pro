import React from 'react';

// Admin Dashboard
// Overview for admin users
const AdminDashboard = () => {
    return (
        <div className="container mt-4">
            <h2>Admin Dashboard</h2>
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="list-group">
                        <button className="list-group-item list-group-item-action active">Dashboard</button>
                        <button className="list-group-item list-group-item-action">Manage Movies</button>
                        <button className="list-group-item list-group-item-action">Manage Cinemas</button>
                        <button className="list-group-item list-group-item-action">View Bookings</button>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Welcome Admin</h5>
                            <p className="card-text">Select an option from the sidebar to manage the system.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
