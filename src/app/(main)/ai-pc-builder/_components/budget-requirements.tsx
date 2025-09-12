import ArrowBtn from "@/components/ui/arrow-btn";
import Input from "@/components/ui/input";
import React from "react";

function BudgetRequirements() {
  return (
    <div className="flex flex-wrap p-4 md:p-12 justify-between">
      <div className="md:w-[45%]">
        <h1 className="uppercase mb-4 font-bold tracking-wider text-3xl">
          budget & REQUIREMENT
        </h1>
        <div className="flex flex-col gap-4">
          <Input label="Budget" />
          <Input label="Budget" />
          <Input label="Budget" />
          <textarea
            className="w-full px-4 py-3 rounded-2xl bg-[#1d1d1d] border border-[#FFFFFF36] text-[#FFFFFF] placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition"
            placeholder="Extra notes..."
          />

          <div className="flex justify-start items-center">
            <ArrowBtn title="submit" />
          </div>
        </div>
      </div>

      <div className="md:w-[45%]">
        <h1 className="uppercase mb-4">Extra</h1>
        <div className="flex flex-col items-start gap-2 relative">
          {/* Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer">
  {/* Hidden input drives the state */}
  <input type="checkbox" className="peer hidden" />

  {/* Custom box */}
  <span className="w-5 h-5 rounded-sm border-2 border-pink-500 bg-black flex items-center justify-center 
                  peer-checked:bg-pink-500 peer-checked:border-pink-500">
    {/* White checkmark shows when checked */}
    <svg
      className="hidden w-3 h-3 text-white peer-checked:inline-block"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M2 8l4 4 8-8" />
    </svg>
  </span>

  <span className="text-white">Monitor</span>
</label>

        </div>
      </div>
    </div>
  );
}

export default BudgetRequirements;
