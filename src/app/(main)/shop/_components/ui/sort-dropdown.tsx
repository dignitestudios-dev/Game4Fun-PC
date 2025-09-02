"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By");

  const options = [
    "By Popularity",
    "Latest",
    "Alphabetical (Ascending)",
    "Alphabetical (Descending)",
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left ">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-56 bg-[#1d1d1d] border border-[#4c4c4c] text-white px-4 py-2 rounded-full shadow-sm"
      >
        {selected}
        <ChevronDown className="h-4 w-4 ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-60 bg-black/50 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-2 z-50">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              className={`block w-full text-left px-4 py-2 rounded-md text-white hover:bg-[#3a3a3a] ${
                selected === option ? "bg-[#3a3a3a]" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
