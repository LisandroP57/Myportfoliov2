import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

export const NotFound = () => {
  useEffect(() => {
    document.title = "Página no encontrada | Lisandro Palavecino";
  }, []);

  return (
    <section className="notfound bg-tech">
      <div className="container notfound__inner">
        <span className="notfound__code">404</span>
        <h1 className="notfound__title">Esta página no existe!</h1>
        <p className="notfound__text">
          El enlace puede estar roto o la página ya no está disponible. Te sugiero volver al inicio
          para seguir navegando. 
        </p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    </section>
  );
};
