// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Highwind Properties. All rights reserved.</p>
        <div className="socials">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Twitter">TW</a>
          <a href="#" aria-label="Instagram">IG</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

