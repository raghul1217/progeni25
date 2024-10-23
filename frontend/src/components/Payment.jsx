import React, { useState } from 'react';
import Header from './Header';
import '../styles/payment.css';
import gpay1 from '../assets/gpay1.jpg';

const Payment = () => {
  const [copySuccess, setCopySuccess] = useState(false); // Boolean to control visibility
  const upiId = 'devakumarv2234@oksbi';
  const upiId1 = 'raghulram2005@okicici'; // Replace with your actual UPI ID

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

  const handleCopy1 = () => {
    navigator.clipboard.writeText(upiId1)
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
            <img src={gpay1} alt="GPay QR" className="gpay-img" />
            <p className='payment-text'>Scan the UPI </p><span className='payment-text'>or</span><p className='payment-text'>Copy the UPI ID and complete the payment</p>
            <div className="upi-info">
              <p className="upi-id">devakumarv2234@oksbi</p>
              <button className="copy-btn" onClick={handleCopy}>Copy UPI ID</button>
            </div>
            <div className="upi-info">
              <p className="upi-id">raghulram2005@okicici</p>
              <button className="copy-btn" onClick={handleCopy1}>Copy UPI ID</button>
            </div>
            <span className={`copy-success ${copySuccess ? 'visible' : ''}`}>UPI ID copied!</span>
          </div>
          <div className="payment-verification">
          <h1 className='gpay-div-head'>Payment</h1>
            <div className="amount-details">
              <h1>Online registration fee: ₹200/-</h1>
              <h1>Onspot registration fee: ₹250/-</h1>
              {/* <h1>Cash prizes available for each events</h1> */}
            </div>
            <h1 className='gpay-div-head'>Note:</h1>
            <p className='payment-verification-p1'>1.After completing the payment, kindly fill out the Google form which has been given below to verify your payment status by our backend team.</p>
            <p className='payment-verification-p2'>2.Enter your name, Progeni ID, College name, Mobile number from which the payment was made and upload your transaction screenshot too in the google form below.</p>
            <div className="verify-btn"><button className="google-form-btn" onClick={handlePaymentClick}>Google Form</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
