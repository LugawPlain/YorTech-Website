import React from "react";
import "../app/styles/Input.css";
type props = {
  rows: number;
  placeholder?: string;
  className?: string;
  required?: boolean;
};

const Textarea: React.FC<props> = ({
  rows,
  placeholder,
  className = "",
  required,
}) => {
  return (
    <div className={`${className} form `}>
      <textarea
        rows={rows}
        className={` input `}
        placeholder={placeholder}
        required={required}
      />
      <span className="input-border"></span>
    </div>
  );
};

export default Textarea;
