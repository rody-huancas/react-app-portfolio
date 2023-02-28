import { Link } from "react-router-dom";

// componentes
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const About = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="about container">
        <h2 className="about__titulo">Sobre Mí</h2>
        <p className="about__descripcion">
          Hola!, soy Hilder Rody Huancas Chuquipoma, estudiante de la carrera de
          Ingeniería de Sistemas, actualmente me desempeño como desarrollador
          web frontend, pero también tengo conocimientos en backend. Soy una
          persona resolutiva, con capacidad para adaptarme a equipos y con ganas
          de seguir aprendiendo nuevas tecnologías.
        </p>
        <p className="about__descripcion">
          En mi aventura en el mundo del desarrollo web, me he involucrado en
          diferentes proyectos relacionados a la web, asumiendo nuevos retos y
          conociendo nuevas estrategias para corregir errores que se puedan
          presentar al desarrollar sitos web.
        </p>
        <p className="about__descripcion">
          Puedes ver mis trabajos en la sección de{" "}
          <Link className="about__enlace" to="/proyectos">
            Proyectos
          </Link>
          . También puedes ver los desafíos que he realizado en{" "}
          <a
            className="about__enlace"
            href="https://www.frontendmentor.io/profile/rody-huancas"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <h3 className="about__titulo">Mis Habilidades</h3>
        <p className="about__parrafo">Estas son mis tecnologías favoritas.</p>
        <Skills />
        <h3 className="about__titulo">Contáctame</h3>
        <p className="about__parrafo">
          Puedes contactarme mediante los siguientes medios.
        </p>
        <Contact />
      </div>
    </>
  );
};

export default About;
