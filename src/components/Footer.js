import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-about">
        <h3>About Educatio</h3>
        <p>
          Educatio is your gateway to a world of learning. We offer a diverse range of courses
          tailored to empower and inspire. Whether you're seeking to advance your career, explore
          a new hobby, or unlock new professional skills, our courses are designed with you in mind.
          With experienced instructors and a commitment to quality education, Educatio is the ideal
          platform for lifelong learners. Join our community today and start your journey of growth
          and discovery.
        </p>
      </div>
      
      <div className="footer-logo-social">
      <img src={`${process.env.PUBLIC_URL}/images/Educatio logo.png`} alt="Company Logo" className="footer-logo" />

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

      <div className="footer-contact">
        <p>Educatio</p>
        <p>123 Learning Ave, Knowledge City, 101010</p>
        <p>Phone: +1-234-567-8900</p>
        <p>Email: contact@educatio.com</p>
        <p>Website: www.educatio.com</p>
      </div>
    </footer>
  );
};

export default Footer;
