import React, { useEffect, useState } from "react";
import "../css/Screen.css";

const Screen = () => {
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`screen ${slide ? "slide-up" : ""}`}>
      <div className="loader-wrapper">
        <svg className="loader" width="120" height="120" viewBox="0 0 120 120">
          <circle
            className="track"
            cx="60"
            cy="60"
            r="50"
            stroke="#ccc"
            strokeWidth="10"
            fill="none"
          />
          <circle
            className="progress"
            cx="60"
            cy="60"
            r="50"
            stroke="#64ffda"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div className="loader-text">JS</div>
      </div>
    </div>
  );
};

export default Screen;
