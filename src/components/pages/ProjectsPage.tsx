import React from "react";
import "./ProjectsPage.css";
import ProjectPreview from "../ProjectPreview";

const ProjectsPage = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        Mes <span className="hint">Projets</span>
      </h2>

      <div className="projects-container">
        <ProjectPreview
          title="MediatekFormation"
          description="Évolution d'une Application Web Symfony (2024)"
          href="/mediatekformationsproject"
          imgSrc={`${import.meta.env.BASE_URL}/mediatekformations-preview.jpg`}
        />
        <ProjectPreview
          title="MediatekDocument"
          description="Évolution d'une Application de bureau C# (2024)"
          href="/mediatekdocumentsproject"
          imgSrc={`${import.meta.env.BASE_URL}/mediatekdocuments-preview.jpg`}
        />
        <ProjectPreview
          title="idIA Tech"
          description="Stage Développeur (2024)"
          href="/idiatechstage"
          imgSrc={`${import.meta.env.BASE_URL}/idia_tech_cover.jpg`}
        />
      </div>
    </section>
  );
};

export default ProjectsPage;
