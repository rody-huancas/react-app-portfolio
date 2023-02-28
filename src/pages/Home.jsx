// iconos
import { BsGithub } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

const Home = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="inicio container">
        <span className="inicio__saludo">Hola, mi nombre es</span>
        <h1 className="inicio__nombre">Rody Huancas</h1>
        <span className="inicio__area">Desarrollador Web</span>
        <p className="inicio__descripcion">
          Me apasiona la programación y aprender nuevas tecnologías.
        </p>
        <div className="inicio__botones-grupo">
          <a
            href="https://github.com/rody-huancas"
            target="_blank"
            className="inicio__boton inicio__github"
          >
            <BsGithub className="inicio__boton-icon" /> GitHub
          </a>
          <a
            href="pdf/rody.pdf"
            download="pdf/rody.pdf"
            target="_blank"
            className="inicio__boton inicio__cv"
          >
            <HiOutlineDocumentText className="inicio__boton-icon" /> Descargar
            CV
          </a>
        </div>

        <div className="inicio__frase">
          <div className="inicio__frase-imagen">
            <svg
              viewBox="0 0 48 45"
              className="inicio__frase-comilla"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.95 20.76v3.8h9.491V45H0V20.76C0 13.048 2.22 7.32 6.597 3.737 9.625 1.256 13.458 0 17.99 0v10.95c-2.46 0-7.04 0-7.04 9.81Zm33.79-9.81V0c-4.532 0-8.365 1.257-11.393 3.736-4.378 3.584-6.597 9.311-6.597 17.025V45h20.44V24.56H37.7v-3.8c0-9.81 4.58-9.81 7.04-9.81Z"></path>
            </svg>
          </div>
          <div className="inicio__frase-descripcion">
            <p className="inicio__frase-texto">
              Si lo puedes imaginar, lo puedes programar.
            </p>
            <span className="inicio__frase-autor">- Alejandro Taboada.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
