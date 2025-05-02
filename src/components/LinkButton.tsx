import React from "react";
import "./LinkButton.css";
import { Link } from "react-router-dom";

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
    <Link to={href} className={additionalClassName + " link-btn-" + type}>
      {children}
    </Link>
  );
};

export default LinkButton;
