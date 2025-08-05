import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded"
  >
    {text}
  </button>
);

export default Button;
