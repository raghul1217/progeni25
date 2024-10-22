import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/profile.css";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaExclamationCircle, FaEnvelope, FaIdCard, FaBuilding, FaUniversity, FaPhone, FaMoneyBillWave } from "react-icons/fa";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const token = JSON.parse(localStorage.getItem("token"));

  const fetchData = () => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/profile`, {}, header)
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("Error while fetching data", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center font-semibold mt-3">Data is loading...</p>;
  }

  return (
    <div className="profile-navbar">
      <Header />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-icon-wrapper">
            <i className="fas fa-user-circle profile-icon"></i>
          </div>
          <h2 className="profile-name">{data.name}</h2>
          <div className="profile-info-container">
            <div className="profile-bio-div"><h1 className="profile-bio">Bio</h1></div>
            <div className="profile-info">
              <div className="info-label">
                <FaEnvelope />
                <label>Email</label>
              </div>
              <div className="info-data">
                <span>{data.email}</span>
              </div>
              <div className="info-divider" />
            </div>
            <div className="profile-info">
              <div className="info-label">
                <FaIdCard />
                <label>User ID</label>
              </div>
              <div className="info-data">
                <span>{data.customId}</span>
              </div>
              <div className="info-divider" />
            </div>
            <div className="profile-info">
              <div className="info-label">
                <FaBuilding />
                <label>Dept</label>
              </div>
              <div className="info-data">
                <span>{data.department}</span>
              </div>
              <div className="info-divider" />
            </div>
            <div className="profile-info">
              <div className="info-label">
                <FaUniversity />
                <label>College</label>
              </div>
              <div className="info-data">
                <span>{data.collegeName}</span>
              </div>
              <div className="info-divider" />
            </div>
            <div className="profile-info">
              <div className="info-label">
                <FaPhone />
                <label>Mobile</label>
              </div>
              <div className="info-data">
                <span>{data.mobile}</span>
              </div>
              <div className="info-divider" />
            </div>

            <div className="profile-bio-div"><h1 className="payment-payhead profile-bio ">Payment</h1></div>

            {/* Conditionally render the "Proceed to pay" button only if payment is not verified */}
            {!data.paymentStatus && (
              <div className="payment-proceed">
                <Link to="/payment">
                  <button className="custom-btn-pay btn-11">Proceed to pay</button>
                </Link>
              </div>
            )}

            <div className="profile-info">
              <div className="info-label">
                {/* <FaMoneyBillWave /> */}
                <label>Payment Status</label>
              </div>
              <div className="info-data payment-status">
                {/* Change icon and color based on payment status */}
                <span>{data.paymentStatus ? "Verified" : "Not Verified"}</span>
                {data.paymentStatus ? (
                  <FaCheckCircle className="verified-icon" style={{ color: '#28a745' }} />
                ) : (
                  <FaExclamationCircle className="verified-icon" style={{ color: 'yellow' }} />
                )}
                
              </div>
              <div className="info-divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
