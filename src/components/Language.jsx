import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// iconos
import { IoMdArrowDropdown } from "react-icons/io";

const Language = () => {
  const [t, i18n] = useTranslation("global");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsDropdownOpen(false);
    localStorage.setItem("language", language);
  };

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, []);

  return (
    <div className="header__idioma">
      <button
        className="header__button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {i18n.language === "es" ? "Español" : "English"} <IoMdArrowDropdown />
      </button>
      {isDropdownOpen && (
        <div className="header__dropdown">
          <button
            className="header__dropdown-option"
            onClick={() => handleLanguageChange("es")}
          >
            {t("language.es")}
          </button>
          <button
            className="header__dropdown-option"
            onClick={() => handleLanguageChange("en")}
          >
            {t("language.en")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Language;
