import React from "react";
import LinkButton from "./LinkButton";
import "./ProjectPreview.css";

interface Props {
  children?: string;
  description?: string;
  imgSrc?: string;
  title?: string;
  href?: string;
}

const ProjectPreview = ({
  children = "",
  description = "",
  imgSrc = `${import.meta.env.BASE_URL}/project-preview-template.jpg`,
  title = "Project Preview",
  href = "#",
}: Props) => {
  return (
    <div className="project-preview">
      <div className="project-preview-content">
        <img src={imgSrc} alt="Project Preview Image"></img>
        <div className="project-preview-details">
          <h3 className="title">{title}</h3>
          {description && description.trim() !== "" && (
            <p className="description">{description}</p>
          )}
        </div>
      </div>

      <div className="readmore-btn">
        <LinkButton href={href}>En savoir +</LinkButton>
      </div>
    </div>
  );
};

export default ProjectPreview;
