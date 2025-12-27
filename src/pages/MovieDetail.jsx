import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Movie Detail Page
// Shows movie info and showtimes
const MovieDetail = () => {
    const { id } = useParams();

    return (
        <div className="container mt-4">
            <h2>Movie Details (ID: {id})</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src="https://via.placeholder.com/300" className="img-fluid" alt="Movie Poster" />
                </div>
                <div className="col-md-8">
                    <h3>Movie Title</h3>
                    <p><strong>Genre:</strong> Action</p>
                    <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <hr />
                    <h4>Showtimes</h4>
                    <div className="d-flex gap-2">
                        <Link to={`/book/${id}/10:00`} className="btn btn-outline-primary">10:00 AM</Link>
                        <Link to={`/book/${id}/13:00`} className="btn btn-outline-primary">01:00 PM</Link>
                        <Link to={`/book/${id}/16:00`} className="btn btn-outline-primary">04:00 PM</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
