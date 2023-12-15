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
        <img src="/images/Educatio logo.png" alt="Company Logo" className="footer-logo" />

        <div className="social-links">
          <a href="https://facebook.com/Educatio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/Educatio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com/Educatio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="contact-info">
          <p>Educatio</p>
          <p>123 Learning Ave, Knowledge City, 101010</p>
          <p>Phone: +1-234-567-8900</p>
          <p>Email: contact@educatio.com</p>
          <p>Website: www.educatio.com</p>
        </div>
        
        <div className="map-container">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
