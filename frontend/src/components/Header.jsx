// Header.jsx - Navegação fixa com transição ao rolar

import { useEffect, useState } from "react";
import logo from "../assets/images/spa-logo.png";
import { waLink, MSG_AGENDAR } from "../config/site";

const LINKS = [
  { href: "#historia", label: "História" },
  { href: "#metodo", label: "O Método" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#resultados", label: "Resultados" },
  { href: "#location", label: "Onde estamos" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)} aria-label="SPA Lisiane Garroni — início">
          <img src={logo} alt="SPA Lisiane Garroni — Método Renata França" className="brand-logo" />
        </a>

        <button
          className={`hamburger${open ? " active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav${open ? " active" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={waLink(MSG_AGENDAR)}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
