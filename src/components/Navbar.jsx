import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let currentSection = active;

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          currentSection = section.id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        currentSection = sections[sections.length - 1].id;
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        JS
      </a>

      <ul className={`nav-links ${menuOpen ? "mobile" : ""}`}>
        {["home", "about", "education", "experience", "projects", "contact"].map(
          (section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={active === section ? "active" : ""}
                onClick={() => handleLinkClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }}></span>
        <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
        <span style={{ transform: menuOpen ? "rotate(-45deg) translate(6px,-6px)" : "none" }}></span>
      </div>
    </nav>
  );
}
