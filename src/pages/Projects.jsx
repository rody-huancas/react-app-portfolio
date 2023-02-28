import { useState } from "react";
// componentes
import Timeline from "../components/Timeline";
// helpers
import proyectos from "../helpers/proyecto";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 4;

  const getElementsToShow = () => {
    const firstIndex = (currentPage - 1) * elementsPerPage;
    const lastIndex = firstIndex + elementsPerPage;
    return proyectos.slice(firstIndex, lastIndex);
  };

  const pageCount = Math.ceil(proyectos.length / elementsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      const isActive = currentPage === i;
      window.scrollTo({ top: 0, behavior: "smooth" });
      pageNumbers.push(
        <li className="paginacion__lista" key={i}>
          <button
            className={`paginacion__boton ${isActive && "paginacion__active"}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="proyectos container">
        <h2 className="proyectos__titulo">Mis Proyectos</h2>
        <p className="proyectos__parrafo">
          En esta sección podrás ver mis proyectos más destacados.
        </p>
        <div className="timeline">
          {getElementsToShow().map((proyecto, index) => (
            <Timeline
              key={index}
              proyecto={proyecto.proyecto}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              repositorio={proyecto.repositorio}
              demo={proyecto.demo}
            />
          ))}
        </div>
        <ul className="paginacion">{renderPageNumbers()}</ul>
      </div>
    </>
  );
};

export default Projects;
