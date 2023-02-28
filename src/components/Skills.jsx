// boton
import Buttons from "./Buttons";

// iconos
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiCodeigniter,
  SiGit,
  SiReact,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <Buttons link="https://html.com/" Icono={FaHtml5} texto="HTML" />

        <Buttons
          link="https://developer.mozilla.org/es/docs/Web/CSS"
          Icono={FaCss3}
          texto="CSS"
        />

        <Buttons link="https://sass-lang.com/" Icono={FaSass} texto="SASS" />

        <Buttons
          link="https://getbootstrap.com/"
          Icono={FaBootstrap}
          texto="Bootstrap"
        />

        <Buttons
          link="https://tailwindcss.com/"
          Icono={SiTailwindcss}
          texto="TailwindCss"
        />

        <Buttons
          link="https://www.javascript.com/"
          Icono={SiJavascript}
          texto="JavaScript"
        />

        <Buttons link="https://reactjs.org/" Icono={SiReact} texto="React" />

        <Buttons link="https://www.php.net/" Icono={FaPhp} texto="PHP" />

        <Buttons
          link="https://codeigniter.com/"
          Icono={SiCodeigniter}
          texto="Codeigniter"
        />

        {/* <Buttons
          link="https://laravel.com/"
          Icono={FaLaravel}
          texto="Laravel"
        /> */}

        <Buttons link="https://www.mysql.com/" Icono={GrMysql} texto="MySQL" />

        <Buttons
          link="https://www.microsoft.com/es-es/sql-server/sql-server-downloads"
          Icono={DiMsqlServer}
          texto="SQL Server"
        />

        <Buttons link="https://github.com/" Icono={FaGithub} texto="GitHub" />

        <Buttons link="https://git-scm.com/" Icono={SiGit} texto="GIT" />

        <Buttons link="https://www.figma.com/" Icono={FaFigma} texto="Figma" />
      </div>
    </>
  );
};

export default Skills;
