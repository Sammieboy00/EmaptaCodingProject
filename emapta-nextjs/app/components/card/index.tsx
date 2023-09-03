import React from "react";
import parse from 'html-react-parser';

interface CardProps {
    title: string;
    textContent: string;
}

const Card = ({ title, textContent }: CardProps) => {
  return (
      <div className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <h3>{title}</h3>
        </div>
        <div className="font-normal text-gray-700 dark:text-gray-400">
            <p>{parse("" + textContent)}</p>
        </div>
      </div>
  );
}

export default Card;
