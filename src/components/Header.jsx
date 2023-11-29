import React from "react";
import "../assets/header.css";
import SectionImage from "../assets/Section.svg";
import EifelTowerImage from "../assets/EifelTower.png";

function Header() {
  let HeaderData = {
    author: "Gorobcov Dmitrie",
    title: "Some non informativ bullshit about me",
    subtitle: "Even more non informativ bullshit about me",
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
