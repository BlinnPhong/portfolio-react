import React from "react";
import "./Button.css";

interface Props {
  additionalClassName?: string;
  children?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  additionalClassName = "",
  children,
  onClick,
  type = "button",
}: Props) => {
  return (
    <button
      className={additionalClassName + " btn"}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
