import React from "react";
import parse from 'html-react-parser';

interface CardProps {
    title: string;
    textContent: string;
}

const Card = ({ title, textContent }: CardProps) => {
  return (
      <div>
        <div className="title">
            <p>{title}</p>
        </div>
        <div className="content">
            <p>{parse("" + textContent)}</p>
        </div>
      </div>
  );
}

export default Card;
