import React from "react";
import "./contact.css";
import emailIcon from "../../assets/icons/emailIcon.png";
import mapIcon from "../../assets/icons/mapIcon.png";
import teleIcon from "../../assets/icons/teleIcon.png";
import calendarIcon from "../../assets/icons/calendarIcon.png";

export default function Contact() {
  const contacting = [
    {
      icon: mapIcon,
      title: "Encontranos en",
      description: "C/ Compañia, 15 - Málaga",
      link: "https://www.google.com.ar/maps/place/Calle+Compañía,+15,+29008+Málaga,+España/@36.7213262,-4.4254369,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f795fe47eb5b:0x554f894ea92ce555!8m2!3d36.7213262!4d-4.4232429!16s%2Fg%2F11b8v82sx7",
    },
    {
      icon: emailIcon,
      title: "Instagram",
      description: "elceibo.malaga",
      link: "https://instagram.com/elceibo.malaga?igshid=YmMyMTA2M2Y=",
    },
    { icon: teleIcon, title: "Llamanos a", description: "951 45 87 65" },
    {
      icon: calendarIcon,
      title: "Dias disponibles",
      description: "Lun-Sab: 11AM - 23PM; Dom: Closed",
    },
  ];

  const contactDivs = contacting.map((el) => {
    return (
      <div className="contact-card">
        <img src={el.icon} alt="" className="icon" />

        <div className="container-desc">
          <h1>
            <a
              href={el.link}
              className={el.link ? "link-to access" : "link-to"}
              target={"_blank"}
            >
              {el.title}
            </a>
          </h1>
          <h3 className="contact-desc">{el.description}</h3>
        </div>
      </div>
    );
  });
  return (
    <div className="container-contact">
      <div className="container-title">
        <h3 className="contact-title">Contacto</h3>
        <p className="contact-subtitle">¿Necesitas ayuda? Contactanos</p>
      </div>
      <div className="container-divs-contact">{contactDivs}</div>
    </div>
  );
}
