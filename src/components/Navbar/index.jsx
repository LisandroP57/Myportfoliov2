import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import "./navbar.css";

const NAV_ITEMS = [
  { to: "/", label: "Sobre mí", end: true },
  { to: "/projects", label: "Proyectos" },
  { to: "/skills", label: "Habilidades" },
  { to: "/contact", label: "Contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquea el scroll del body con el menu abierto y lo restaura
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Cierro con la tecla escape o si la pantalla pasa a tamaño escritorio
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    const onResize = () => window.innerWidth >= 900 && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const linkClass = ({ isActive }) => (isActive ? "nav-link nav-link--active" : "nav-link");

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__brand" onClick={() => setIsOpen(false)}>
          <img src={avatar} alt="Foto de Lisandro Palavecino" className="navbar__avatar" />
          <span>Lisandro Palavecino</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}
        aria-label="Navegación móvil"
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
