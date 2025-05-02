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
          description="Évolution d'une Application Web Symfony"
          href="/mediatekformationsproject"
          imgSrc={`${import.meta.env.BASE_URL}/mediatekformations-preview.jpg`}
        />
        <ProjectPreview
          title="MediatekDocument"
          description="Évolution d'une Application de bureau C#"
          href="/mediatekdocumentsproject"
          imgSrc={`${import.meta.env.BASE_URL}/mediatekdocuments-preview.jpg`}
        />
      </div>
    </section>
  );
};

export default ProjectsPage;
