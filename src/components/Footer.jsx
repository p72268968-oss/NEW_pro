import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>MovieTicket</h5>
                        <p>Your one-stop destination for booking movie tickets. Experience the magic of cinema with us.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/movies">Movies</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
                        </div>
                        <p className="mt-3">Contact: support@movieticket.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MovieTicket. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
