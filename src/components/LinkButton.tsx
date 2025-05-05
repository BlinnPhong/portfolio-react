import React from "react";
import "./LinkButton.css";
import { Link } from "react-router-dom";

interface Props {
  additionalClassName?: string;
  children?: React.ReactNode;
  href?: string;
  type?: "default" | "social-media";
  isExternal?: boolean;
}

const LinkButton = ({
  additionalClassName = "",
  children,
  href = "#",
  type = "default",
  isExternal = false,
}: Props) => {
  return isExternal ? (
    <a
      href={href}
      target="_blank"
      className={additionalClassName + " link-btn-" + type}
    >
      {children}
    </a>
  ) : (
    <Link to={href} className={additionalClassName + " link-btn-" + type}>
      {children}
    </Link>
  );
};

export default LinkButton;
