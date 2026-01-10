import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement actual forgot password logic (API call)
        console.log('Forgot Password for:', email);
        alert('If an account exists with this email, a reset link has been sent.');
        navigate('/login');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Forgot Password</div>
                        <div className="card-body">
                            <p>Enter your email address and we'll send you a link to reset your password.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
                                <div className="mt-3 text-center">
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        onClick={() => navigate('/login')}
                                    >
                                        Back to Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
