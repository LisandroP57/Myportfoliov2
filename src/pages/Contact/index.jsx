import React, { useEffect, useState } from "react";
import "./contact.css";

const EMAIL = "lisandropalavecino1@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Contacto | Lisandro Palavecino";
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <section className="contact-section bg-tech">
      <div className="container contact__inner">
        <span className="section-eyebrow">Hablemos</span>
        <h1 className="contact__title">¿Tenés una propuesta o una consulta?</h1>
        <p className="contact__lead">
          Estoy buscando activamente mi primera oportunidad en IT. Escribime por
          este medio o mis redes, te respondo a la brevedad.
        </p>

        <div className="contact__actions">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            Enviar un email
          </a>
          <button type="button" className="btn btn-outline" onClick={copyEmail}>
            {copied ? "¡Copiado!" : "Copiar email"}
          </button>
        </div>

        <div className="contact__socials">
          <a href="https://www.linkedin.com/in/lpalavecinodvp/" target="_blank" rel="noreferrer" className="contact__social">
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            LinkedIn
          </a>
          <a href="https://github.com/LisandroP57" target="_blank" rel="noreferrer" className="contact__social">
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
