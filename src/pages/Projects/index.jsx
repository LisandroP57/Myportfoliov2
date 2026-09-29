import React, { useEffect } from "react";
import "./projects.css";

const PROJECTS = [
  {
    title: "Dashboard Admin (E-commerce)",
    description:
      "Este es un dashboard para administración de un ecommerce, la primer version fue durante mis estudios en Digital House y utilizaba las APIS Propias, dando solo estadisticas de mi pagina, aca se agregaron: indicadores de ventas, gráficos, gestión de productos, pedidos y clientes. Es 100% funcional en el navegador, no necesita backend ni base de datos.",
    stack: ["React 18", "Formik", "Vitest", "Chart.js"],
    status: "live",
    demo: "https://dashboardAdminlp.netlify.app",
    repo: "https://github.com/LisandroP57/DashboardAdmin",
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
    title: "Tablero de tareas",
    description:
      "proyecto estilo kanban con columnas, tarjetas arrastrables, prioridades, asignación de tareas, fecha límite y comentarios. Cada equipo tiene sus propios tableros, pensado como herramienta interna.",
    stack: ["React + Vite", "Axios", "Node.js", "Express", "MySQL"],
    status: "in-progress",
    //demo: "https://TablerodeTareaslp.netlify.app",
    repo: "https://github.com/LisandroP57/taskboard",
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
    title: "Proyectos de Digital House",
    description:
      "Trabajos grupales e individuales de desarrollo web aprobados durante la formación en Digital House.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "repo-only",
    repo: "https://github.com/LisandroP57/Digital-House-2022-2023",
  },
  {
    title: "Cuídate! E-commerce FullStack",
    description:
      "Primera app full-stack: registro, login, carrito, productos, categorías, búsqueda y panel de administración, con Sequelize/SQL y una API propia sobre Node.js. Realizada en Digital House - Fundacion Formar.",
    stack: ["JavaScript", "Node.js", "Sequelize", "SQL","bcrypt"],
    status: "in-progress",
    repo: "https://github.com/LisandroP57/c19-Grupo-3-Cuidate",
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
        <span className="section-eyebrow">Mi portfolio</span>
        <h1 className="section-title">Proyectos</h1>
        <p className="section-subtitle">
          Una selección de proyectos personales y de formación en los que trabajé, tanto
          individualmente como en equipo.
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
