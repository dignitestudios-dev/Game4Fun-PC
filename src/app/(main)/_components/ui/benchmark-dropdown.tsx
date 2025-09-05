import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  title: string;
  error?: string;
}

function BenchmarkDropdown({ icon, title, error, ...rest }: Props) {
  return (
    <div className="bg-[#1b1a1a] relative p-3 rounded-2xl md:w-[40%] w-[80%]">
      <div className="flex gap-4 items-center">
        {icon}
        <div className="w-full">
          <h5 className="mb-4 capitalize">{title}*</h5>
          <div className="relative w-full">
            <input
              placeholder={title}
              className={`border ${
                error ? "border-red-500" : "border-[#525151]"
              } w-full rounded-full p-2 px-6 bg-[#242323] outline-none`}
              {...rest}
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BenchmarkDropdown;
