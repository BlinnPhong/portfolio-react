import React from "react";
import "./ProjectParagraph.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

const ProjectParagraph = ({
  children,
  className = "",
  title = "Titre",
}: Props) => {
  return (
    <div className={`project-paragraph ${className}`}>
      <h3 className="titre">{title}</h3>
      <div className="content">{children}</div>
    </div>
  );
};

export default ProjectParagraph;
