import React, { useRef } from "react";
import "./topBar.css";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/icons/hamburger.png";
import closeIcon from "../../assets/icons/closeIcon.png";
export default function TopBar({ selected }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className="header">
      <img src={logo} alt="El Ceibo logo" className="topbar-logo" />

      <nav ref={navRef} className={"nav"}>
        <a
          href="/"
          className={
            selected === "home" ? "topbar-options selected" : "topbar-options"
          }
        >
          Principio
        </a>

        <a
          href="/menu"
          className={
            selected === "menu" ? "topbar-options selected" : "topbar-options"
          }
        >
          Menu
        </a>

        <a
          href="/about"
          className={
            selected === "about" ? "topbar-options selected" : "topbar-options"
          }
        >
          Nosotros
        </a>

        <a
          href="/contact"
          className={
            selected === "contact"
              ? "topbar-options selected"
              : "topbar-options"
          }
        >
          Contacto
        </a>

        <button
          onClick={() => {
            showNavbar();
          }}
          className="hamburger topbar-options"
        >
          Cerrar
        </button>
      </nav>
      <img
        src={hamburger}
        alt=""
        width={60}
        height={60}
        onClick={() => showNavbar()}
        className={"hamburger"}
      />
    </header>
  );
}
