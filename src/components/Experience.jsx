import React from "react";
import "../css/Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 data-aos="fade-up">Work Experience</h2>
      <div className="exp-item" data-aos="fade-up" data-aos-delay="100">
        <h3>Full Stack Developer – Dice Academy, New Delhi | 6 Months (2024-2025)</h3>
        <ul>
          <li>Built and deployed full stack applications using React.js, Node.js, Express, and MongoDB.</li>
          <li>Designed REST APIs and integrated them with front-end apps, reducing data fetch times by 25%.</li>
          <li>Implemented authentication/authorization (JWT, sessions) and improved security compliance.</li>
          <li>Optimized SQL/MongoDB queries, improving response times by 30%.</li>
          <li>Collaborated in Agile sprints with cross-functional frontend & backend teams.</li>
        </ul>
      </div>
      <div className="exp-item" data-aos="fade-up" data-aos-delay="200">
        <h3>Teacher’s Assistant – Front-End Development</h3>
        <ul>
          <li>Delivered sessions on HTML, CSS, JavaScript, React.js, and Tailwind CSS.</li>
          <li>Mentored 20+ students, improving portfolio/project quality by 40%.</li>
          <li>Conducted Git/GitHub workshops and live project demos, enhancing version control skills.</li>
        </ul>
      </div>
      <div className="exp-item" data-aos="fade-up" data-aos-delay="300">
        <h3>Freelance Front-End Developer | (2024)</h3>
        <ul>
          <li>Built responsive, SEO-friendly, performance-optimized websites using React.js, Tailwind CSS, JavaScript.</li>
          <li>Reduced website load times by 30%, serving 1000+ daily users.</li>
          <li>Managed complete end-to-end project lifecycle: client communication, design, coding, testing, and deployment via Netlify/Vercel.</li>
        </ul>
      </div>
    </section>
  );
}
