import React from "react";
import "../css/Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Netflix UI Clone",
      description: "Responsive mobile-first design",
      tech: ["HTML", "CSS"],
      link: "https://jjatinsagar.github.io/NETFLIX/",
    },
    {
      "name" : "Workflow pipeline designer",
      "description" : "A web application to design and visualize workflow pipelines using drag-and-drop functionality.",
      "tech" : [ "React.js", "D3.js", "Node.js", "Express", "MongoDB" ],
      "link" : "https://jjatinsagar.github.io/workflow-pipeline-designer/"
    },
    {
      name: "Myntra-like Shopping App",
      description: "Full stack app with product search, sticky header, responsive UI",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      link: "https://jjatinsagar.github.io/myntra-base/",
    },
    {
      name: "User Profile Viewer",
      description: "React.js, React Router, API integration",
      tech: ["React.js", "API Integration"],
      link: "https://jjatinsagar.github.io/vite-project/",
    },
    {
      name: "Calculator App",
      description: "Vanilla JavaScript with real-time functionality",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://jjatinsagar.github.io/Calculator-/",
    },
     {
  name: "Swiggy Food Ordering Clone",
  description: "Food ordering web app with live restaurant data, search, filtering, cart functionality, and responsive UI",
  tech: ["React.js", "Redux", "Tailwind CSS", "JavaScript", "API Integration"],
  link: "https://jjatinsagar.github.io/Swiggy/",
},
{
  name: "Shopping Cart App",
  description: "React-based cart application with product listing, add/remove items, and dynamic total calculation",
  tech: ["React.js", "JavaScript", "CSS"],
  link: "https://jjatinsagar.github.io/cart/",
},
{
  name: "Digital Clock",
  description: "Simple digital clock web app with real-time updates and minimal UI",
  tech: ["JavaScript", "HTML", "CSS"],
  link: "https://jjatinsagar.github.io/clock/",
},
  ];

  return (
    <section id="projects" className="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="project-list">
        {projects.map((project, i) => (
          <div className="project-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, index) => (
                <span className="tech" key={index}>{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
