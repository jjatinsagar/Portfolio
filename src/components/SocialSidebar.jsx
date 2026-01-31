import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../css/SocialSidebar.css";

export default function SocialSidebar({ pageLoaded }) {
  const links = [
    { icon: <FaGithub />, url: "https://github.com/jjatinsagar", label: "GitHub" },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/jatin-sagar-99025922a",
      label: "LinkedIn",
    },
    { icon: <FaTwitter />, url: "https://x.com/jjatinsagar", label: "Twitter" },
  ];

  return (
    <aside className={`social-sidebar-alt ${pageLoaded ? "show" : ""}`}>
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          style={{ "--i": index }}
        >
          {link.icon}
        </a>
      ))}
      <div className="vertical-line"></div>
    </aside>
  );
}
