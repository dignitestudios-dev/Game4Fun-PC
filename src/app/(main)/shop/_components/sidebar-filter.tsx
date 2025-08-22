"use client";

import { useState } from "react";

type FilterOption = {
  label: string;
  value: string;
};

type FilterSection = {
  title: string;
  options: FilterOption[];
};

type SidebarFilterProps = {
  sections: FilterSection[];
};

export default function SidebarFilter({ sections }: SidebarFilterProps) {
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({});

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
      className="bg-[#2A292959] lg:block hidden overflow-x-hidden rounded-2xl p-4 py-8 w-72 
      space-y-6 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent "
    >
      {/* Top Gradient Strip */}
      <div className="absolute bg-custom-gradient w-72 -left-0 h-2 top-1 rounded-t-2xl z-[10]" />

      {sections.map((section, idx) => (
        <div key={idx} className=" relative">
          <h3 className="uppercase text-md tracking-widest pb-1 mb-3">
            {section.title}
          </h3>
          <div className="space-y-2">
            {section.options.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="accent-pink-500"
                  checked={selected[section.title]?.includes(opt.value) || false}
                  onChange={() => toggleOption(section.title, opt.value)}
                />
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
