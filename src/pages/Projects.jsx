import { useState } from "react";
import { useTranslation } from "react-i18next";
import Timeline from "../components/Timeline";
import { projectsData } from "../helpers/Project";

const Projects = () => {
  const [t] = useTranslation("project");
  const [currentPage, setCurrentPage] = useState(1);

  window.scrollTo({ top: 0, behavior: "smooth" });

  const projectsPerPage = 4;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="proyectos container">
        <h2 className="proyectos__titulo">{t("project.project-titulo")}</h2>
        <p className="proyectos__parrafo">{t("project.project-descripcion")}</p>
        <div className="timeline">
          {currentProjects.map((project) => (
            <Timeline
              key={project.id}
              proyecto={t(project.titulo)}
              descripcion={t(project.descripcion)}
              tecnologias={t(project.tecnologias).split(",")}
              repositorio={t(project.repositorio)}
              demo={t(project.demo)}
            />
          ))}
        </div>
        <div className="paginacion">
          {Array.from(
            { length: Math.ceil(projectsData.length / projectsPerPage) },
            (_, i) => i + 1
          ).map((pageNumber) => (
            <button
              className={`paginacion__boton ${
                currentPage === pageNumber && "paginacion__active"
              }`}
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
