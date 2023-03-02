import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// componentes
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const About = () => {
  const [t] = useTranslation("global");

  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="about container">
        <h2 className="about__titulo">{t("about.about-titulo")}</h2>
        <p className="about__descripcion">{t("about.about-descripcion-one")}</p>
        <p className="about__descripcion">{t("about.about-descripcion-two")}</p>
        <p className="about__descripcion">
          {t("about.about-descripcion-three")}{" "}
          <Link className="about__enlace" to="/proyectos">
            {t("about.about-descripcion-three-one")}{" "}
          </Link>
          . {t("about.about-descripcion-three-two")}{" "}
          <a
            className="about__enlace"
            href="https://www.frontendmentor.io/profile/rody-huancas"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <h3 className="about__titulo">{t("about.about-skills-titulo")}</h3>
        <p className="about__parrafo">{t("about.about-skills-subtitulo")}</p>
        <Skills />
        <h3 className="about__titulo">{t("about.about-contacto-titulo")}</h3>
        <p className="about__parrafo">{t("about.about-contacto-subtitulo")}</p>
        <Contact />
      </div>
    </>
  );
};

export default About;
