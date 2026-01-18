import React from 'react';
import { getIcon } from '../utils/icons';

const Dashboard = ({ movies, malls, users }) => {
    const stats = [
        { title: "Total Movies", value: movies.length, icon: "film", color: "rgba(138, 43, 226, 0.2)" },
        { title: "Total Malls", value: malls.length, icon: "building", color: "rgba(34, 197, 94, 0.2)" },
        { title: "Active Users", value: users.length, icon: "users", color: "rgba(59, 130, 246, 0.2)" },
        { title: "Total Bookings", value: "1,250", icon: "ticket", color: "rgba(251, 146, 60, 0.2)" }
    ];

    // Calculate additional stats
    const activeMovies = movies.filter(m => m.status === 'Active').length;
    const comingSoonMovies = movies.filter(m => m.status === 'Coming Soon').length;
    const adminUsers = users.filter(u => u.role === 'Admin').length;
    const regularUsers = users.filter(u => u.role === 'User').length;
    const totalScreens = malls.reduce((sum, mall) => sum + mall.screens, 0);
    const totalCapacity = malls.reduce((sum, mall) => sum + mall.capacity, 0);
    const avgRating = (movies.reduce((sum, m) => sum + m.rating, 0) / movies.length).toFixed(1);

    // Recent activities (mock data)
    const recentActivities = [
        { id: 1, action: "New movie added", item: "Oppenheimer", time: "2 hours ago", type: "movie" },
        { id: 2, action: "User registered", item: "sarah@example.com", time: "5 hours ago", type: "user" },
        { id: 3, action: "Mall updated", item: "PVR Cinemas", time: "1 day ago", type: "mall" },
        { id: 4, action: "Movie status changed", item: "Interstellar", time: "2 days ago", type: "movie" },
        { id: 5, action: "New booking", item: "Inception - IMAX", time: "3 days ago", type: "booking" }
    ];

    // Top rated movies
    const topMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5);

    return (
        <div>
            <h2 style={{
                color: 'var(--text-primary)',
                fontWeight: '700',
                marginBottom: '32px',
                fontSize: '2rem'
            }}>
                Dashboard Overview
            </h2>

            {/* Main Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                {stats.map((stat, index) => (
                    <div key={index} style={{
                        background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(138, 43, 226, 0.3)',
                        borderRadius: '16px',
                        padding: '24px',
                        transition: 'all 0.3s',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(138, 43, 226, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h6 style={{ color: 'var(--text-secondary)', marginBottom: '8px', fontSize: '0.9rem' }}>
                                    {stat.title}
                                </h6>
                                <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: 0, fontSize: '2rem' }}>
                                    {stat.value}
                                </h3>
                            </div>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                backgroundColor: stat.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2">
                                    {getIcon(stat.icon)}
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Two Column Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                {/* Top Rated Movies */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(138, 43, 226, 0.3)',
                    borderRadius: '16px',
                    padding: '24px'
                }}>
                    <h3 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '20px', fontSize: '1.3rem' }}>
                        Top Rated Movies
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {topMovies.map((movie, index) => (
                            <div key={movie.id} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '12px',
                                backgroundColor: 'rgba(138, 43, 226, 0.05)',
                                borderRadius: '8px',
                                border: '1px solid rgba(138, 43, 226, 0.1)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        backgroundColor: index === 0 ? 'rgba(251, 146, 60, 0.2)' : 'rgba(138, 43, 226, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: index === 0 ? '#fb923c' : 'var(--primary-color)',
                                        fontWeight: '600',
                                        fontSize: '0.9rem'
                                    }}>
                                        {index + 1}
                                    </span>
                                    <div>
                                        <p style={{ color: 'var(--text-primary)', fontWeight: '500', margin: 0, fontSize: '0.95rem' }}>{movie.title}</p>
                                        <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.8rem' }}>{movie.genre}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-color)" stroke="none">
                                        {getIcon('star')}
                                    </svg>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{movie.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(138, 43, 226, 0.3)',
                    borderRadius: '16px',
                    padding: '24px'
                }}>
                    <h3 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '20px', fontSize: '1.3rem' }}>
                        Recent Activity
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {recentActivities.map((activity) => (
                            <div key={activity.id} style={{
                                display: 'flex',
                                gap: '12px',
                                padding: '12px',
                                backgroundColor: 'rgba(138, 43, 226, 0.05)',
                                borderRadius: '8px',
                                border: '1px solid rgba(138, 43, 226, 0.1)'
                            }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--primary-color)',
                                    marginTop: '6px',
                                    flexShrink: 0
                                }}></div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ color: 'var(--text-primary)', margin: 0, fontSize: '0.9rem' }}>
                                        <span style={{ fontWeight: '500' }}>{activity.action}</span>
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', margin: '2px 0 0 0', fontSize: '0.85rem' }}>
                                        {activity.item}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', margin: '4px 0 0 0', fontSize: '0.75rem' }}>
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mall Overview */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                borderRadius: '16px',
                padding: '24px'
            }}>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '20px', fontSize: '1.3rem' }}>
                    Mall Overview
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                    {malls.map((mall) => (
                        <div key={mall.id} style={{
                            padding: '16px',
                            backgroundColor: 'rgba(138, 43, 226, 0.05)',
                            borderRadius: '12px',
                            border: '1px solid rgba(138, 43, 226, 0.2)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '12px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '8px',
                                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                                        {getIcon('building')}
                                    </svg>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ color: 'var(--text-primary)', margin: '0 0 4px 0', fontSize: '1.1rem' }}>{mall.name}</h4>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.85rem' }}>{mall.location}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                                <div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: '0 0 4px 0' }}>Screens</p>
                                    <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>{mall.screens}</p>
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: '0 0 4px 0' }}>Capacity</p>
                                    <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>{mall.capacity.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
