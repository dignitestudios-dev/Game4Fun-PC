"use client";
import React from "react";
import {  Check } from "lucide-react";
import ArrowBtn from "./ui/arrow-btn";

type Props = {
    title:string;
    description?:string;
    onClose?:()=>void
};

function Popup({title , description , onClose}:Props) {
  return (
    <div className="fixed inset-0 flex z-50 items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] rounded-xl border border-[#5e5e5e] p-6 w-[450px] text-center shadow-lg">
        {/* Icon */}
        <div className="mx-auto w-20 h-20 rounded-full bg-custom-gradient flex items-center justify-center mb-4">
          <Check size={30} />
        </div>

        <h2 className="text-white text-lg font-semibold">
          {title}
        </h2>

        <p className="text-gray-400 text-sm mt-2">
         {description}
        </p>

        <button onClick={onClose} className="mt-5 px-6 py-2  text-white rounded-full flex items-center justify-center gap-2 mx-auto hover:opacity-90 transition">
        <ArrowBtn title="Continue" />
        </button>
      </div>
    </div>
  );
}

export default Popup;
