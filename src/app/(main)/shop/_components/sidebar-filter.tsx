"use client";

import React, { SetStateAction } from "react";

type FilterOption = {
  label: string;
  value: string;
};

type FilterSection = {
  title: string;
  options?: FilterOption[];
};

type SidebarFilterProps = {
  sections: FilterSection[];
  selected: { [key: string]: string[] };
  setSelected: React.Dispatch<SetStateAction<{ [key: string]: string[] }>>;
};

export default function SidebarFilter({
  sections,
  selected,
  setSelected,
}: SidebarFilterProps) {
  // const [selected, setSelected] = useState<{ [key: string]: string[] }>({});

  const toggleOption = (sectionTitle: string, value: string) => {
    setSelected((prev) => {
      const current = prev[sectionTitle] || [];
      return {
        ...prev,
        [sectionTitle]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div
      className="bg-[#2A292959]  lg:block hidden overflow-x-hidden rounded-2xl p-4 py-8 w-80 
      space-y-6 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent "
    >
      {/* Top Gradient Strip */}
      <div className="absolute bg-custom-gradient w-80 -left-0 h-2 top-1 rounded-t-2xl z-[10]" />

      {sections.map((section, idx) => (
        <div key={idx} className="relative">
          <h3 className="uppercase text-md tracking-widest pb-1 mb-3">
            {section.title}
          </h3>
          <div className="space-y-2">
            {section?.options?.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 cursor-pointer text-sm relative"
              >
                {/* Hidden native checkbox */}
                <input
                  type="checkbox"
                  checked={selected[section.title]?.includes(opt.value) || false}
                  onChange={() => toggleOption(section.title, opt.value)}
                  className="absolute opacity-0 w-4 h-4"
                />
                
                {/* Custom checkbox */}
                <span className={`w-4 h-4 rounded-sm border-2 border-pink-500 flex-shrink-0 flex items-center justify-center ${
                  selected[section.title]?.includes(opt.value) 
                    ? 'bg-pink-500' 
                    : 'bg-black'
                }`}>
                  {/* Checkmark - only show when checked */}
                  {selected[section.title]?.includes(opt.value) && (
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 8l4 4 8-8" />
                    </svg>
                  )}
                </span>
                {opt.label}
              </label>
            ))}
          </div>

          {/* Gradient Border Divider */}
          {idx !== sections.length - 1 && (
            <div className="mt-4 h-px w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
          )}
        </div>
      ))}
    </div>
  );
}