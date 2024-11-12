import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">

        {/* left Side: Contact Numbers and Icons */}
        <div className="left-side">
        <h4>Contact Us</h4>
          <div className="contact-numbers">
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Jegan K (GS)</p>
              </div>
              <div className="align2">
              <p>: 8220634803</p>
              </div>
            </div>

            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Megha Harthana S (GS)</p>
              </div>
              <div className="align2">
              <p>: 6381931373</p>
              </div>
            </div>

            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Sanmathi A (OC)</p>
              </div>
              <div className="align2">
              <p>: 6369306199</p>
              </div>
            </div>

            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Roja R (OC)</p>
              </div>
              <div className="align2">
              <p>: 7418412386</p>
              </div>
            </div>
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Devakumar V (OC)</p>
              </div>
              <div className="align2">
              <p>: 9025635039</p>
              </div>
            </div>
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Vinothkumar J (OC)</p>
              </div>
              <div className="align2">
              <p>: 8870555504</p>
              </div>
            </div>
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Nadish Balagi C (OC)</p>
              </div>
              <div className="align2">
              <p>: 8190067804</p>
              </div>
            </div>
            
          </div>

          <div className="social-icons">
            <div className="social-icons-div">
            <a href="https://www.instagram.com/progeni25/profilecard/?igsh=d280emlncG82eXN3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
            </div>
            <div className="social-icons-div">
            <a href="https://wa.me/918220634803" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            </div>
            <div className="social-icons-div">
            <a href="mailto:progeni25.0cse@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            </div>
          </div>
        </div>

        {/* Center: Quick Links Section */}
        <div className="center-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#events" >Events</a></li>
            {/* <li><Link to="/rules">Rules</Link></li> */}
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="#">Register</Link></li>
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
