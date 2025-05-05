import React from "react";
import "./idiaTechStagePage.css";
import ProjectParagraph from "../ProjectParagraph";

const IdiaTechStagePage = () => {
  return (
    <section className="idiatech-stage" id="idiatech-stage">
      <h2 className="heading">
        Mon stage chez <span className="hint">idIA Tech</span>
      </h2>
      <div className="idiatech-stage-content">
        <ProjectParagraph title="Introduction">
          <p>
            Durant ma deuxième année de BTS Services Informatiques aux
            Organisations (option SLAM), j’ai eu l’opportunité d’effectuer un
            stage de deux mois au sein de l’entreprise idIA Tech, spécialisée
            dans le web mining, un domaine que je connaissais peu. Si j’ai
            choisi de postuler dans cette entreprise, c’est avant tout parce que
            je suis naturellement curieux et toujours motivé à élargir mes
            compétences. Ce stage représentait donc une réelle opportunité de
            découvrir un secteur innovant et stimulant de l’informatique.
          </p>
        </ProjectParagraph>
      </div>
    </section>
  );
};

export default IdiaTechStagePage;
