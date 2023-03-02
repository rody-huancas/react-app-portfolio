import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <footer className="footer container">
        <div className="footer__desarrollador">
          <p>
            {t("footer.footer-desarrollador")} <span>Rody Huancas</span>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
