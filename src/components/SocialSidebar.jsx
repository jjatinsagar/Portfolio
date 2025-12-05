import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../css/SocialSidebar.css";

export default function SocialSidebar() {
  const links = [
    { icon: <FaGithub />, url: "https://github.com/jjatinsagar", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/jatin-sagar-99025922a", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://x.com/jjatinsagar", label: "Twitter" },
  ];

  return (
    <aside className="social-sidebar-alt">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
      <div className="vertical-line"></div>
    </aside>
  );
}
