import React from "react";
import profilePhoto from "../assets/profile.png";
import "../css/about.css";
import "../css/css.css";

const About = () => {
  return (
    <section id="about">
      <h2>Tentang Saya</h2>
      <img
        src={profilePhoto}
        alt="Foto Profil"
        className="profile-photo"
      />
      <p>
        Perkenalkan Saya <strong>Boma Fira Suganda</strong> bisa dan akrab di panggil <strong>Boma</strong>. Saya seorang Software Engineer dengan pengalaman di pengembangan Web dan Mobile.
        Saya memiliki pengalaman dalam pengembangan <strong>Web</strong> menggunakan <strong>Node.js</strong> dan <strong>Mobile</strong> menggunakan <strong>Flutter</strong>.
      </p>
    </section>
  );
};

export default About;
