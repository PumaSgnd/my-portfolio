import React from "react";
import "../css/Projects.css";

const projects = [
  { title: "Web Portfolio", description: "Website berbasis React Js dan Node.js yang berisi informasi pemilik website.", link: "https://github.com/PumaSgnd/my-portfolio" },
  { title: "OpenMusic API", description: "Backend API dengan fitur manajemen playlist kolaboratif untuk layanan musik online.", link: "https://github.com/PumaSgnd/Openmusic-apiv3" },
  { title: "CandyCrush Laundry", description: "Backend API dengan fitur manajemen laundry berbasis web.", link: "https://github.com/PumaSgnd/WebCandyCrush-Laundry" },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyek Website</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
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

export default Projects;
