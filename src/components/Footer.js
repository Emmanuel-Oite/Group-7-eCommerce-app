import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"></a>
      <div className="footer-left">
        {/* Fix the image source for the logo */}
        <img src="/images/logo no bg.png" alt="Company Logo" className="footer-logo" />

        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="contact-info">
          <p>Company Name</p>
          <p>Your Company Address</p>
          <p>Phone: Your Phone Number</p>
          <p>Email: your.email@example.com</p>
          <p>Website: www.yourwebsite.com</p>
        </div>
        
        <div className="map-container">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
