import { useTranslation } from "react-i18next";
import Timeline from "../components/Timeline";

const Projects = () => {
  const [t] = useTranslation("project");

  return (
    <>
      <div className="proyectos container">
        <h2 className="proyectos__titulo">{t("project.project-titulo")}</h2>
        <p className="proyectos__parrafo">{t("project.project-descripcion")}</p>
        <div className="timeline">
          <Timeline
            proyecto={t("project.project-5.titulo")}
            descripcion={t("project.project-5.descripcion")}
            tecnologias={t("project.project-5.tecnologias").split(",")}
            repositorio={t("project.project-5.repositorio")}
            demo={t("project.project-5.demo")}
          />
          <Timeline
            proyecto={t("project.project-4.titulo")}
            descripcion={t("project.project-4.descripcion")}
            tecnologias={t("project.project-4.tecnologias").split(",")}
            repositorio={t("project.project-4.repositorio")}
            demo={t("project.project-4.demo")}
          />
          <Timeline
            proyecto={t("project.project-3.titulo")}
            descripcion={t("project.project-3.descripcion")}
            tecnologias={t("project.project-3.tecnologias").split(",")}
            repositorio={t("project.project-3.repositorio")}
            demo={t("project.project-3.demo")}
          />
          <Timeline
            proyecto={t("project.project-2.titulo")}
            descripcion={t("project.project-2.descripcion")}
            tecnologias={t("project.project-2.tecnologias").split(",")}
            repositorio={t("project.project-2.repositorio")}
            demo={t("project.project-2.demo")}
          />
          <Timeline
            proyecto={t("project.project-1.titulo")}
            descripcion={t("project.project-1.descripcion")}
            tecnologias={t("project.project-1.tecnologias").split(",")}
            repositorio={t("project.project-1.repositorio")}
            demo={t("project.project-1.demo")}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
