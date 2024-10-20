import React, { useState } from 'react';
import Header from './Header';
import '../styles/payment.css';
import gpay from '../assets/gpay.jpg';

const Payment = () => {
  const [copySuccess, setCopySuccess] = useState(false); // Boolean to control visibility
  const upiId = 'devakumarv2234@oksbi'; // Replace with your actual UPI ID

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId)
      .then(() => {
        setCopySuccess(true); // Show the success message
        setTimeout(() => setCopySuccess(false), 2000); // Hide the message after 2 seconds
      })
      .catch(() => {
        setCopySuccess(false); // Reset if copying fails
      });
  };

  const handlePaymentClick = () => {
    window.location.href = 'https://forms.gle/8SG7eVgJzDwPuxMz5';
  };

  return (
    <>
      <div className="payment-navbar">
        <Header />
        <div className="payment-info-container">
          <div className="gpay-div">
            <img src={gpay} alt="GPay QR" className="gpay-img" />
            <p>Scan the upi </p><span>or</span><p>Copy the upi id and make the payment</p>
            <div className="upi-info">
              <p className="upi-id">devakumarv2234@oksbi</p>
              <button className="copy-btn" onClick={handleCopy}>Copy UPI ID</button>
            </div>
            <span className={`copy-success ${copySuccess ? 'visible' : ''}`}>UPI ID copied!</span>
          </div>
          <div className="payment-verification">
            <div className='verify-div'><h1>Note:</h1></div>
            <p className='payment-verification-p1'>1.After completing payment, kindly fill out the Google form for payment verification by the backend team.</p>
            <p className='payment-verification-p2'>2.Please enter your name, progen ID, college, mobile number from which the payment was made, and upload your transaction screenshot.</p>
            <div className="verify-btn"><button className="google-form-btn" onClick={handlePaymentClick}>Google Form</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
