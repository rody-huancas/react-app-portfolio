const Buttons = ({ link, Icono, texto }) => {
  return (
    <>
      <a className="skill__btn" href={link} target="_blank">
        <Icono /> {texto}
      </a>
    </>
  );
};

export const ContactMe = ({ url, Icon, social, name }) => {
  return (
    <>
      <a href={url} className="contact__container" target="_blank">
        <Icon className="contact__icon" />
        <div className="contact__social">
          <span className="contact__social-name">{social}</span>
          <span className="contact__social-user">{name}</span>
        </div>
      </a>
    </>
  );
};

export default Buttons;
