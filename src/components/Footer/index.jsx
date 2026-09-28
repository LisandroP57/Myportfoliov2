import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./footer.css";

export const Footer = ({ autor }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logo} alt="Logo Lisandro Palavecino" className="footer__logo" />
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h2>Portfolio</h2>
            <Link to="/">Sobre mí</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/skills">Habilidades</Link>
          </div>

          <div className="footer__column">
            <h2>Más</h2>
            <Link to="/contact">Contactémonos</Link>
            <a href="https://drive.google.com/file/d/1WQmnXuLk6_46Gy29ayFfjAfM8qLFonpU/view" target="_blank" rel="noreferrer">
              CV Español
            </a>
            <a href="https://drive.google.com/file/d/1JrhcQ7zzeDd1aYXLAWSVmOFXI3FstEWR/view" target="_blank" rel="noreferrer">
              CV Inglés
            </a>
          </div>

          <div className="footer__column footer__socials">
            <h2>Redes Sociales</h2>
            <p>Seguíme en las redes sociales para ver más y poder estar comunicados.</p>
            <div className="footer__social-icons">
              <a
                href="https://www.linkedin.com/in/lpalavecinodvp/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://github.com/LisandroP57"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} {autor}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
