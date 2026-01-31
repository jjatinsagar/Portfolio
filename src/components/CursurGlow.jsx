import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e) => {
      setActive(true);
      setPos({ x: e.clientX, y: e.clientY });
    };

    const leave = () => {
      setActive(false);
    };

    const blur = () => {
      setActive(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    window.addEventListener("blur", blur);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) setActive(false);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("blur", blur);
      document.removeEventListener("visibilitychange", blur);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(
          700px 700px at ${pos.x}px ${pos.y}px,
          rgba(0, 140, 255, 0.25),
          transparent 70%
        )`,
        transition: "background 0.15s ease-out",
      }}
    />
  );
}
