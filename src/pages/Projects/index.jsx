import React, { useEffect } from "react";
import "./projects.css";

const PROJECTS = [
  {
    title: "Cuídate! E-commerce FullStack",
    description:
      "Primera app full-stack: registro, login, carrito, productos, categorías, búsqueda y panel de administración, con Sequelize/SQL y una API propia sobre Node.js. Realizada en Digital House - Fundacion Formar.",
    stack: ["JavaScript", "Node.js", "Sequelize", "SQL"],
    status: "in-progress",
    repo: "https://github.com/LisandroP57/c19-Grupo-3-Cuidate",
  },
  {
    title: "React Dashboard E-commerce",
    description:
      "Panel de administración con gráficos estadísticos, listado de productos y usuarios, login/registro con Formik y una API propia orientada a e-commerce.",
    stack: ["React", "Formik", "REST API"],
    status: "in-progress",
    repo: "https://github.com/LisandroP57/React-dashboard",
  },
  {
    title: "FinanzApp",
    description:
      "Aplicación web para registrar ingresos y gastos y ver cómo van las cuentas del mes, con gastos por categoría y evolución a lo largo del mes",
    stack: ["React 18", "Vite", "Recharts", "CSS con variables"],
    status: "live",
    demo: "https://finanzapplp.netlify.app",
    repo: "https://github.com/LisandroP57/FinanzApp",
  },
  {
    title: "Plataforma de APIs E-commerce",
    description:
      "API REST en Node.js para un e-commerce: alta, edición, baja y listado de productos y usuarios, carrito de compras y autenticación.",
    stack: ["Node.js", "REST API", "Auth"],
    status: "repo-only",
    repo: "https://github.com/LisandroP57/My-Ecommerce-APIs",
  },
  {
    title: "CalculApp",
    description:
      "Calculadora basica interactiva construida con React, con separación clara de componentes y hooks modernos.",
    stack: ["React", "Hooks"],
    status: "live",
    demo: "https://palavecino-calculapp.netlify.app/",
    repo: "https://github.com/LisandroP57/My-Ecommerce-APIs",
  },
  {
    title: "Proyectos de Digital House",
    description:
      "Trabajos grupales e individuales de desarrollo web aprobados durante la formación en Digital House.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "repo-only",
    repo: "https://github.com/LisandroP57/Digital-House-2022-2023",
  },
];

const STATUS_LABEL = {
  live: "Demo disponible",
  "in-progress": "En curso",
  "coming-soon": "Próximamente",
  "repo-only": "Código en repositorio",
};

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="project-card__top">
      <span className={`project-card__status project-card__status--${project.status}`}>
        {STATUS_LABEL[project.status]}
      </span>
    </div>

    <h3 className="project-card__title">{project.title}</h3>
    <p className="project-card__desc">{project.description}</p>

    <div className="project-card__stack">
      {project.stack.map((tech) => (
        <span key={tech} className="tag">{tech}</span>
      ))}
    </div>

    <div className="project-card__actions">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
          Ver demo
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
          Repositorio
        </a>
      )}
    </div>
  </article>
);

const Projects = () => {
  useEffect(() => {
    document.title = "Proyectos | Lisandro Palavecino";
  }, []);

  return (
    <section className="projects-section">
      <div className="container">
        <span className="section-eyebrow">Portfolio</span>
        <h1 className="section-title">Proyectos</h1>
        <p className="section-subtitle">
          Una selección de proyectos personales y de formación en los que trabajé,
          individualmente y en equipo.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
