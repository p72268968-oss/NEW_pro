import React from 'react';
import { getIcon } from '../utils/icons';

const Malls = ({ malls, onAdd, onEdit, onDelete }) => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h2 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: 0, fontSize: '2rem' }}>
                    Manage Malls
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
                    Add Mall
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
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Name</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Location</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Screens</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Capacity</th>
                            <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {malls.map(mall => (
                            <tr key={mall.id} style={{
                                borderBottom: '1px solid rgba(138, 43, 226, 0.2)',
                                transition: 'background-color 0.3s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{mall.id}</td>
                                <td style={{ padding: '16px', color: 'var(--text-primary)', fontWeight: '500' }}>{mall.name}</td>
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{mall.location}</td>
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{mall.screens}</td>
                                <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{mall.capacity}</td>
                                <td style={{ padding: '16px' }}>
                                    <button onClick={() => onEdit(mall)} style={{
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
                                    <button onClick={() => onDelete(mall.id)} style={{
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

export default Malls;
