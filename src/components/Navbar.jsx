import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";

const links = [
  ["Home", "home"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["About / Contact", "about"],
];

export default function Navbar({ isProject = false }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(isProject ? "projects" : "home");
  const header = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        header.current?.querySelector(".menu-toggle")?.focus();
      }
      if (
        event.type === "pointerdown" &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", close);
      document.addEventListener("pointerdown", close);
    }
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", close);
    };
  }, [open]);
  useEffect(() => {
    if (isProject) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    links.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [isProject]);
  return (
    <header className="site-header" ref={header}>
      <div className="container nav-bar">
        <a className="wordmark" href="/#home" aria-label="Ayushi Baidya, home">
          <span className="monogram" aria-hidden="true">
            ab.
          </span>
          <span>
            Ayushi Baidya
            <span className="wordmark-role">Software Engineer</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          className={`primary-nav${open ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`/#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
