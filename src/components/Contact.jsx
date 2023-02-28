// componente
import { ContactMe } from "./Buttons";

import { HiOutlineMail } from "react-icons/hi";
import { FiCodepen, FiInstagram } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <ContactMe
          url="mailto:rodyhuancas.04@gmail.com"
          Icon={HiOutlineMail}
          social="Email"
          name="@rodyhuancas.04"
        />

        <ContactMe
          url="https://www.linkedin.com/in/hilder-rody-huancas-chuquipoma-ba8138253/"
          Icon={BsLinkedin}
          social="Linkedin"
          name="@rodyhuancas"
        />
        <ContactMe
          url="https://github.com/rody-huancas"
          Icon={BsGithub}
          social="GitHub"
          name="@rody-huancas"
        />
        <ContactMe
          url="https://codepen.io/rodyhuancas"
          Icon={FiCodepen}
          social="Codepen"
          name="@rodyhuancas"
        />
        <ContactMe
          url="https://twitter.com/rodyhuancas"
          Icon={BsTwitter}
          social="Twitter"
          name="@rodyhuancas"
        />
        <ContactMe
          url="https://www.facebook.com/rody.huancaschuquipoma.7"
          Icon={ImFacebook2}
          social="Facebook"
          name="Rody Huancas"
        />
        <ContactMe
          url="https://www.instagram.com/rody.huancas/"
          Icon={FiInstagram}
          social="Instragram"
          name="@rody.huancas"
        />
      </div>
    </>
  );
};

export default Contact;
