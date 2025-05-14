import React from "react";
import "./MuzaButton.css";

interface MuzaButtonProps {
  content: string;
}

const MuzaButton: React.FC<MuzaButtonProps> = ({ content, ...props }) => {
  return (
    <div className="muza-button" {...props}>
      {" "}
      {content}{" "}
    </div>
  );
};

export default MuzaButton;
