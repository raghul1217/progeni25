import React from 'react';
import '../styles/footer.css'; // Your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-side">
          <div className="contact-image-container">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> {/* Location Icon */}
              Department of Computer Science and Engineering, Government College of Engineering, Karuppur, Salem - 636011
            </p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62509.28753462909!2d78.10412419650879!3d11.706416889358225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfa3400000001%3A0x786937287cc3f1eb!2sGovernment%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1729430777919!5m2!1sen!2sin"
              width="400"
              height="200"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Center: Quick Links Section */}
        <div className="center-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Side: Contact Numbers and Icons */}
        <div className="right-side">
          <h4>Contact Us</h4>
          <div className="contact-numbers">
            <p>+123 456 7890</p>
            <p>+098 765 4321</p>
            <p>+111 222 3333</p>
            <p>+444 555 6666</p>
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
      </div>
      {/* Footer bottom text */}
      <div className="footer-bottom">
        <hr />
        <p>Progeni2025. © All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
