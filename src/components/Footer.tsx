import React from "react";
import "./Footer.css";
import LinkButton from "./LinkButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <LinkButton href="#" type="social-media">
          <i className="bx bxl-linkedin"></i>
        </LinkButton>
        <LinkButton href="#" type="social-media">
          <i className="bx bxl-github"></i>
        </LinkButton>
      </div>
      <p className="copyright">&copy; Donovan Blocus - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
