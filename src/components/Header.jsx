import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// componentes
import Dark from "./Dark";
import Language from "./Language";

// iconos
import { RiHomeLine, RiUserLine, RiBriefcaseLine } from "react-icons/ri";

const Header = () => {
  const [t] = useTranslation("global");

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScrollEvent = () => {
    setIsScrolled(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <header className={`${isScrolled && "scroll-header"} header`}>
        <nav className="nav container">
          <Link className="nav__logo" to="/">
            Rody<span>.</span>
          </Link>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  className={`${
                    location.pathname === "/" && "active-link"
                  } nav__link `}
                  to="/"
                >
                  <i>
                    <RiHomeLine />
                  </i>
                  <span>{t("header.home")}</span>
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  className={`${
                    location.pathname === "/sobremi" && "active-link"
                  } nav__link `}
                  to="/sobremi"
                >
                  <i>
                    <RiUserLine />
                  </i>
                  <span>{t("header.about")}</span>
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  className={`${
                    location.pathname === "/proyectos" && "active-link"
                  } nav__link `}
                  to="/proyectos"
                >
                  <i>
                    <RiBriefcaseLine />
                  </i>
                  <span>{t("header.projects")}</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="header__change-theme">
            <Language />
            <Dark />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
