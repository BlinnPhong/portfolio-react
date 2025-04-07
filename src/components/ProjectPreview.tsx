import React from "react";
import LinkButton from "./LinkButton";
import "./ProjectPreview.css";

interface Props {
  children?: string;
  imgSrc?: string;
  title?: string;
}

const ProjectPreview = ({
  children = "",
  imgSrc = `${import.meta.env.BASE_URL}/project-preview-template.jpg`,
  title = "Project Preview",
}: Props) => {
  return (
    <div className="project-preview">
      <div className="project-preview-content">
        <img src={imgSrc} alt="Project Preview Image"></img>
        <div className="project-preview-details">
          <h3>{title}</h3>
        </div>
      </div>

      <div className="readmore-btn">
        <LinkButton>En savoir +</LinkButton>
      </div>
    </div>
  );
};

export default ProjectPreview;
