"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first one open

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <div className="text-white transition-all ease-linear">
  <h2 className="font-semibold text-lg border-b border-white/20 px-4 py-3">
    Order Information
  </h2>
  {items.map((item, index) => (
    <div key={index} className="border-b border-white/20">
      <button
        className="w-full flex justify-between items-center px-4 py-3 focus:outline-none"
        onClick={() => toggle(index)}
      >
        <span className="font-medium">{item.title}</span>
        {openIndex === index ? (
          <Minus className="text-purple-400" size={18} />
        ) : (
          <Plus className="text-purple-400" size={18} />
        )}
      </button>

      {/* Animated content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-3 text-sm text-gray-300">{item.content}</div>
      </div>
    </div>
  ))}
</div>

  );
}
