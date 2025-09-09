"use client";
import React, { SetStateAction, useState } from "react";
import { ChevronDown } from "lucide-react";

const SortDropdown = ({setSortBy , sortBy}:{setSortBy:React.Dispatch<SetStateAction<{label:string; val:string}>> ,sortBy:{label:string , val:string}}) => {
  const [isOpen, setIsOpen] = useState(false);
const options = [
  // { label: "By Popularity", value: "popularity" },
  { label: "Latest", value: "latest" },
  { label: "Alphabetical (Ascending)", value: "alphabetic_asc" },
  { label: "Alphabetical (Descending)", value: "alphabetic_desc" },
];
  const handleSelect = (option: {label:string; val:string}) => {
    setSortBy(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left ">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between min-w-56 bg-[#1d1d1d] border border-[#4c4c4c] text-white px-4 py-2 rounded-full shadow-sm"
      >
        {sortBy.label}
        <ChevronDown className="h-4 w-4 ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-60 bg-black/50 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-2 z-50">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect({label:option.label , val:option.value})}
              className={`block w-full text-left px-4 py-2 rounded-md text-white hover:bg-[#3a3a3a] ${
                sortBy.val === option.value ? "bg-[#3a3a3a]" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
