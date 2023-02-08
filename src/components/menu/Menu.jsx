import React from "react";
import "./menu.css";
import { useState } from "react";
import alfajor from "../../assets/alfajor.png";
import empanadas from "../../assets/empanadas-food.png";
import pastafrola from "../../assets/pastafrola.png";
import chipa from "../../assets/chipa.png";
import muffin from "../../assets/muffin.png";

export default function Menu() {
  const foods = [
    {
      name: "Empanada 🥟",
      image: empanadas,
      description:
        "Una empanada es una fina masa de pan, masa quebrada u hojaldre rellena con una preparación salada o dulce cocida al horno o frita. El relleno puede incluir carne rojas o blancas, pescado y verduras",
      price: "2€",
    },
    {
      name: "Muffins 🧁",
      image: muffin,
      description:
        "Elaborado con pan dulce y otros ingredientes, principalmente todo con dulces. Cocinado al horno en moldes.",
      price: "6€",
    },
    {
      name: "Chipa 🫓",
      image: chipa,
      description:
        "El chipá es un alimento a base de almidón de mandioca y queso, el cual es consumido en diferentes tiempos de comida.",
      price: "1€",
    },
    {
      name: "pasta frola 🥧",
      image: pastafrola,
      description:
        "consiste en una masa de tarta esponjosa, rellena con dulce de membrillo derretido y decorada con unas tiras de masa.",
      price: "2€",
    },
    {
      name: "Alfajores 🍘",
      image: alfajor,
      description:
        " constituido por dos o más galletitas, galletas o masa horneada, separadas entre sí por rellenos como mermeladas, jaleas, u otros dulces, pudiendo tener un baño o cobertura exterior",
      price: "1€",
    },
  ];

  const foodList = foods.map((food, i) => {
    return (
      <div className="food-card" key={i}>
        <img src={food.image} alt="" className="food-image" />
        <div className="container-desc">
          <h3 className="food-name">{food.name}</h3>
          <p className="food-desc">{food.description}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="container-menu">
      <h1 className="title">Nuestro menú 📃</h1>
      <div className="container-food">{foodList}</div>
    </div>
  );
}
