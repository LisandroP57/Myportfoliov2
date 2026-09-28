import React, { useEffect } from "react";
import "./skills.css";

const DEVICON = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: DEVICON("html5") },
      { name: "CSS3", icon: DEVICON("css3") },
      { name: "JavaScript", icon: DEVICON("javascript") },
      { name: "React JS", icon: DEVICON("react") },
    ],
  },
  {
    title: "Backend & Bases de datos",
    skills: [
      { name: "Node JS", icon: DEVICON("nodejs") },
      { name: "MySQL", icon: DEVICON("mysql") },
      { name: "Sequelize", icon: DEVICON("sequelize") },
    ],
  },
  {
    title: "Explorando",
    skills: [{ name: "Next JS", icon: DEVICON("nextjs") }],
  },
];

const Skills = () => {
  useEffect(() => {
    document.title = "Habilidades | Lisandro Palavecino";
  }, []);

  return (
    <section className="skills-section">
      <div className="container">
        <span className="section-eyebrow">Stack</span>
        <h1 className="section-title">Habilidades</h1>
        <p className="section-subtitle">
          Tecnologías con las que trabajo habitualmente, organizadas por área.
        </p>

        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.title}>
            <h2 className="skill-group__title">{group.title}</h2>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <img src={skill.icon} alt={`Logo de ${skill.name}`} className="skill-card__icon" loading="lazy" />
                  <span className="skill-card__title">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
