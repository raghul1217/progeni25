import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/profile.css";
import { Link } from "react-router-dom";

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
      .post("http://localhost:3000/user/profile", {}, header)
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
            {/* Using Font Awesome icon for profile instead of image */}
            <i className="fas fa-user-circle profile-icon"></i>
          </div>
          <h2 className="profile-name">{data.name}</h2>
          <div className="profile-info-container">
            <h1>Bio</h1>
            <div className="profile-info">
              <div className="info-label">
                <i className="fas fa-envelope"></i>
                <label>Email</label>
              </div>
              <div className="info-data">
                <span>{data.email}</span>
                {/* <div className="info-underline"></div> */}
              </div>
            </div>
            <div className="profile-info">
              <div className="info-label">
                <i className="fas fa-id-card"></i>
                <label>User ID</label>
              </div>
              <div className="info-data">
                <span>{data.customId}</span>
                {/* <div className="info-underline"></div> */}
              </div>
            </div>
            <div className="profile-info">
              <div className="info-label">
                <i className="fas fa-building"></i>
                <label>Dept</label>
              </div>
              <div className="info-data">
                <span>{data.department}</span>
                {/* <div className="info-underline"></div> */}
              </div>
            </div>
            <div className="profile-info">
              <div className="info-label">
                <i className="fas fa-university"></i>
                <label>College</label>
              </div>
              <div className="info-data">
                <span>{data.collegeName}</span>
                {/* <div className="info-underline"></div> */}
              </div>
            </div>
            <div className="profile-info">
              <div className="info-label">
                <i className="fas fa-phone"></i>
                <label>Mobile</label>
              </div>
              <div className="info-data">
                <span>{data.mobile}</span>
                {/* <div className="info-underline"></div> */}
              </div>
            </div>
            <h1 className="payment-payhead">Payment</h1>
            <div className="payment-proceed">
              <Link to="/payment"><button>Proceed to pay</button></Link>
            </div>
            <div className="profile-info">
              <div className="info-label">
                <label>Payment Status</label>
              </div>
              <div className="info-data">
              <span>{data.paymentStatus ? "Verified" : "Not Verified"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;