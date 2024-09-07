import React from "react";
import "../app/styles/Input.css";
type props = {
  type?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  htmlFor?: string;
};

const Input: React.FC<props> = ({
  type,
  htmlFor,
  placeholder,
  className = "",
  required,
}) => {
  return (
    <div className={`${className} form `}>
      <input
        className={` input `}
        placeholder={placeholder}
        required={required}
        type="text"
      />
      <span className="input-border"></span>
    </div>
  );
};

export default Input;
