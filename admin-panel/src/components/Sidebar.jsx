import React from 'react';
import { getIcon } from '../utils/icons';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'movies', label: 'Movies', icon: 'film' },
        { id: 'malls', label: 'Malls', icon: 'malls' },
        { id: 'users', label: 'Users', icon: 'users' },
        { id: 'settings', label: 'Settings', icon: 'settings' }
    ];

    return (
        <div style={{
            width: '260px',
            minHeight: '100vh',
            background: 'linear-gradient(180deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
            backdropFilter: 'blur(20px)',
            borderRight: '1px solid rgba(138, 43, 226, 0.3)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            left: 0,
            top: 0
        }}>
            <h4 style={{
                textAlign: 'center',
                marginBottom: '32px',
                background: 'linear-gradient(45deg, var(--primary-color), #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700',
                fontSize: '1.5rem'
            }}>
                MovieTicket
            </h4>
            <p style={{
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                marginBottom: '32px',
                marginTop: '-16px'
            }}>
                Admin Panel
            </p>

            <div style={{ flex: 1 }}>
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                            width: '100%',
                            padding: '14px 16px',
                            marginBottom: '8px',
                            backgroundColor: activeTab === item.id ? 'rgba(138, 43, 226, 0.2)' : 'transparent',
                            border: activeTab === item.id ? '1px solid var(--primary-color)' : '1px solid transparent',
                            borderRadius: '12px',
                            color: activeTab === item.id ? 'var(--primary-color)' : 'var(--text-secondary)',
                            fontSize: '1rem',
                            fontWeight: activeTab === item.id ? '600' : '400',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            transition: 'all 0.3s',
                            textAlign: 'left'
                        }}
                        onMouseEnter={(e) => {
                            if (activeTab !== item.id) {
                                e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab !== item.id) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--text-secondary)';
                            }
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {getIcon(item.icon)}
                        </svg>
                        {item.label}
                    </button>
                ))}
            </div>

            <button
                style={{
                    width: '100%',
                    padding: '14px 16px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '12px',
                    color: '#ef4444',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                    e.currentTarget.style.borderColor = '#ef4444';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {getIcon('logout')}
                </svg>
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
