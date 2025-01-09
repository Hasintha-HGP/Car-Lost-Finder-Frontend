import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a modern tech company delivering innovative solutions to
            enhance your digital presence.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
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
        <p>&copy; 2025 Lost Car Find. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
