import React from "react";
import "./LinkButton.css";

interface Props {
  additionalClassName?: string;
  children?: React.ReactNode;
  href?: string;
  type?: "default" | "social-media";
}

const LinkButton = ({
  additionalClassName = "",
  children,
  href = "#",
  type = "default",
}: Props) => {
  return (
    <a href={href} className={additionalClassName + " link-btn-" + type}>
      {children}
    </a>
  );
};

export default LinkButton;
