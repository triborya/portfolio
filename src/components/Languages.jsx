import "../assets/languages.css";
function Langueages() {
  let langages = {
    html: "HTML",
    styledComponents: "Styled-components",
    typeScript: "TypeScript",
    css: "CSS",
    bulmaCss: "BulmaCss",
    angular: "Angular",
    sass: "SASS",
    javascript: "Javascript",
    react: "React",
  };

  return (
    <>
      <div className="languages">
        <div>
          <h3>{langages.html}</h3>
          <h3>{langages.styledComponents}</h3>
          <h3>{langages.typeScript}</h3>
        </div>
        <div>
          <h3>{langages.css}</h3>
          <h3>{langages.bulmaCss}</h3>
          <h3>{langages.angular}</h3>
        </div>
        <div>
          <h3>{langages.sass}</h3>
          <h3>{langages.javascript}</h3>
          <h3>{langages.react}</h3>
        </div>
      </div>
    </>
  );
}

export default Langueages;
