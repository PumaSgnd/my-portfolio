import React from "react";
import "../css/ProjectsMobile.css";

const projectsmobile = [
  { title: "CandyCrush Laundry", description: "Backend API dengan fitur manajemen playlist kolaboratif untuk layanan musik online.", link: "https://github.com/PumaSgnd/CandyCrush-LaundryApps" },
  { title: "POLA", description: "Aplikasi berbasis Flutter yang berfungsi untuk membantu dalam manajemen distribusi dan penarikan EDC di PT INTI Persero.", link: "https://github.com/PumaSgnd/POLA-Apps" },
  { title: "CCNI", description: "Aplikasi berbasis Flutter yang berfungsi untuk membantu dalam manajemen kolestrol pengguna.", link: "https://github.com/PumaSgnd/CCNI" },
  { title: "News App", description: "Aplikasi berbasis Flutter yang berfungsi untuk membantu pengguna dalam mencari berita internasional.", link: "https://github.com/PumaSgnd/News-Apps" },
  { title: "Buzz App", description: "UI Aplikasi berbasis Flutter yang berfungsi untuk membantu pengguna dalam memonitoring grup kerja.", link: "https://github.com/PumaSgnd/Mobile" },
  { title: "Emo App", description: "UI Aplikasi berbasis Flutter yang berfungsi untuk membantu pengguna perangkat berbasis IoT.", link: "https://github.com/PumaSgnd/Mobile" },
];

const ProjectsMobile = () => {
  return (
    <section id="projectsmobile">
      <h2>Proyek Mobile</h2>
      <div className="projectsmobile-container">
        {projectsmobile.map((project, index) => (
          <div className="projectsmobile-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              Lihat Proyek
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsMobile;
