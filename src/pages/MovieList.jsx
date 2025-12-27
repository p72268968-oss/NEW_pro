import React from 'react';
import { Link } from 'react-router-dom';

// MovieList Page
// Displays a list of currently showing movies
const MovieList = () => {
    // Mock data for movies
    const movies = [
        { id: 1, title: 'Movie 1', genre: 'Action', image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Movie 2', genre: 'Comedy', image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Movie 3', genre: 'Drama', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="container mt-4">
            <h2>Now Showing</h2>
            <div className="row">
                {movies.map(movie => (
                    <div className="col-md-4 mb-4" key={movie.id}>
                        <div className="card">
                            <img src={movie.image} className="card-img-top" alt={movie.title} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">Genre: {movie.genre}</p>
                                <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
