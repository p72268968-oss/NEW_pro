import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockMovies } from '../services/mockData';

// MovieList Page
// Displays a list of currently showing movies with filtering
const MovieList = () => {
    const [selectedGenre, setSelectedGenre] = useState('All');

    // Extract unique genres from mockMovies
    const genres = useMemo(() => {
        const allGenres = mockMovies.map(movie => movie.genre);
        // Split genres if they are comma-separated or slash-separated (e.g., "Action/Sci-Fi")
        const splitGenres = allGenres.flatMap(g => g.split('/').map(s => s.trim()));
        return ['All', ...new Set(splitGenres)];
    }, []);

    // Filter movies based on selected genre
    const filteredMovies = useMemo(() => {
        if (selectedGenre === 'All') return mockMovies;
        return mockMovies.filter(movie => movie.genre.includes(selectedGenre));
    }, [selectedGenre]);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Now Showing</h2>
                <div className="d-flex align-items-center">
                    <label htmlFor="genreFilter" className="me-2 fw-bold">Filter by Genre:</label>
                    <select
                        id="genreFilter"
                        className="form-select w-auto"
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        {genres.map(genre => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredMovies.length === 0 ? (
                <div className="alert alert-info">No movies found for the selected genre.</div>
            ) : (
                <div className="row">
                    {filteredMovies.map(movie => (
                        <div className="col-md-4 mb-4" key={movie.id}>
                            <div className="card h-100 shadow-sm">
                                <img src={movie.image} className="card-img-top" alt={movie.title} style={{ height: '400px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text text-muted">{movie.genre}</p>
                                    <p className="card-text flex-grow-1">{movie.description.substring(0, 100)}...</p>
                                    <Link to={`/movies/${movie.id}`} className="btn btn-primary mt-auto">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieList;
