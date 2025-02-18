import React from "react";
import "../css/ProjectsMobile.css";

const projectsmobile = [
  { title: "CandyCrush Laundry", description: "Backend API dengan fitur manajemen playlist kolaboratif untuk layanan musik online.", link: "https://github.com/PumaSgnd/CandyCrush-LaundryApps" },
  { title: "POLA", description: "Aplikasi berbasis Flutter yang berfungsi untuk membantu dalam manajemen distribusi dan penarikan EDC di PT INTI Persero.", link: "https://github.com/PumaSgnd/POLA-Apps" },
  { title: "CCNI", description: "Aplikasi berbasis Flutter yang berfungsi untuk membantu dalam manajemen kolestrol pengguna.", link: "https://github.com/PumaSgnd/CCNI" },
  { title: "News App", description: "Aplikasi berbasis Flutter yang berfungsi untuk pengguna membantu pengguna dalam mencari berita internasional.", link: "https://github.com/PumaSgnd/News-Apps" },
];

const ProjectsMobile = () => {
  return (
    <section id="projectsmobile">
      <h2>Proyek Mobile</h2>
      <div className="projectsmobile-container">
        {projectsmobile.map((project) => (
          <div className="projectsmobile-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="projectsmobile-link">Lihat Proyek</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsMobile;
