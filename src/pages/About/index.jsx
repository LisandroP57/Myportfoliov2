import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import "./about.css";

const STACK = ["React", "JavaScript", "Node.js", "MySQL", "HTML5", "CSS3"];

const About = () => {
  useEffect(() => {
    document.title = "Sobre mí  | Lisandro Palavecino";
  }, []);

  return (
    <section className="hero bg-tech">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="section-eyebrow">Programador Web FullStack</span>
          <h1 className="hero__title">
            Hola, soy Lisandro <span className="hero__wave" role="img" aria-label="saludo">👋</span>
          </h1>
          <p className="hero__lead">
            Construyo aplicaciones web completas, desde el front al back. Soy autodidacta y
            terminé de consolidar mis bases con una beca en Digital House. Hoy busco mi
            primera oportunidad en un equipo de IT, donde pueda seguir aprendiendo y aportar
            desde el primer día.

          </p>

          <div className="hero__stack">
            {STACK.map((tech) => (
              <span className="tag" key={tech}>{tech}</span>
            ))}
          </div>

          <div className="hero__actions">
            <Link to="/projects" className="btn btn-primary">Ver mis proyectos</Link>
            <Link to="/contact" className="btn btn-outline">Contactarme</Link>
          </div>

          <div className="hero__socials">
            <a href="https://linkedin.com/in/lpalavecinodvp/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/LisandroP57" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__avatar-frame">
            <img src={avatar} alt="Foto de Lisandro Palavecino" className="hero__avatar" />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Buenos Aires, Argentina
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
