import React from 'react';
import { getIcon } from '../utils/icons';

const Movies = ({ movies, onAdd, onEdit, onDelete }) => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h2 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: 0, fontSize: '2rem' }}>
                    Manage Movies
                </h2>
                <button onClick={onAdd} style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {getIcon('plus')}
                    </svg>
                    Add Movie
                </button>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                borderRadius: '16px',
                overflow: 'hidden'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'rgba(138, 43, 226, 0.1)', borderBottom: '1px solid rgba(138, 43, 226, 0.3)' }}>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>#</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Title</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Genre</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Duration</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Rating</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Status</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => (
                            <tr key={movie.id} style={{
                                borderBottom: '1px solid rgba(138, 43, 226, 0.2)',
                                transition: 'background-color 0.3s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{movie.id}</td>
                                <td style={{ padding: '16px', color: 'var(--text-primary)', fontWeight: '500' }}>{movie.title}</td>
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{movie.genre}</td>
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{movie.duration}</td>
                                <td style={{ padding: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-color)" stroke="none">
                                            {getIcon('star')}
                                        </svg>
                                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{movie.rating}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        backgroundColor: movie.status === 'Active' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(251, 146, 60, 0.2)',
                                        color: movie.status === 'Active' ? '#22c55e' : '#fb923c',
                                        padding: '6px 12px',
                                        borderRadius: '8px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}>
                                        {movie.status}
                                    </span>
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <button onClick={() => onEdit(movie)} style={{
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgba(138, 43, 226, 0.3)',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        marginRight: '8px',
                                        cursor: 'pointer'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2">
                                            {getIcon('edit')}
                                        </svg>
                                    </button>
                                    <button onClick={() => onDelete(movie.id)} style={{
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        cursor: 'pointer'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                                            {getIcon('trash')}
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Movies;
