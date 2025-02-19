import React from "react";
import logo from "../assets/logo.png";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo PumaSgnd" />
      </div>

      {/* Menu Navigasi */}
      <ul className="navbar-menu">
        <li><a href="#about">Tentang</a></li>
        <li><a href="#projects">Proyek</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
