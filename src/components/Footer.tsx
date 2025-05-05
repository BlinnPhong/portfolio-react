import React from "react";
import "./Footer.css";
import LinkButton from "./LinkButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <LinkButton
          isExternal={true}
          href="https://github.com/BlinnPhong"
          type="social-media"
        >
          <i className="bx bxl-linkedin"></i>
        </LinkButton>
        <LinkButton
          isExternal={true}
          href="https://github.com/BlinnPhong"
          type="social-media"
        >
          <i className="bx bxl-github"></i>
        </LinkButton>
      </div>
      <p className="copyright">&copy; Donovan Blocus - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
