import React from 'react';
import { Link } from 'react-router-dom';

// Home Page
// Landing page for the application
const Home = () => {
    return (
        <div className="container text-center mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to BOOK & GO</h1>
                <p className="lead">Your one-stop destination for movie tickets.</p>
                <hr className="my-4" />
                <p>Browse the latest movies and book your seats now!</p>
                <Link className="btn btn-primary btn-lg" to="/movies" role="button">Browse Movies</Link>
            </div>
        </div>
    );
};

export default Home;
