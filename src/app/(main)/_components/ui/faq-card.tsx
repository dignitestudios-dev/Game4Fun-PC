"use client"
import { useState } from "react";
import {  Plus } from "lucide-react";

function FAQCard({faq}:{faq:Faq}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1c1b1b]  rounded-xl p-2">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-8 w-full px-4 py-4 text-left text-white"
      >
           <div
            
            className="bg-[linear-gradient(to_right,#C100FF,#FFBE96)] p-[1.2px] rounded-full flex"
          >
            <div className=" rounded-full w-10 h-10 flex items-center justify-center">
             <Plus/>
            </div>
          </div>
        <span className="tfont-medium">
          {/* How long does it take to build my custom gaming PC? */}
          {faq.question}
        </span>
    
      </button>

      {/* Dropdown Content */}
      <div
        className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300 text-sm pl-20">
     {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default FAQCard;
