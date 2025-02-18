import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectsMobile from "./components/ProjectsMobile"; 
import Contact from "./components/Contact";
import "@fontsource/poppins";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <ProjectsMobile />
      <Contact />
    </div>
  );
}

export default App;
