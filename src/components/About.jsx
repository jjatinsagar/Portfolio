import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 data-aos="fade-up">About Me</h2>
      <p data-aos="fade-up" data-aos-delay="200">
        Full Stack Developer skilled in React.js, Node.js, Express, and MongoDB.
        Experienced in building scalable, high-performance applications with a focus
        on responsive UI, REST APIs, SEO optimization, and accessibility.
        Strong knowledge of Agile workflows, Git/GitHub collaboration, and deployments
        on Netlify, Vercel, and cloud platforms.
      </p>
    </section>
  );
}
