import { MdWork } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Timeline = ({
  proyecto,
  descripcion,
  tecnologias = [],
  repositorio,
  demo,
}) => {
  const [t] = useTranslation("global");

  const lista = tecnologias.map((tec) => (
    <span className="timeline__item" key={tec.toString()}>
      {tec}
    </span>
  ));

  return (
    <div className="timeline__container">
      <div className="timeline__icon">
        <MdWork />
      </div>
      <div className="timeline__body">
        <h4 className="timeline__title">{proyecto}</h4>
        <p className="timeline__descripcion">{descripcion}</p>
        <div className="timeline__tecnologias">{lista}</div>
        <div className="timeline__routes">
          <a
            href={repositorio}
            className="timeline__link"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> {t("timeline.timeline-repositorio")}
          </a>
          <a
            href={demo}
            className="timeline__link"
            target="_blank"
            rel="noreferrer"
          >
            <BiLinkExternal /> {t("timeline.timeline-demo")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
