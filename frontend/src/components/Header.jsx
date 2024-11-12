import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';
import progenilogo2 from '../assets/progenilogo2.png';

function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in by looking for a token in localStorage
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Set isLoggedIn to true if a token exists
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false); // Update isLoggedIn state
        navigate('/');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (path) => {
        setMenuOpen(false); // Close the menu
        setTimeout(() => {
            navigate(path);
        }, 300); // Navigate to the desired path
    };

    return (
        <header className={menuOpen ? 'blur-background' : ''}>
            <div className="header-container">
                <nav className="navbar">
                    <div className='brand'>
                        <img src={progenilogo2} alt="" className='navbar-head-progeni' />
                        <span className="logo">Progen'i25</span>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {menuOpen ? '\u2715' : '\u2630'}
                    </div>
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#home" onClick={() => handleLinkClick('/')}>Home</a></li>
                        <li><a href="#events" onClick={() => handleLinkClick('/#events')}>Events</a></li>
                        <li><a href="#profile" onClick={() => handleLinkClick('/profile')}>Profile</a></li>
                        <li><a href="#register" onClick={() => handleLinkClick('#')}>Register</a></li>
                        <li><a href="#payment" onClick={() => handleLinkClick('/payment')}>Payment</a></li>
                        <li><a href="#footer" onClick={() => handleLinkClick('/#footer')}>Contact</a></li>

                        {/* Conditionally render Login or Logout button */}
                        {isLoggedIn ? (
                            <li>
                                <button className="custom-btn btn-11" onClick={handleLogout}>
                                    <span className='logout-span'>Logout</span>
                                </button>
                            </li>
                        ) : (
                            <button className="custom-btn btn-11" onClick={() => handleLinkClick('/login')}>
                                    <span className='logout-span'>Login</span>
                            </button>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
