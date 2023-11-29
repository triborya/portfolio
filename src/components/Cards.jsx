import "../assets/cards.css";
import AirBnb from "../assets/AirBnb.png";
import Portfolio from "../assets/Portfolio.png";
import PomodorroApp from "../assets/Pomodoro.png";
import Markdown from "../assets/Markdown.png";
import Rest from "../assets/Rest Countries.png";
import Calculatrice from "../assets/Calculatrice.png";
import Drum from "../assets/Drum Machine.png";
import Space from "../assets/Space Tourism.png";
import Random from "../assets/Random Quote.png";

function Cards() {
  const cards = [
    {
      id: "airbnb",
      image: AirBnb,
      title: "Airbnb-clone-2023",
      usedLanguages: ["tailwind ", "typescript ", "react ", "mongodb"],
    },
    {
      id: "portfolio",
      image: Portfolio,
      title: "portfolio",
      usedLanguages: ["typescript", "react"],
    },
    {
      id: "pomodorro",
      image: PomodorroApp,
      title: "Pomodoro app",
      usedLanguages: ["tailwind", "typescript", "react"],
    },
    {
      id: "markdown",
      image: Markdown,
      title: "editeur markdown ",
      usedLanguages: ["scss", "typescript", "react"],
    },
    {
      id: "rest",
      image: Rest,
      title: "REST Countries API",
      usedLanguages: ["tailwind", "typescript", "vue"],
    },
    {
      id: "calculatrice",
      image: Calculatrice,
      title: "Application de calculatrice",
      usedLanguages: ["tailwind", "typescript", "vue"],
    },
    {
      id: "drum",
      image: Drum,
      title: "Drum machine",
      usedLanguages: ["styled components", "typescript", "react"],
    },
    {
      id: "space",
      image: Space,
      title: "Site de Touorisme dans l’espace",
      usedLanguages: ["HTML ", "CSS ", "TypeScript"],
    },
    {
      id: "random",
      image: Random,
      title: "Random quote app",
      usedLanguages: ["css ", "react ", "api"],
    },
  ];

  return (
    <>
      <div className="topPartProjets">
        <h1 className="projets">Projets</h1>
        <button className="ProjetsButton">contactez-moi</button>
      </div>
      <div className="cardsGrid">
        {cards.map((card) => (
          <div key={card.id}>
            <img className="cardImage" src={card.image} alt={card.title} />
            <div className="cardTextDiv">
              <h2 className="cardTitle">{card.title}</h2>
              <p className="languagesUsed">
                <div className="lags">
                  {card.usedLanguages.map((usedLanguage) => (
                    <div>{usedLanguage}</div>
                  ))}
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
