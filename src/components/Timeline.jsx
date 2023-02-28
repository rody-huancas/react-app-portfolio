import { MdWork } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const Timeline = ({
  proyecto,
  descripcion,
  tecnologias = [],
  repositorio,
  demo,
}) => {
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
          {repositorio.length >= 1 && (
            <a
              href={repositorio}
              className="timeline__link"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> Repositorio
            </a>
          )}
          <a
            href={demo}
            className="timeline__link"
            target="_blank"
            rel="noreferrer"
          >
            <BiLinkExternal /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
