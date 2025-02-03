import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import LOGO from '../Images/Home/Logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={LOGO} alt="Company Logo" />
        </div>

        <div className="footer-section">
          <h4>About Us</h4>
          <p>
          Car Finder Website is your trusted platform for securely managing vehicle information. We prioritize your privacy with robust security measures, ensuring your data stays safe and confidential. Join us to experience seamless vehicle management and peace of mind
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/HomePage#About_us">About</a></li>
            <li><a href="/HomePage">Services</a></li>
            <li><a href="/HomePage">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-us">
            <li><i className="fas fa-phone"></i> +94754024083</li>
            <li><i className="fas fa-map-marker-alt"></i> University of Kelaniya,<br /> Dalugama,<br /> Sri Lanka</li>
            <li><i className="fas fa-envelope"></i> lostcarfindlk@gmail.com</li>
          </div>
        </div>
       
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}  Lost Car Find. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;