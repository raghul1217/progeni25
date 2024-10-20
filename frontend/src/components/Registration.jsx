import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FaUser, FaEnvelope, FaLock, FaUniversity, FaPhone, FaBuilding } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/registration.css';
import Header from './Header';

function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [department, setDepartment] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        const payload = {
            name: userName,
            email: email,
            password: password,
            department: department,
            collegeName: collegeName,
            mobile: mobile,
        };

        axios.post('http://localhost:3000/user/register', payload)
            .then((res) => {
                setLoading(false);
                toast.success("Registration Successful", { className: 'toastify-container' });
            })
            .catch((err) => {
                toast.error("Registration Failed", { className: 'toastify-container' });
                setLoading(false);
            });
    };

    return (
        <div className="register-navbar">
            <Header />
            <div className="registration-container">
                <div className="registration-form-wrapper">
                    <h2 className="registration-heading">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="registration-form-group">
                            <FaUser className="registration__icon" />
                            <div className="registration__box-input">
                                <input
                                    type="text"
                                    id="userName"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                    placeholder=" "
                                    className="registration__input"
                                />
                                <label htmlFor="userName" className="registration__label">Name</label>
                            </div>
                        </div>

                        <div className="registration-form-group">
                            <FaEnvelope className="registration__icon" />
                            <div className="registration__box-input">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder=" "
                                    className="registration__input"
                                />
                                <label htmlFor="email" className="registration__label">Email</label>
                            </div>
                        </div>

                        <div className="registration-form-group">
                            <FaLock className="registration__icon" />
                            <div className="registration__box-input">
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder=" "
                                    className="registration__input"
                                />
                                <label htmlFor="password" className="registration__label">Password</label>
                            </div>
                        </div>

                        <div className="registration-form-group">
                            <FaPhone className="registration__icon" />
                            <div className="registration__box-input">
                                <input
                                    type="tel"
                                    id="mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                    placeholder=" "
                                    className="registration__input"
                                />
                                <label htmlFor="mobile" className="registration__label">Mobile Number</label>
                            </div>
                        </div>

                        <div className="registration-form-group">
                            <FaBuilding className="registration__icon" />
                            <div className="registration__box-input">
                                <input
                                    type="text"
                                    id="department"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    required
                                    placeholder=" "
                                    className="registration__input"
                                />
                                <label htmlFor="department" className="registration__label">Department</label>
                            </div>
                        </div>

                        <div className="registration-form-group">
                            <FaUniversity className="registration__icon" />
                            <div className="registration__box-input">
                                <input
                                    type="text"
                                    id="collegeName"
                                    value={collegeName}
                                    onChange={(e) => setCollegeName(e.target.value)}
                                    required
                                    placeholder=" "
                                    className="registration__input"
                                />
                                <label htmlFor="collegeName" className="registration__label">College Name</label>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="registration-button"
                        >
                            {loading ? 'Submitting...' : 'Register'}
                        </button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Registration;
