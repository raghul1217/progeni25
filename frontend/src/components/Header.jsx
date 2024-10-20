import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={menuOpen ? 'blur-background' : ''}>
            <div className="header-container">
                <nav className="navbar">
                    <div className="logo">Progeni.</div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {menuOpen ? '\u2715' : '\u2630'}
                    </div>
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/rules">Rules</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/payment">Payment</Link></li>
                        <li><button className="custom-btn btn-11" onClick={handleLogout}><span className='logout-span'>Logout</span></button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;