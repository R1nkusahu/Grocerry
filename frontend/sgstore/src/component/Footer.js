import React from 'react';
import './Footer.css';  

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are committed to delivering the best services to our customers with a focus on quality and innovation.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: sgstore@gmail.com</p>
          <p>Phone: +91 9937504405</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Sahu general store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
