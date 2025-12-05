import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Screen from "./components/Screen";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // AOS animation initialization
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });

    // Loading screen timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show loading screen only
    return <Screen />;
  }

  // Once loading is done, render full site
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
