import React from "react";
import {
  /*BsFacebook, BsInstagram,*/ BsGithub,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";
// import s from './footer.css';

const Footer = () => {
  const github = "https://github.com/TomasTinto1234";
  const whatsapp = "https://wa.me/+541161263966";
  const linkedin = "linkedin.com/in/tomas-tinto-320a85236/";

  function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

  return (
    <div id="contacto">
      <footer>
        <p>E-commerce Tomas Tinto - © 2022</p>
        <div>
          {/* <a className={s.footerSpan} href={about} cursor='pointer'>
                    <span className={s.footerSpan}>Sobre nosotros</span>
                  </a> */}
          <a href={whatsapp} cursor="pointer">
            <span>Contact</span>
          </a>
                    <p>REDES</p>
          <div>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <BsLinkedin
                color="white"
                size="20px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"
              />
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <BsWhatsapp
                color="white"
                size="20px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"
              />
            </a>

            <a href={github} target="_blank" rel="noopener noreferrer">
              <BsGithub
                color="white"
                size="20px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"
              />
            </a>
          </div>
        </div>
      </footer>
    {/* </section> */}
                </div>
  );
};

export default Footer;
