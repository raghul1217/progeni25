import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo2 from '../assets/logo2.png';
import progenilogo from '../assets/progenilogo.png';
import { Link } from 'react-router-dom';
import pilot from '../assets/pilot.svg';
import '../styles/home.css';
import Events from './Events';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import { FaTimes } from "react-icons/fa";

const Home = () => {
  const [number, setNumber] = useState(20);
  const [showNotification, setShowNotification] = useState(false);
  const [userName, setUserName] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(true);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    // Fetch user data to check payment status
    const fetchUserData = async () => {
      try {
        const header = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/profile`, {}, header);
        const { name, paymentStatus } = res.data.data;
        setUserName(name);
        setPaymentStatus(paymentStatus);
        if (!paymentStatus) {
          setShowNotification(true);  // Show notification if payment is incomplete
        }
      } catch (error) {
        console.log("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    let currentNumber = 1;
    const intervalId = setInterval(() => {
      // Update the number from 20 to 25
      if (currentNumber < 25) {
        currentNumber++;
      } else {
        currentNumber = 25; // Fix it at 25 once the loop completes
        clearInterval(intervalId); // Stop the interval once it hits 25
      }
      setNumber(currentNumber);
    }, 100); // Fast transition

    return () => clearInterval(intervalId); // Clean up the interval when component unmounts
  }, []);

  // Function to close the notification
  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <div className="home-bg">
        <Header />
        <div className="home-container">
          <div className="home-content1">
            <img src={progenilogo} alt="progeni25-logo" />
            <h1 className='brand-main'>Progen'i <span className='number'>{number}.0</span></h1>
            <div className="home-date-container">
              <h3 className='home-date s-home-date'>Slated to happen on</h3>
              <h3 className='home-date'>Nov-14 2024</h3>
            </div>
            <p>A national level technical symposium will be conducted by Department of Computer science and Engineering, Government College of Engineering, Salem.</p>
            <div className="home-btn">
              <Link to="#" id='neon-btn'>
                <button className='register-btn'>
                  REGISTER
                </button>
              </Link>
              <p>Online registration closed!</p>
              <p>Onspot registration - ₹250/-</p>
            </div>
          </div>
          <div className="home-content2">
            <img src={pilot} alt="" />
          </div>
        </div>
      </div>

      {/* Conditionally render the notification message */}
      {showNotification && (
        <div className="notification-container">
          <div className="notification">
            <button className="notification-close-btn" onClick={handleCloseNotification}>
              <FaTimes />
            </button>
            <p>Hello {userName}, your payment is drifting in space. Complete it in your profile.</p>
            <Link to="/profile" className="profile-link">Go to Profile</Link>
          </div>
        </div>
      )}

      <Events />
      <Parallax />
      <Footer />
    </>
  );
}

export default Home;
