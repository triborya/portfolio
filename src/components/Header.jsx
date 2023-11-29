import React from "react";
import "../assets/header.css";
import SectionImage from "../assets/Section.svg";
import EifelTowerImage from "../assets/EifelTower.png";

function Header() {
  let HeaderData = {
    author: "Ivan Petrov",
    title: "const Curious ; let Creative",
    subtitle:
      "Basé à Paris je suis un développeur Fullstack passionné par le developpement web & l’UX/UI",
  };

  return (
    <>
      <div className="Header">
        <div className="HeaderTextDiv">
          <h2>{HeaderData.author}</h2>
          <h1>{HeaderData.title}</h1>
          <p>{HeaderData.subtitle}</p>
          <button className="HeaderButton">contactez-moi</button>
        </div>
        <div className="EiffetImgDiv">
          <img
            src={EifelTowerImage}
            className="eifelTower"
            alt="Eiffel Tower"
          />
        </div>
      </div>
      <hr className="headerHr" />
    </>
  );
}

export default Header;
