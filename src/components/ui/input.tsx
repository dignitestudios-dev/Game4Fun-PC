import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="w-full">
      <input
        placeholder={label}
        {...props}
        className="w-full px-4 py-3 rounded-full bg-[#1d1d1d] border border-[#FFFFFF36] text-[#FFFFFF] placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition"
      />
    </div>
  );
};

export default Input;
