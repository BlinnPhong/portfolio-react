import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavBar = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Donovan Blocus
        </Link>

        <i className="bx bx-menu" id="menu-icon" onClick={toggleNavBar}></i>

        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <Link to="/">Présentation</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/veilletech">Veilles Technologiques</Link>
          <a
            href={`${
              import.meta.env.BASE_URL
            }/documents/tableau-de-synthese.pdf`}
            target="blank"
          >
            Tableau de Synthèse
            <i className="bx bx-link-external"></i>
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
