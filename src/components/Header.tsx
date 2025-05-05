import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Donovan Blocus
        </Link>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
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
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
