import React from "react";
import ProjectPreview from "../ProjectPreview";
import "./StagesPage.css";

const StagePage = () => {
  return (
    <section className="stages" id="stages">
      <h2 className="heading">
        Mes <span className="hint">Stages</span> en Entreprise
      </h2>

      <div className="stages-container">
        <ProjectPreview
          title="idIA Tech"
          description="Stage Développeur Web Mining (2024)"
          href="/idiatechstage"
          imgSrc={`${import.meta.env.BASE_URL}/idia_tech_cover.jpg`}
        />
      </div>
    </section>
  );
};

export default StagePage;
