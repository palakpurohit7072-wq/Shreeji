import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="admin-footer">
      <div className="admin-footer-container">
        <div className="footer-left">
          © 2023 - Pulsiron Dashboard
        </div>
        <div className="footer-right">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Policy</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


