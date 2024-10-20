import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* left Side: Contact Numbers and Icons */}
        <div className="left-side">
        <h4>Contact Us</h4>
          <div className="contact-numbers">
            <div className="people-contact">
              {/* insertphone icon */}
              <p>Jegan K - GS +123 456 7890</p>
            </div>
            
            <div className="people-contact">
              {/* insertphone icon */}
              <p>Devakumar V - OC +123 456 7890</p>
            </div>

            <div className="people-contact">
              {/* insertphone icon */}
              <p>Nadishbalaji - OC +123 456 7890</p>
            </div>

            <div className="people-contact">
              {/* insertphone icon */}
              <p>Vinothkumar J - OC +123 456 7890</p>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="mailto:someone@example.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        {/* Center: Quick Links Section */}
        <div className="center-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            {/* <li><Link to="/rules">Rules</Link></li> */}
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
            <li><Link to="/payment">Payment</Link></li>
          </ul>
        </div>

        {/* right side */}
        <div className="right-side">
          <div className="contact-image-container">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> {/* Location Icon */}
              Department of Computer Science and Engineering, Government College of Engineering, Karuppur, Salem - 636011
            </p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62509.28753462909!2d78.10412419650879!3d11.706416889358225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfa3400000001%3A0x786937287cc3f1eb!2sGovernment%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1729430777919!5m2!1sen!2sin"
              width="400"
              height="200"
              // style={{ border: '0' }}
              className='footer-gmap'
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


      </div>


      {/* Footer bottom text */}
      <div className="footer-bottom">
        <hr />
        <p className='footer-p'>Progeni2025. © All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
