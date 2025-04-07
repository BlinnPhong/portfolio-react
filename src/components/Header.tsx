import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="#about" className="logo">
          Donovan Blocus
        </a>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <a href="#about">Présentation</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#bts">BTS SIO</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
