import React from "react";
import "./about.css";
import localPhoto from "../../assets/localPhoto.png";
import localPhotoTwo from "../../assets/localPhotoTwo.png";

export default function About() {
  return (
    <div className="container-about">
      <div className="container-title">
        <h3 className="about-title">Sobre nosotros 😋</h3>
        <p className="about-subtitle">Lee un poco mas sobre nosotoros 🤓</p>
      </div>

      <div className="container-about-description">
        <img src={localPhoto} alt="" className="about-img" />

        <div className="container-about-description-text">
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. <br /> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li className="description-text-li">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="description-text-li">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="description-text-li">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          <p className="description-text">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
          <img src={localPhotoTwo} alt="" className="about-img-two" />
        </div>
      </div>
    </div>
  );
}
