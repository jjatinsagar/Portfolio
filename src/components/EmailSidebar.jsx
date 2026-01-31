import React from "react";
import "../css/EmailSidebar.css";

export default function EmailSidebar({ pageLoaded }) {
  return (
    <div className={`email-sidebar ${pageLoaded ? "show" : ""}`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://mail.google.com/mail/u/0/?fs=1&to=jjatinsagar@gmail.com&tf=cm"
      >
        jjatinsagar@gmail.com
      </a>
    </div>
  );
}
