import { useState, useEffect } from "react";

// iconos
import { IoMdMoon } from "react-icons/io";
import { RiSunFill } from "react-icons/ri";

const Dark = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("isDarkMode", true);
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("isDarkMode", false);
    }
  }, [isDarkMode]);

  const handleDarkModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="btn__theme" onClick={handleDarkModeChange}>
      {isDarkMode ? (
        <IoMdMoon className="modo" />
      ) : (
        <RiSunFill className="modo " />
      )}
    </button>
  );
};

export default Dark;
