import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa'; // Importing FontAwesome icons
import '../styles/login.css'; // Importing the external CSS
import Header from './Header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            email: email,
            password: password,
        };

        axios
            .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/login`, payload)
            .then((res) => {
                setLoading(false);
                toast.success('Login Successful', { className: 'toastify-container' });
                localStorage.setItem('token', JSON.stringify(res.data.token));
                navigate('/profile');
            })
            .catch((err) => {
                toast.error('Invalid Credentials', { className: 'toastify-container' });
                setLoading(false);
            });
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-navbar">
            <Header/>
        <div className="login">
            <form onSubmit={handleSubmit} className="login__form">
                <h1 className="login__title">Login</h1>

                <div className="login__content">
                    <div className="login__box">
                        <FaUser className="login__icon" /> {/* User Icon */}
                        <div className="login__box-input">
                            <input
                                type="email"
                                id="login-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="login__input"
                                placeholder=" "
                            />
                            <label htmlFor="login-email" className="login__label">Email</label>
                        </div>
                    </div>

                    <div className="login__box">
                        <FaLock className="login__icon" /> {/* Lock Icon */}
                        <div className="login__box-input">
                            <input
                                type={showPassword ? 'text' : 'password'} // Conditionally rendering the input type
                                id="login-pass"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="login__input"
                                placeholder=" "
                            />
                            <label htmlFor="login-pass" className="login__label">Password</label>

                            {/* Toggle Eye Icon based on password visibility */}
                            {showPassword ? (
                                <FaEye className="login__eye" onClick={togglePasswordVisibility} />
                            ) : (
                                <FaEyeSlash className="login__eye" onClick={togglePasswordVisibility} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="login-btn-center">
                <button type="submit" disabled={loading} className="custom-btn-pay btn-11">
                    {loading ? 'Submitting..' : 'Login'}
                </button>
                </div>

                <p className="login__register">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
        </div>
    );
};

export default Login;
