import React from "react";
import "./home.css";
import flag from "../../assets/argentina.png";
import typicalFood from "../../assets/empanadas.png";
import pin from "../../assets/pin.png";

export default function Home() {
  return (
    <div className="container-home">
      <div className="container-subtitle">
        <h2 className="subtitle">
          Disfrutá de las comidas típicas en Argentina 😋
        </h2>

        <p className="description">
          Las comidas más ricas de nuestro país, podés disfrutarlas gracias a
          nuestro local. Principalmente hacemos empanadas 🤩
        </p>
        <div className="container-ubication">
          <img src={pin} alt="pin" width={20} height={20} />
          <p className="description">C/ Compañia, 15 - Málaga</p>
        </div>
        <img src={flag} alt="banderas" className="flag" />
      </div>

      <div>
        <img src={typicalFood} alt="empanadas" className="food-img" />
      </div>
    </div>
  );
}
