import React, { useState } from 'react';
import { getIcon } from '../utils/icons';

const Modal = ({ type, item, onClose, onSave, category }) => {
    const [formData, setFormData] = useState(item || {});

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const inputStyle = {
        width: '100%',
        padding: '14px 16px',
        backgroundColor: 'rgba(138, 43, 226, 0.05)',
        border: '2px solid rgba(138, 43, 226, 0.2)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        marginBottom: '16px',
        outline: 'none'
    };

    const renderFormFields = () => {
        if (category === 'movies') {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Movie Title"
                        value={formData.title || ''}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        placeholder="Genre"
                        value={formData.genre || ''}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="number"
                        step="0.1"
                        placeholder="Rating (0-10)"
                        value={formData.rating || ''}
                        onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        placeholder="Duration (e.g., 148 min)"
                        value={formData.duration || ''}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        required
                        style={inputStyle}
                    />
                    <select
                        value={formData.status || 'Active'}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        style={inputStyle}
                    >
                        <option value="Active">Active</option>
                        <option value="Coming Soon">Coming Soon</option>
                    </select>
                </>
            );
        } else if (category === 'malls') {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Mall Name"
                        value={formData.name || ''}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={formData.location || ''}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="number"
                        placeholder="Number of Screens"
                        value={formData.screens || ''}
                        onChange={(e) => setFormData({ ...formData, screens: parseInt(e.target.value) })}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="number"
                        placeholder="Total Capacity"
                        value={formData.capacity || ''}
                        onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                        required
                        style={inputStyle}
                    />
                </>
            );
        } else if (category === 'users') {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name || ''}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email || ''}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={inputStyle}
                    />
                    <select
                        value={formData.role || 'User'}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        style={inputStyle}
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </>
            );
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                borderRadius: '16px',
                padding: '32px',
                maxWidth: '500px',
                width: '90%',
                maxHeight: '90vh',
                overflowY: 'auto'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ color: 'var(--text-primary)', margin: 0 }}>
                        {type === 'add' ? 'Add' : 'Edit'} {category.slice(0, -1).charAt(0).toUpperCase() + category.slice(1, -1)}
                    </h3>
                    <button onClick={onClose} style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '4px'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {getIcon('close')}
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {renderFormFields()}
                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                        <button type="submit" style={{
                            flex: 1,
                            padding: '14px',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}>
                            {type === 'add' ? 'Add' : 'Update'}
                        </button>
                        <button type="button" onClick={onClose} style={{
                            flex: 1,
                            padding: '14px',
                            backgroundColor: 'transparent',
                            color: 'var(--text-secondary)',
                            border: '1px solid rgba(138, 43, 226, 0.3)',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
