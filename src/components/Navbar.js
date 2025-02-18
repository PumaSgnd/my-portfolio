import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav style={{
      background: "#333",
      padding: "10px 20px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      zIndex: "1000",
      boxSizing: "border-box"
    }}>
      {/* Logo dan Nama */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={logo} alt="Logo PumaSgnd" style={{ height: "50px" }} />
      </div>

      {/* Menu Navigasi */}
      <ul style={{ display: "flex", listStyle: "none", gap: "40px", margin: 0, padding: 0 }}>
        <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>Tentang</a></li>
        <li><a href="#projects" style={{ color: "white", textDecoration: "none" }}>Proyek</a></li>
        <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Kontak</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
