import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Librería de Traducción
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

// translates
import global_es from "./translations/es/global.json";
import projects_es from "./translations/es/projects.json";
import global_en from "./translations/en/global.json";
import projects_en from "./translations/en/projects.json";

// CSS
import "./index.css";
import "./assets/normalize.css";

// Inicializar i18next
i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
      project: projects_es,
    },
    en: {
      global: global_en,
      project: projects_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
