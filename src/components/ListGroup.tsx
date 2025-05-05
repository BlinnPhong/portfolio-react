import React from "react";
import "./ListGroup.css";

interface Props {
  className?: string;
  items: React.ReactElement[];
}

const ListGroup = ({ className = "", items }: Props) => {
  return (
    <>
      <ul className={`${className}`}>
        {items.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
