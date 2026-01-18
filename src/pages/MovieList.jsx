import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockMovies } from '../services/mockData';

// MovieList Page
// Displays a list of currently showing movies with filtering
const MovieList = () => {
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Extract unique genres from mockMovies
    const genres = useMemo(() => {
        const allGenres = mockMovies.map(movie => movie.genre);
        // Split genres if they are comma-separated or slash-separated (e.g., "Action/Sci-Fi")
        const splitGenres = allGenres.flatMap(g => g.split('/').map(s => s.trim()));
        return ['All', ...new Set(splitGenres)];
    }, []);

    // Filter movies based on selected genre and search query
    const filteredMovies = useMemo(() => {
        let movies = mockMovies;

        // Filter by genre
        if (selectedGenre !== 'All') {
            movies = movies.filter(movie => movie.genre.includes(selectedGenre));
        }

        // Filter by search query
        if (searchQuery.trim()) {
            movies = movies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return movies;
    }, [selectedGenre, searchQuery]);

    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="mb-4">
                <h2 style={{
                    color: 'var(--text-primary)',
                    fontWeight: '700',
                    marginBottom: '24px'
                }}>
                    Now Showing
                </h2>

                {/* Search and Filter Row */}
                <div className="row g-3">
                    {/* Search Bar */}
                    <div className="col-md-8">
                        <div style={{ position: 'relative' }}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                style={{
                                    position: 'absolute',
                                    left: '16px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--primary-color)',
                                    pointerEvents: 'none',
                                    zIndex: 1
                                }}
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search movies by title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '14px 48px 14px 48px',
                                    backgroundColor: 'rgba(138, 43, 226, 0.05)',
                                    border: '2px solid rgba(138, 43, 226, 0.2)',
                                    borderRadius: '12px',
                                    color: 'var(--text-primary)',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s',
                                    outline: 'none'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary-color)';
                                    e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(138, 43, 226, 0.2)';
                                    e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.05)';
                                }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--text-secondary)',
                                        cursor: 'pointer',
                                        padding: '4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'color 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Genre Filter */}
                    <div className="col-md-4">
                        <select
                            id="genreFilter"
                            className="form-select"
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                            style={{
                                padding: '14px 16px',
                                backgroundColor: 'rgba(138, 43, 226, 0.05)',
                                border: '2px solid rgba(138, 43, 226, 0.2)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                transition: 'all 0.3s',
                                outline: 'none',
                                cursor: 'pointer'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--primary-color)';
                                e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(138, 43, 226, 0.2)';
                                e.target.style.backgroundColor = 'rgba(138, 43, 226, 0.05)';
                            }}
                        >
                            {genres.map(genre => (
                                <option key={genre} value={genre} style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results count */}
                {(searchQuery || selectedGenre !== 'All') && (
                    <div style={{
                        marginTop: '16px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem'
                    }}>
                        Found {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''}
                        {searchQuery && ` matching "${searchQuery}"`}
                        {selectedGenre !== 'All' && ` in ${selectedGenre}`}
                    </div>
                )}
            </div>

            {filteredMovies.length === 0 ? (
                <div style={{
                    padding: '40px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(138, 43, 226, 0.05)',
                    border: '2px solid rgba(138, 43, 226, 0.2)',
                    borderRadius: '12px',
                    color: 'var(--text-secondary)'
                }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto 16px', color: 'var(--primary-color)' }}>
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <p style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-primary)' }}>No movies found</p>
                    <p style={{ marginBottom: 0 }}>Try adjusting your search or filter</p>
                </div>
            ) : (
                <div className="row">
                    {filteredMovies.map(movie => (
                        <div className="col-md-4 mb-4" key={movie.id}>
                            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div
                                    className="card h-100 shadow-sm movie-card"
                                    style={{
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                        border: '2px solid transparent',
                                        borderRadius: '16px',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(138, 43, 226, 0.4)';
                                        e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '';
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }}
                                >
                                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={movie.image}
                                            className="card-img-top"
                                            alt={movie.title}
                                            style={{
                                                height: '400px',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            backgroundColor: 'rgba(138, 43, 226, 0.9)',
                                            color: 'white',
                                            padding: '8px 12px',
                                            borderRadius: '8px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            backdropFilter: 'blur(10px)'
                                        }}>
                                            {movie.genre}
                                        </div>
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>{movie.title}</h5>
                                        <p className="card-text flex-grow-1" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                            {movie.description.substring(0, 100)}...
                                        </p>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            marginTop: '12px',
                                            color: 'var(--primary-color)',
                                            fontWeight: '600'
                                        }}>
                                            <span>View Details</span>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                    }
                </div >
            )}
        </div >
    );
};

export default MovieList;
