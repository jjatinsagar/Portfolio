import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

      let currentSection = active;

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          currentSection = section.id;
        }
      });

      // If scrolled to bottom, force last section active
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        currentSection = sections[sections.length - 1].id;
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">JS</a>
      <ul className="nav-links">
        {["home", "about", "education", "experience", "projects", "contact"].map(
          (section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={active === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
